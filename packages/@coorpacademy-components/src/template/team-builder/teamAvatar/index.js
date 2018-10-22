import React from 'react';
import {map} from 'lodash/fp';

import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../../atom/provider';
import colors from '../../app-racing/game/common-fixtures/colors';

import Avatar from '../avatar';

import style from './style.css';

const TeamAvatar = (props, context) => {
  const {name, members, numberSlotTaken, number} = props;
  const title = `${name}: ${numberSlotTaken}/${members.length}`;
  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: colors[number]
        }}
      >
        <h1>{title}</h1>
      </header>
      <div className={style.members}>
        {map(member => {
          if (isEmpty(member)) return null;
          return (
            <div className={style.avatar} key={`${number}_${member.name}`}>
              <Avatar {...member} color={colors[number]} />
            </div>
          );
        }, members)}
      </div>
    </div>
  );
};

TeamAvatar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamAvatar;
