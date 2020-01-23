import classnames from 'classnames';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon,
  NovaCompositionCoorpacademyBolt as BoltIcon,
  NovaSolidSchoolScienceGraduationHat as CertificationIcon,
  NovaSolidContentContentBook1 as LearnerIcon,
  NovaSolidVoteRewardsRewardsBadge1 as BonusIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './engine-stars.css';

const ICONS = {
  microlearning: TimerIcon,
  learner: LearnerIcon,
  battle: BoltIcon,
  certifications: CertificationIcon,
  bonus: BonusIcon
};

const ToolTip = ({toolTip, id}, context) => {
  if (!toolTip) {
    return null;
  }

  const {skin} = context;
  const {preMessage, endMessage, linkMessage, onClick} = toolTip;
  const primary = get('common.primary', skin);

  const handleClick = onClick;

  return (
    <ReactTooltip
      id={id}
      className={style.toolTip}
      data-event-off="click"
      place="left"
      effect="solid"
      delayHide={500}
    >
      <p className={style.toolTipContent}>
        <span>{`${preMessage}`}</span>
        <Link
          onClick={handleClick}
          style={{
            color: primary
          }}
        >
          {`${linkMessage}`}
        </Link>
        <span>{`${endMessage}`}</span>
      </p>
    </ReactTooltip>
  );
};

ToolTip.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const EngineStars = (props, context) => {
  const {skin} = context;
  const {disabled, type, stars, title, active= false, onClick = noop,  toolTip = null} = props;
  const dark = get('common.dark', skin);
  const light = get('common.light', skin);
  const primary = get('common.primary', skin);
  const IconType = ICONS[type];

  return (
    <div
      data-tip={disabled}
      onClick={disabled || active? noop : onClick}
      data-for={disabled && type}
      className={classnames([style.engineStars, disabled ? style.disabled : '', active ? style.active : ''])}
    >
      <ToolTip toolTip={toolTip} id={type} />

      <span
        className={style.engineIcon}
        style={{
          backgroundColor: primary
        }}
      >
        <IconType className={style.iconHeader} width="30" />
      </span>
      <div className={style.score} style={{
          color: active? primary: dark
        }}>
        <p data-name="star-counter">{stars}</p>
        <span>
          <StarIcon className={style.iconStar} color={active? primary: dark} />
        </span>
      </div>
      <div className={style.scoreTitle}>{title}</div>
    </div>
  );
};

EngineStars.propTypes = {
  type: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  toolTip: PropTypes.shape({
    preMessage: PropTypes.string,
    linkMessage: PropTypes.string,
    postMessage: PropTypes.string,
    onClick: PropTypes.func
  })
};

EngineStars.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default EngineStars;
