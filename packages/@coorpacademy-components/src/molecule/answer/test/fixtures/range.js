import QuestionRange from '../../../questions/question-range/test/fixtures/default';

const answerProps = QuestionRange.props;

export default {
  props: {
    model: {
      type: 'slider',
      ...answerProps
    }
  }
};
