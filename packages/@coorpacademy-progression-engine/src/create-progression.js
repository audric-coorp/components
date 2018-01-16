// @flow
import getConfig from './config';
import type {Content, Progression, State, Engine, Configuration} from './types';
import type {Instruction} from './compute-next-step/rule-engine/types';
import updateVariables from './compute-next-step/rule-engine/apply-instructions';

export const createStateFromConfig = (
  initialState: State,
  configuration: ?Configuration
): State => {
  if (configuration && configuration.instructions)
    return updateVariables(configuration.instructions)(initialState);
  return initialState;
};

type CreateProgressionOptions = {
  instructions?: Array<Instruction>,
  livesDisabled?: boolean
} | void;

export default function createProgression(
  engine: Engine,
  content: Content,
  initialContent: Content,
  options: CreateProgressionOptions
): Progression {
  const config = getConfig({ref: engine.ref, version: engine.version});

  const {instructions = null, livesDisabled = false} = options || {};

  const currentEngine = {
    ...engine,
    version: config.version
  };

  const initialState: State = {
    lives: config.lives,
    livesDisabled: Boolean(livesDisabled || config.livesDisabled),
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    nextContent: initialContent,
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {}
  };

  const configuration = {
    instructions
  };

  const state = createStateFromConfig(initialState, configuration);

  return {
    content,
    initialState,
    state,
    configuration,
    actions: [],
    engine: currentEngine
  };
}
