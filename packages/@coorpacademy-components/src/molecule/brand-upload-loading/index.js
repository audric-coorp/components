import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    filename: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandUploadLoading = (props, children) => {
    const {
      title = 'please wait',
      filename = ''
    } = props;

    return (
      <div className={style.wrapper}>
        <p>{title}</p>
        <p>{filename}</p>
      </div>
    );
  };

  BrandUploadLoading.validate = createValidate(conditions);
  return BrandUploadLoading;
};
