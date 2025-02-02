import {defaultsDeep} from 'lodash/fp';
import BrandUpload from '../../../../../organism/brand-upload/test/fixtures/default';
import Users from './uploadusers';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'success',
        message: 'Import successful',
        onClose: () => {}
      }
    ],
    content: {
      type: 'upload',
      ...BrandUpload.props
    }
  })
};
