// @flow strict

import {
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife
} from './compute-next-step';
import checkAnswer from './check-answer';
import checkAnswerCorrectness from './check-answer-correctness';
import createState from './create-state';
import createProgression, {createRacing} from './create-progression';
import {getConfig, getConfigForProgression} from './config';
import ERRORS from './errors';

import type {
  CHAPTER,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AvailableContent,
  Config,
  Content,
  ContentType,
  ContentSlide,
  Engine,
  EngineOptions,
  GenericContent,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  ResourceContent,
  Slide,
  State
} from './types';

import type {Instruction, ChapterRule} from './rule-engine/types';
import {computeRacingSetup} from './compute-next-step/racing';

export type {
  CHAPTER,
  LEVEL,
  SLIDE,
  NODE,
  FAILURE,
  SUCCESS,
  Action,
  Answer,
  AvailableContent,
  ChapterRule,
  Config,
  Content,
  ContentType,
  ContentSlide,
  Engine,
  EngineOptions,
  GenericContent,
  Instruction,
  PartialCorrection,
  Progression,
  ProgressionId,
  Question,
  ResourceContent,
  Slide,
  State
};

export {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  computeRacingSetup,
  createState,
  createRacing,
  createProgression,
  getConfig,
  getConfigForProgression,
  ERRORS
};
