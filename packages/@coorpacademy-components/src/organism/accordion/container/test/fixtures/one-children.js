import React from 'react';
import QcmGraphic from '../../../../../molecule/questions/qcm-graphic';
import qcmGraphicFixture from '../../../../../molecule/questions/qcm-graphic/test/fixtures/default';

export default {
  props: {
    tabProps: [
      {
        title: 'Qcm image'
      }
    ]
  },
  children: [<QcmGraphic key="1" {...qcmGraphicFixture.props} />]
};
