export default {
  props: {
    mainTitle: 'Activity:',
    mainSubtitle: 'How is your progress going in your course?',
    total: {
      stars: 13400,
      label: 'Total:'
    },
    recommendation: {
      title: 'Start learning to discover your activity',
      subtitle: 'We recommend',
      courseTitle: 'BigData',
      onClick: () => console.log('start course'),
      cta: 'Start Learning'
    },
    loading: false,
    engines: [
      {
        type: 'learner',
        title: 'Courses',
        stars: 2100,
        active: true,
        onClick: () => console.log('learner')
      },
      {
        type: 'microlearning',
        title: 'Microlearning',
        stars: 0,
        disabled: true,
        onClick: () => console.log('microlearning'),
        toolTip: {
          preMessage:
            'This feature is currently unavailable on your platform. If you want to activate it, contact your manager or',
          linkMessage: 'click here',
          endMessage: 'so we may pass the message on.',
          onClick: console.log
        }
      },
      {
        type: 'battle',
        title: 'Battles',
        stars: 23830,
        onClick: () => console.log('battle')
      },
      {
        type: 'certifications',
        title: 'Certifications',
        stars: 500,
        onClick: () => console.log('certifications')
      },
      {
        type: 'bonus',
        title: 'Bonus',
        stars: 20,
        disabled: true,
        onClick: () => console.log('bonus'),
        toolTip: {
          preMessage:
            'This feature is currently unavailable on your platform. If you want to activate it, contact your manager or',
          linkMessage: 'click here',
          endMessage: 'and we will pass the message on.',
          onClick: console.log
        }
      }
    ],
    progressions: [
      {
        ref: '09',
        completion: 0.3,
        stars: 400,
        disabled: false,
        label: 'Big Data',
        level: 'Basic',
        state: 'Continue learning',
        type: 'course',
        adaptive: false,
        onClick: () => {
          console.log('course');
        }
      },
      {
        ref: '04',
        completion: 1,
        stars: 700,
        maxStars: 800,
        disabled: false,
        label: 'Prospectives',
        level: 'Coach',
        state: 'Redo this course',
        type: 'chapter',
        adaptive: true,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '07',
        completion: 1,
        stars: 700,
        disabled: false,
        label: 'Prospectives - Base Level',
        state: 'Launch a battle',
        type: 'battle',
        adaptive: false,
        onClick: () => {
          console.log('battle');
        }
      },
      {
        ref: '08',
        completion: 1,
        stars: 700,
        disabled: false,
        label: 'Jedi certification',
        state: 'See certification',
        type: 'certification',
        adaptive: false,
        onClick: () => {
          console.log('certification');
        }
      },
      {
        ref: '03',
        completion: 0,
        stars: 400,
        disabled: false,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '05',
        completion: 0.75,
        stars: 400,
        disabled: true,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      },
      {
        ref: '06',
        completion: 0.75,
        stars: 400,
        disabled: false,
        label: 'Lead generation',
        level: 'Advanced',
        state: 'Start learning',
        type: 'chapter',
        adaptive: false,
        onClick: () => {
          console.log('chapter');
        }
      }
    ],
    themeFilter: {
      options: [
        {
          name: 'Digital',
          value: 'Digital',
          selected: true
        },
        {
          name: 'Esprit du temps',
          value: 'Esprit du temps',
          selected: false
        }
      ],
      onChange: value => console.log(value)
    }
  }
};
