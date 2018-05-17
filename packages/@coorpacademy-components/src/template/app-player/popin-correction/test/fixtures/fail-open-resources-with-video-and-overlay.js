import defaultsDeep from 'lodash/fp/defaultsDeep';
import failVideo from './fail-open-resources-with-video-extralife-granted';

export default defaultsDeep(failVideo, {
  props: {
    extraLifeGranted: false,
    header: {
      cta: null
    },
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    },
    quit: {
      cta: {
        title: 'Quit',
        onClick: () => console.log('quit!')
      }
    }
  }
});