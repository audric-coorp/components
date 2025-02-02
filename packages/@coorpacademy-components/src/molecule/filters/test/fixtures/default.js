import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';
import dropdownsSort from '../../../../atom/select/test/fixtures/sort';
import RadioGroup from '../../../../atom/radio-group/test/fixtures/default';

const selectFilter = dropdownsFilter.props;
const selectSort = dropdownsSort.props;
const types = RadioGroup.props;

export default {
  props: {
    filterTabLabel: 'Filter',
    filterCTALabel: 'Filter',
    sortTabLabel: 'Sort by',
    sortCTALabel: 'Sort',
    filters: [
      {
        type: 'select',
        fieldName: 'Thematic',
        ...selectFilter,
        title: 'Thematic:',
        options: [
          {
            name: 'digital',
            value: 'digital',
            selected: false
          },
          {
            name: 'Esprit du temps',
            value: 'Esprit du temps',
            selected: true
          },
          {
            name: 'La troisième révolution industrielle',
            value: 'La 3e révolution industrielle',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        ...selectFilter,
        fieldName: 'Courses',
        title: 'Learning Paths:',
        options: [
          {
            name: 'All categories',
            value: 'ALL',
            selected: false
          },
          {
            name: 'Innovations & Technologies',
            value: 'Innovations',
            selected: true
          },
          {
            name: 'Management',
            value: 'Management',
            selected: false
          },
          {
            name: 'Sustainable development',
            value: 'Sustainable',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'radio',
        fieldName: 'contentType',
        ...types,
        title: 'Type:',
        onChange: value => console.log(value)
      }
    ],
    sorting: {
      ...selectSort,
      title: 'Sort by:',
      options: [
        {
          name: 'Position',
          value: 'Position',
          selected: true
        },
        {
          name: 'Most popular',
          value: 'Most popular',
          selected: false
        },
        {
          name: 'Newest',
          value: 'Newest',
          selected: false
        }
      ],
      onChange: value => console.log(value)
    },
    onSearch: () => console.log('onSearch')
  }
};
