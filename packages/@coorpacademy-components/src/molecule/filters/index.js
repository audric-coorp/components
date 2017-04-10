import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Select from '../../atom/select';
import RangeSlider from '../../molecule/range-slider';
import shallowCompare from '../../util/shallow-compare';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

class Filters extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      opened: false,
      filter: false,
      sorted: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOpenFilter = this.handleOpenFilter.bind(this);
    this.handleOpenSort = this.handleOpenSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleOnClick() {
    this.setState({opened: !this.state.opened});
  }

  handleOpenFilter() {
    this.setState({
      filter: !this.state.filter,
      sorted: false
    });
  }

  handleOpenSort() {
    this.setState({
      sorted: !this.state.sorted,
      filter: false
    });
  }
  handleSearch() {
    this.setState({
      sorted: false,
      filter: false
    });
    if (this.props.onSearch) {
      this.props.onSearch();
    }
  }

  render() {
    const {
      titlepage,
      timer,
      thematic,
      authors,
      sorting,
      courses,
      ctalabelfilter,
      ctalabelsort,
      onSearch
    } = this.props;
    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);
    const isActive = this.state.opened === true;
    const filtersActive = this.state.filter === true;
    const sortingActive = this.state.sorted === true;

    const coursesView = courses !== undefined ? (
      <div className={style.choice}>
        <Select {...courses} />
      </div>
    ) : null;

    const thematicView = thematic !== undefined ? (
      <div className={style.choice}>
        <Select {...thematic} />
      </div>
    ) : null;

    const timerView = timer !== undefined ? (
      <div className={style.choice}>
        <RangeSlider {...timer} />
      </div>
    ) : null;

    const authorsView = authors !== undefined ? (
      <div className={style.choice}>
        <Select {...authors} />
      </div>
    ) : null;

    const sortView = sorting !== undefined ? (
      <div className={style.select} >
        <Select {...sorting} />
      </div>
    ) : null;

    const emptyFilters = thematic === undefined && timer === undefined &&
                         courses === undefined && authors === undefined;

    return (
      <div className={style.search}>
        <div className={filtersActive ? style.activeDefault : style.default}>
          <div
            className={style.title}
            style={{
              color: defaultColor
            }}
            onClick={this.handleOpenFilter}
          >
            {ctalabelfilter}
          </div>
        </div>
        <div
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div
            className={style.title}
            style={{
              color: defaultColor
            }}
            onClick={this.handleOpenSort}
          >
            {ctalabelsort}
          </div>
        </div>
        <div className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters} >
          <div className={emptyFilters ? style.wrapperNone : style.wrapper}>
            {thematicView}
            {timerView}
            {coursesView}
            {authorsView}
          </div>
          <div
            className={`${style.CTAfilter} ${hoverFill}`}
            style={{
              backgroundColor: defaultColor
            }}
            onClick={this.handleSearch}
          >
            {ctalabelfilter}
          </div>
        </div>
        <div className={sortingActive ? style.activeSorting : style.sorting} >
          <div className={style.mainTitle}>{titlepage}</div>
          {sortView}
          <div
            className={`${style.CTAfilter} ${hoverFill}`}
            style={{
              backgroundColor: defaultColor
            }}
            onClick={this.handleSearch}
          >
            {ctalabelsort}
          </div>
        </div>
      </div>
    );
  }
}

Filters.contextTypes = {
  skin: PropTypes.object
};

Filters.propTypes = {
  titlepage: PropTypes.string,
  thematic: PropTypes.object,
  timer: PropTypes.object,
  courses: PropTypes.object,
  authors: PropTypes.object,
  sorting: PropTypes.object,
  onSearch: PropTypes.func
};

export default Filters;
