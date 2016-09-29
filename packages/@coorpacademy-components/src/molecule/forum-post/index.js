import {checker, createValidate} from '../../util/validation';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    name: checker.string.optional,
    date: checker.string.optional,
    message: checker.string.optional,
    avatar: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Picture = createPicture(treant, options);

  const ForumPost = (props, children) => {
    const {
      name,
      date,
      message,
      avatar
    } = props;

    return (
      <div className={style.post}>
        <div className={style.image}>
          <Picture
            src={avatar}
            className={style.avatar}
          />
        </div>
        <div className={style.content}>
          <div className={style.head}>
            <span className={style.author}>{name}</span>
            <span className={style.date}>{date}</span>
          </div>
          <div className={style.body}>
            {message}
          </div>
          <div className={style.footer}>
            <a className={style.action}>Répondre</a>
            <a className={style.action}>Éditer</a>
            <a className={style.action}>Supprimer</a>
          </div>
        </div>
      </div>
      );
  };

  ForumPost.validate = createValidate(conditions);
  return ForumPost;
};
