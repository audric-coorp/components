import {defaultsDeep} from 'lodash/fp';
import UserEdit from '../../../../../organism/brand-form/test/fixtures/manageusers-edit';
import Users from './manageusers';

const {props} = Users;
const content = UserEdit.props;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      ...content
    }
  })
};
