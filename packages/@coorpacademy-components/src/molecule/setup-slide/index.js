import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import InputSwitch from '../../atom/input-switch';
import ImageUpload from '../../atom/image-upload';
import SetupCohortItem from '../setup-cohort-item';
import MessagePopin from '../message-popin';
import style from './style.css';

const SetupSlide = props => {
  const {fields} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'switch':
        return <InputSwitch {...field} />;
      case 'select':
        return <Select {...field} />;
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'image':
        return <ImageUpload {...field} />;
      case 'splitForm':
        return <SetupCohortItem field={field} />;
      case 'alert':
        return <MessagePopin header={field.title} content={field.subtitle} />;
      default:
        return <InputText {...field} />;
    }
  };

  const buildField = (field, index) => {
    const input = buildInput(field);
    return (
      <div className={style.field} key={index}>
        {input}
      </div>
    );
  };

  const fieldsList = map.convert({cap: false})(buildField, fields);

  return <div className={style.wrapper}>{fieldsList}</div>;
};

SetupSlide.defaultProps = {
  fields: []
};

SetupSlide.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  )
};
export default SetupSlide;
