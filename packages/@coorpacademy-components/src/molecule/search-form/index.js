import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionNavigationMore as ClearIcon} from '@coorpacademy/nova-icons';
import Search from '../search';
import style from './style.css';

const SearchForm = (props, context) => {
  const {action, method, onSubmit, onReset, search, onSearchFocus, onSearchBlur} = props;
  const handleSubmit = evt => {
    evt.preventDefault();
    return onSubmit && onSubmit(evt);
  };
  const {skin} = context;
  const dark = get('common.dark', skin);

  return (
    <form
      className={style.form}
      action={action}
      method={method}
      onSubmit={handleSubmit}
      data-name="searchForm"
    >
      <Search {...search} onFocus={onSearchFocus} onBlur={onSearchBlur} />
      <div onClick={onReset} className={search.value ? style.wrapperClear : style.wrapperNoClear}>
        <ClearIcon color={dark} className={style.clear} />
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onSearchFocus: PropTypes.func,
  onSearchBlur: PropTypes.func,
  search: PropTypes.shape(Search.propTypes)
};

export default SearchForm;
