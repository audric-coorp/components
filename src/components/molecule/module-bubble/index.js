import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import { checker, createValidate } from '../../../util/validation';
import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';
import { stopPropagation } from '../../../util/bubbling';

const conditions = checker.shape({
  props: checker.shape({
    module: checker.shape({
      disabled: checker.bool.optional,
      filtered: checker.bool.optional,
      label: checker.string,
      status: checker.string
    }),
    onClick: checker.func
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin, translate} = options;

  const LabelModName = createLabelModName(engine, options);

  const ModuleBubble = (props, children) => {
    const {module, onClick} = props;
    const code = getOr('', `icons[${module.status}]`, skin);
    const icon = String.fromCharCode(code);

    const click = !disabled && pipe(
      stopPropagation,
      partial(unary(onClick), [module])
    );

    const filtered = module.filtered;
    const disabled = module.disabled;
    const label = translate ? translate(module.label) : module.label;

    const background = getOr('#fff', `mod[${module.status}]`, skin);

    return (
      <div className={style.modulewrapper}
            attributes={{
              'data-name': 'module-bubble'
            }}
      >
        <div
          className={style.bubble}
          style={{
            cursor: disabled ? 'default' : 'pointer'
          }}
          onClick={click}
        >
          <span
            className={style.bubbleBG}
            style={{
              background
            }}
          >
          </span>
          <span
            className={disabled ? style.iconDisabled : style.icon}
            style={{
              color: disabled ? getOr('#fff', 'theme.lock', skin) : '#fff'
            }}
          >
              {icon}
          </span>
        </div>
        <LabelModName>
          {label}
        </LabelModName>
      </div>
    );
  };

  ModuleBubble.validate = createValidate(conditions);
  return ModuleBubble;
};
