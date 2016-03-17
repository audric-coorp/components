import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

export default (engine, skin, translate) => (props) => {
  const {h} = engine;

  const LabelModName = createLabelModName(engine, skin);

  const iconCode = String.fromCharCode(skin.icons[props.status]);
  const inverted = props.inverted === 'true';
  const className = inverted ? style.inverted : style.default;
  const label = translate ? translate(props.label) : props.label;

  return (
    <div>
      <span className={className}
            attributes={{
              'data-icon': iconCode
            }}
            style={{
              background: skin && skin.mod[props.status]
            }}
            onClick={e => props.onClick(e)}
      >
      </span>
      <LabelModName>

      </LabelModName>
    </div>
  );
};
