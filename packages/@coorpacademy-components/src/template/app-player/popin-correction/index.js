import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defer, isNil, isEmpty, get, getOr, keys, omit} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaLineInterfaceFeedbackInterfaceAlertCircle as AlertIcon
} from '@coorpacademy/nova-icons';
import Loader from '../../../atom/loader';
import Link from '../../../atom/link';
import Provider from '../../../atom/provider';
import ResourceBrowser from '../../../organism/resource-browser';
import Accordion from '../../../organism/accordion/container';
import Header from '../popin-header';
import style from './style.css';

const extractTabs = items =>
  keys(items).map(type => {
    const item = items[type];
    return {iconType: type, title: item.title, isOpen: item.open};
  });

const Resources = ({resources, overlay}) => (
  <div className={style.browserWrapper}>
    <ResourceBrowser resources={resources.value} overlay={overlay} className={style.browser} />
  </div>
);

const SimpleText = ({text}) => (
  <div data-name="simpleText" className={style.simpleTextWrapper}>
    <p
      className={style.simpleText}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  </div>
);

const AssistanceLink = (props, context) => {
  if (isEmpty(props)) return null;
  const {title, onClick} = props;
  const {skin} = context;
  const white = get('common.white', skin);

  return (
    <div className={style.wrapperAssistance} onClick={onClick}>
      <AlertIcon className={style.alertIcon} color={white} />
      <span className={style.titleLink}> {title} </span>
    </div>
  );
};

AssistanceLink.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SimpleText.propTypes = {
  text: PropTypes.string
};

const Question = ({header, answer, answerPrefix}) => (
  <div className={style.question}>
    <p
      className={style.questionHeader}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: header
      }}
    />
    <div className={style.answerWrapper}>
      <CheckIcon className={style.checkIcon} color="inherit" />
      {answerPrefix ? <span className={style.answerPrefix}>{answerPrefix}</span> : null}
      <span
        className={style.answer}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: answer
        }}
      />
    </div>
  </div>
);

Question.propTypes = {
  header: PropTypes.string,
  answerPrefix: PropTypes.string,
  answer: PropTypes.string
};

class PopinCorrection extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      this.setState({open: true});
      this.props.onOpen && this.props.onOpen();
    });
  }

  initWrapper(wrapper) {
    this.wrapper = wrapper;
  }

  render() {
    const {
      header = {},
      extraLifeGranted,
      gameOver,
      question,
      overlay,
      resources,
      klf,
      tips,
      onClick,
      quit = {},
      assistanceLink = {}
    } = this.props;

    const {skin} = this.context;
    const primary = getOr('#f0f', 'common.primary', skin);

    const tabs = extractTabs({resources, klf, tips});
    const isLoading = isNil(header.failed);
    const className = this.state.open ? style.finalBackground : style.initialBackground;
    const {title, ...linkProps} = quit.cta || {};

    const quitCta =
      title || extraLifeGranted ? (
        <Link
          style={{
            color: primary
          }}
          className={extraLifeGranted ? style.hideQuitCta : style.quitCta}
          data-name="nextLink"
          data-popin="popinCorrection"
          data-next="quit-with-extra-life"
          {...linkProps}
        >
          {title}
        </Link>
      ) : null;

    return (
      <div ref={this.initWrapper} className={className} data-name="popinCorrection">
        <div className={style.scrollWrapper}>
          <div className={isLoading ? style.loadingWrapper : style.wrapper}>
            <div className={isLoading ? style.loadingContent : style.content}>
              <Header
                {...header}
                gameOver={gameOver}
                extraLifeGranted={extraLifeGranted}
                animated
              />
              <Question {...question} />
              <Accordion tabProps={tabs} onClick={onClick} oneTabOnly>
                {isEmpty(getOr([], 'value', resources)) ? null : (
                  <Resources resources={resources} overlay={overlay} />
                )}
                <SimpleText text={klf.value} />
                <SimpleText text={tips.value} />
              </Accordion>
            </div>
            {quitCta}
            <AssistanceLink {...assistanceLink} />
          </div>
          <Loader className={isLoading ? style.activeLoader : style.inactiveLoader} />
        </div>
      </div>
    );
  }
}

PopinCorrection.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinCorrection.propTypes = {
  resources: PropTypes.shape({
    title: PropTypes.string,
    value: ResourceBrowser.propTypes.resources,
    open: PropTypes.bool
  }),
  assistanceLink: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func
  }),
  overlay: ResourceBrowser.propTypes.overlay,
  header: PropTypes.shape(omit(['animated'], Header.propTypes)),
  question: PropTypes.shape(Question.propTypes),
  klf: PropTypes.shape(SimpleText.propTypes),
  tips: PropTypes.shape(SimpleText.propTypes),
  onClick: PropTypes.func,
  extraLifeGranted: PropTypes.bool,
  gameOver: PropTypes.bool,
  quit: PropTypes.shape({
    cta: PropTypes.shape({
      ...Link.propTypes,
      title: PropTypes.string
    })
  }),
  onOpen: PropTypes.func
};

export default PopinCorrection;
