// @flow

import keys from 'lodash/fp/keys';
import get from 'lodash/fp/get';
import isNull from 'lodash/fp/isNull';
import remove from 'lodash/fp/remove';
import includes from 'lodash/fp/includes';
import type {Answer, Choice, ProgressionId, QuestionType} from '@coorpacademy/progression-engine';
import {hasSeenLesson} from '../../utils/state-extract';
import {createAnswer} from '../api/progressions';
import {fetchAnswer} from '../api/answers';
import {fetchSlideChapter} from '../api/contents';
import type {DispatchedAction, GetState, Options} from '../../definitions/redux';
import {progressionUpdated, selectProgression} from './progressions';
import {toggleAccordion, ACCORDION_KLF, ACCORDION_TIPS, ACCORDION_LESSON} from './corrections';

export const ANSWER_EDIT = {
  qcm: '@@answer/EDIT_QCM',
  qcmGraphic: '@@answer/EDIT_QCM_GRAPHIC',
  qcmDrag: '@@answer/EDIT_QCM_DRAG',
  template: '@@answer/EDIT_TEMPLATE',
  basic: '@@answer/EDIT_BASIC',
  slider: '@@answer/EDIT_SLIDER'
};

type PayloadEditAnswer = Array<string>;
type EditAnswerAction = {
  type: string,
  meta: {
    progressionId: ProgressionId
  },
  payload: PayloadEditAnswer
};

const newState = (
  state: PayloadEditAnswer = [],
  questionType: QuestionType,
  newValue: string | Array<string> | Choice
  // $FlowFixMe incompatible with implicitly-returned undefined.
): PayloadEditAnswer => {
  switch (questionType) {
    case 'qcm':
    case 'qcmGraphic':
    case 'qcmDrag':
      if (newValue.label === undefined) return state;

      // $FlowFixMe string [1] is incompatible with property label of unknown type
      if (includes(newValue.label, state)) {
        // $FlowFixMe dont see if (newValue.label === undefined) above...
        return remove(label => label === newValue.label)(state);
      } else {
        // $FlowFixMe property label of unknown type [1] is incompatible with string
        return [...state, newValue.label];
      }

    case 'basic':
    case 'slider':
      // $FlowFixMe here newValue IS string
      return [newValue];

    case 'template':
      // $FlowFixMe here newValue IS Array<string>
      return newValue;
  }
};

export const editAnswer = (
  state: PayloadEditAnswer,
  questionType: QuestionType,
  progressionId: ProgressionId,
  newValue: string | Array<string> | Choice
): EditAnswerAction => {
  const type = ANSWER_EDIT[questionType];
  if (!type) {
    throw new Error(
      // $FlowFixMe loadsh def
      `Cannot find edit action for "${questionType}". It must be within [${keys(ANSWER_EDIT)}]`
    );
  }
  return {
    type,
    meta: {
      progressionId
    },
    payload: newState(state, questionType, newValue)
  };
};

export const validateAnswer = (progressionId: ProgressionId, body: {answer: Answer}) => async (
  dispatch: Function,
  getState: GetState,
  {services}: Options
): DispatchedAction => {
  const createAnswerResponse = await dispatch(createAnswer(progressionId, body.answer));
  if (createAnswerResponse.error) return createAnswerResponse;

  const payload = createAnswerResponse.payload;

  const progressionState = get('state', payload);
  const slideId = get('content.ref', progressionState);
  const nextContentRef = get('nextContent.ref', progressionState);

  const {isCorrect = false} = progressionState;

  const state = getState();

  if (get('nextContent.type', progressionState) === 'slide') {
    await dispatch(fetchSlideChapter(nextContentRef));
  }

  if (isNull(isCorrect)) return dispatch(selectProgression(progressionId));

  if (isCorrect) {
    await dispatch(toggleAccordion(ACCORDION_TIPS));
  } else if (nextContentRef !== 'extraLife' && hasSeenLesson(state)) {
    await dispatch(toggleAccordion(ACCORDION_KLF));
  } else {
    await dispatch(toggleAccordion(ACCORDION_LESSON));
  }

  await dispatch(progressionUpdated(progressionId));
  return dispatch(fetchAnswer(progressionId, slideId, body.answer));
};
