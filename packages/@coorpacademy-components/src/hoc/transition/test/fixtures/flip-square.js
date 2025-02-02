import React from 'react';
import classnames from 'classnames';
import style from './style.css';

const FlippableSquare = props => (
  <div className={classnames(props.className, style.container)}>
    <div className={style.square} onTransitionEnd={props.onTransitionEnd}>
      <div className={style.front}>
        <p>What is behind that card ?</p>
        <p>Click on animated checkbox to see</p>
      </div>
      <div className={style.back} />
    </div>
  </div>
);

export default {
  props: {
    name: 'flippableSquare',
    animated: false,
    className: style.flipped,
    onTransitionEnd: () => console.log('flip done !')
  },
  children: <FlippableSquare />
};
