import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ContentInfo = ({
  renderContentTypeIcon = () => null,
  renderCheckIcon = () => null,
  renderButton = () => null,
  renderProgressBar = () => null,
  empty,
  style,
  title,
  author,
  certifiedAuthor
}) => {
  return (
    <div data-name="info" className={style.infoWrapper}>
      {() => renderContentTypeIcon()}
      <div className={classnames(style.title, empty ? style.empty : null)}>
        <div data-name="title" title={title}>
          {title}
        </div>
      </div>
      <div
        data-name="author"
        title={author}
        className={classnames(
          style.author,
          certifiedAuthor && style.certified,
          empty ? style.empty : null
        )}
      >
        <span>{author}</span>
        {renderCheckIcon()}
      </div>

      {renderProgressBar()}
      {renderButton()}
    </div>
  );
};

ContentInfo.propTypes = {
  renderContentTypeIcon: PropTypes.func,
  renderCheckIcon: PropTypes.func,
  renderButton: PropTypes.func,
  renderProgressBar: PropTypes.func.isRequired,
  empty: PropTypes.bool,
  title: PropTypes.string,
  author: PropTypes.string,
  certifiedAuthor: PropTypes.bool
};

export default ContentInfo;
