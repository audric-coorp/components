import gameStatus from '../../game-statuses';

export default {
  props: {
    gameStatus: gameStatus.DEFAULT,
    myTeam: undefined,
    teams: [
      {
        name: 'Team 1',
        number: 0,
        isMyTeam: false,
        members: [{}, {}]
      },
      {
        name: 'Team 2',
        number: 1,
        isMyTeam: false,
        members: []
      },
      {
        name: 'Team 3',
        number: 2,
        isMyTeam: false,
        members: []
      },
      {
        name: 'Team 4',
        number: 3,
        isMyTeam: false,
        members: []
      }
    ],
    cta: {
      submitValue: 'Join a team',
      onClick: () => console.log('Joined !')
    }
  }
};
