import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import style from './style.css';

const Tab = props => {
  const handleTabClick = () => props.onClick(props.targetContent);

  return (
    <div className={style.tab} onClick={handleTabClick}>
      <div className={style.title}>{props.title}</div>
      <div className={style.link}>
        {map(
          link => (
            <div key={link.title}>{link.title}</div>
          ),
          props.links
        )}
      </div>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
  targetContent: PropTypes.string
};

export default Tab;
