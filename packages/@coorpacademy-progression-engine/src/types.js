// @flow

export type Step = {
  current: number,
  total: number
};

export type Content = {
  ref: string,
  type: string,
  version?: string
};

export type State = {
  content?: Content,
  nextContent: Content,
  lives: number,
  isCorrect: boolean,
  slides: Array<string>,
  step: Step
};

export type Action = {
  type: string,
  payload: {
    content: Content,
    nextContent: Content,
    isCorrect: boolean
  }
};

export type Engine = {
  ref: 'microlearning',
  version: string
};

export type Progression = {
  content: Content,
  state: State,
  actions: Array<Action>,
  engine: Engine
};

export type Answer = Array<string>;
export type AcceptedAnswers = Array<Answer>;

export type QCMQuestion = {
  type: 'qcm' | 'qcmDrag',
  content: {
    answers: AcceptedAnswers
  }
};

export type Question = QCMQuestion;

export type Slide = {
  _id: string,
  chapter_id: string,
  question: Question
};

export type MicroLearningConfig = {
  version: string,
  lives: number,
  maxTypos: number,
  slidesToComplete: number
};

export type Config = MicroLearningConfig;
