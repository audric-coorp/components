export default {
  props: {
    action: '/search',
    method: 'post',
    onSubmit: () => console.log('onSubmit'),
    search: {
      placeholder: 'keywords, names...',
      value: 'digital',
      onChange: value => console.log('onChange', value)
    }
  }
};
