import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isArray from 'lodash/fp/isArray';
import isEqual from 'lodash/fp/isEqual';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pick from 'lodash/fp/pick';
import pipe from 'lodash/fp/pipe';
import omit from 'lodash/fp/omit';
import isNull from 'lodash/fp/isNull';
import {
  editComment,
  exit,
  getBestScore,
  getCurrentContent,
  getCurrentExitNode,
  getCurrentProgression,
  getCurrentProgressionId,
  getEndRank,
  getLives,
  getNextContent,
  getRecommendations,
  getStartRank,
  isCommentSent,
  isCurrentEngineLearner,
  isCurrentEngineMicrolearning,
  nextLevel,
  openRecommendation,
  postComment,
  retry,
  seeComment
} from '@coorpacademy/player-store';
import headerProps from './header';

const extractRank = state => {
  const start = getStartRank(state);
  const end = getEndRank(state);

  if (start === end) {
    return null;
  } else {
    const sign = end - start > 0 ? '-' : '+';
    const diff = Math.abs(end - start);
    return `${sign}${diff}`;
  }
};

const extractStars = state => {
  const progression = getCurrentProgression(state);
  const stars = get('state.stars')(progression);
  const bestScore = getBestScore(state);

  return stars > bestScore ? `+${stars - bestScore}` : '+0';
};

const comment = ({translate}, {dispatch}) => state => {
  const progressionId = getCurrentProgressionId(state);
  const content = getCurrentContent(state);
  const message = get('ui.comments.text', state);
  return {
    isSent: isCommentSent(state),
    confirmation: {
      commentSectionTitle: translate('Thank you for your review!'),
      confirmationLinkText: translate('See your comment and those of your peers'),
      onClick: e => dispatch(seeComment)
    },
    edition: {
      title: translate('Share your opinion on this course'),
      value: get('ui.comments.text', state),
      postDisabled: isEmpty(get('ui.comments.text', state)),
      onChange: e => dispatch(editComment(e.target.value)),
      onPost: e => dispatch(postComment(progressionId, content, message))
    }
  };
};

const summaryHeader = ({translate}, {dispatch}) => state => {
  const lives = getLives(state);
  const successCta = {
    title: translate('Back to home'),
    href: '/'
  };

  if (isCurrentEngineLearner(state)) {
    const level = get('level', getCurrentContent(state));
    if (level === 'advanced' || level === 'base') {
      const _nextLevel = getNextContent(state);
      if (_nextLevel) {
        successCta.title = translate('Next level');
        successCta.href = null;
        successCta.onClick = () => dispatch(nextLevel);
        successCta.showNextLevel = true;
      }
    }
  }

  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => ({
        type: 'popinEnd',
        title: getOr('', 'name')(getCurrentContent(state)),
        subtitle: translate('Congratulations!'),
        failed: false,
        stars: extractStars(state),
        rank: extractRank(state),
        cta: successCta
      })
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        type: 'popinEnd',
        title: translate('Ooops'),
        subtitle: lives === 0 ? translate('You are out of lives!') : translate('Nice try!'),
        failed: true,
        lives,
        rank: extractRank(state),
        stars: null,
        cta: {
          title: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter')
            : translate('Retry level'),
          onClick: () => dispatch(retry)
        }
      })
    ],
    [constant(true), constant({type: 'popinEnd'})]
  ]);
};

const extractRecommendation = ({translate}, {dispatch}) => state => {
  const _recommendations = getRecommendations(state);
  const hasRecommendations = isNull(_recommendations) || isArray(_recommendations);

  if (!hasRecommendations) {
    return null;
  }

  const recommendations = map(
    recommendation => ({
      ...recommendation,
      onClick: () => dispatch(openRecommendation(recommendation))
    }),
    _recommendations
  );

  return {
    title: translate('Related subjects'),
    cards: recommendations
  };
};

const extractAction = ({translate}, {dispatch}) => state => {
  const nextContent = getNextContent(state);
  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => {
        if (get('nextContentType', nextContent) === 'chapter') {
          return {
            type: 'nextCourse',
            description: translate('Check out the next chapter in this course!'),
            prefix: translate('Next chapter_'),
            ...nextContent
          };
        } else if (nextContent) {
          // then it is a level
          const {name, levelTranslation} = nextContent;
          return {
            type: 'simple',
            prefix: translate('Next level_'),
            title: `${name} - ${levelTranslation}`,
            button: {
              title: translate('Next level'),
              href: null,
              onClick: () => dispatch(nextLevel)
            }
          };
        }
      }
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => {
        const currentContent = getCurrentContent(state);
        let title = getOr('', 'name', currentContent);
        if (isCurrentEngineLearner(state)) {
          title = `${getOr('', 'name', currentContent)} - ${getOr(
            '',
            'levelTranslation',
            currentContent
          )}`;
        }
        return {
          type: 'simple',
          prefix: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter_')
            : translate('Retry level_'),
          title,
          button: {
            title: isCurrentEngineMicrolearning(state)
              ? translate('Retry chapter')
              : translate('Retry level'),
            onClick: () => dispatch(retry)
          }
        };
      }
    ],
    [constant(true), constant(null)]
  ]);
};

const extractFeedback = pipe(
  pick(['title', 'description', 'media', 'mediaDescription']),
  omit(['media.ref', 'media.subtitles', 'media.posters'])
);

const popinEndStateToProps = (options, store) => state => {
  const progression = getCurrentProgression(state);
  const isCorrect = get('state.isCorrect')(progression);

  const {translate} = options;
  const {dispatch} = store;

  const exitNode = getCurrentExitNode(state);

  const footer = {
    title: translate('Back to home'),
    onClick: () => dispatch(exit)
  };

  const props = {
    header: headerProps(options, store)(state),
    summary: {
      header: summaryHeader(options, store)(state)(exitNode),
      action: extractAction(options, store)(state)(exitNode),
      feedback: extractFeedback(exitNode),
      recommendation: extractRecommendation(options, store)(state),
      comment: isCorrect ? comment(options, store)(state) : null,
      footer
    }
  };

  return props;
};

export default popinEndStateToProps;