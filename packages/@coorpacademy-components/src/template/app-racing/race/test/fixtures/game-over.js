import fiveTowers from '../../../common-fixtures/five-towers';
import spreadTeam from '../../../common-fixtures/spread-team';

export default {
  props: {
    info: {
      title: null,
      success: null,
      gameOver: true
    },
    race: fiveTowers,
    cta: null,
    team: spreadTeam
  }
};
