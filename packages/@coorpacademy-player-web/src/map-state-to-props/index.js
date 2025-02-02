import {cond, constant, get, isNil, isEqual, pipe} from 'lodash/fp';
import {getStepContent, getCurrentProgression, getRoute} from '@coorpacademy/player-store';
import {popinCorrectionStateToProps} from './popin-correction';
import popinEndStateToProps from './popin-end';
import loadingStateToProps from './loading';
import createSlideStateToProps from './slide';

const hasNotProgression = pipe(
  getCurrentProgression,
  isNil
);
const hasNoContent = pipe(
  getStepContent,
  isNil
);
const matchRoute = route =>
  pipe(
    getRoute,
    isEqual(route)
  );
const matchContentType = contentType =>
  pipe(
    getStepContent,
    get('type'),
    isEqual(contentType)
  );
const matchContentRef = contentType =>
  pipe(
    getStepContent,
    get('ref'),
    isEqual(contentType)
  );

export const selectMapStateToVNode = (options, store, views, createStateToVNode) =>
  cond([
    [hasNotProgression, createStateToVNode(views.loading, loadingStateToProps)],
    [hasNoContent, createStateToVNode(views.loading, loadingStateToProps)],
    [
      matchRoute('correction'),
      createStateToVNode(views.popinCorrection, popinCorrectionStateToProps(options, store))
    ],
    [
      matchContentRef('extraLife'),
      createStateToVNode(views.popinCorrection, popinCorrectionStateToProps(options, store))
    ],
    [
      matchContentType('slide'),
      createStateToVNode(views.player, createSlideStateToProps(options, store))
    ],
    [
      matchContentType('success'),
      createStateToVNode(views.popinEnd, popinEndStateToProps(options, store))
    ],
    [
      matchContentType('failure'),
      createStateToVNode(views.popinEnd, popinEndStateToProps(options, store))
    ],
    [constant(true), createStateToVNode(views.loading, loadingStateToProps)]
  ]);
