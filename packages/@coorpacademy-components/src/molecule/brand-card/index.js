import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import Description from './description';
import style from './style.css';

const BrandCard = props => {
  const {title, edit, editHref, see, seeHref, image, description} = props;
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Picture className={style.picture} src={image} />
        <Description description={description} className={style.descriptionWrapper} />
      </div>
      <div className={style.information} data-name={`info-${title}`}>
        <h3>{title}</h3>
        <div className={style.edit}>
          <Link href={editHref} data-name={`edit-${title}`}>
            {edit}
          </Link>
        </div>
        <div className={style.see} data-name={`see-${title}`}>
          <Link target="_blank" href={seeHref}>
            {see}
          </Link>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  edit: PropTypes.string.isRequired,
  editHref: PropTypes.string.isRequired,
  see: PropTypes.string.isRequired,
  seeHref: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default BrandCard;
