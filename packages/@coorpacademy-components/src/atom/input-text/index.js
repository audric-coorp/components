import React from 'react';
import PropTypes from 'prop-types';
import {noop, isNil} from 'lodash/fp';
import classnames from 'classnames';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputText = props => {
  const {
    autoFocus = false,
    placeholder = '',
    value,
    defaultValue,
    onChange = noop,
    error,
    description,
    disabled,
    required,
    modified = false
  } = props;

  const title = `${props.title}${required ? '*' : ''}`;
  const handleChange = e => onChange(e.target.value);
  const className = getClassState(style.default, style.modified, style.error, modified, error);

  return (
    <div className={classnames(className, isNil(props.title) && style.isNoTitle)}>
      <label>
        <span className={style.title}>{title}</span>
        <input
          autoFocus={autoFocus}
          type="text"
          name={title}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={handleChange}
          disabled={disabled}
          onChange={noop}
        />
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

InputText.propTypes = {
  autoFocus: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};
export default InputText;
