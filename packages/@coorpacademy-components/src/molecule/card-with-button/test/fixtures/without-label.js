export default {
  props: {
    username: 'User',
    courseName: 'courseName',
    secondaryButtonLabel: 'Review course',
    primaryButtonLabel: 'Start battle',
    onSecondaryButtonClick: () => console.log('test onClickButtonCourse'),
    onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
    backgroundImg: 'https://img.bfmtv.com/c/1256/708/c32/01a671c64243d70195cbe64a18f2a.jpg'
  }
};
