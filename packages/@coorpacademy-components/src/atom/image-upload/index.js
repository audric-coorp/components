import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import uniqueId from 'lodash/fp/uniqueId';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleDragStart() {
    this.setState(prevState => ({
      dragging: true
    }));
  }

  handleDragStop() {
    this.setState(prevState => ({
      dragging: false
    }));
  }

  render() {
    const idBox = uniqueId('drop-box-');
    const {translate = identity, skin} = this.context;
    const {
      title,
      onChange,
      uploadLabel,
      previewLabel,
      previewImage
    } = this.props;

    const previewView = previewImage ? (
      <div className={style.image}>
        <img src={previewImage} />
      </div>
    ) : (
      {previewLabel}
    );

    return (
      <div className={style.wrapper}>
        <div className={style.previewWrapper}>
          {previewView}
        </div>
        <div className={this.state.dragging ? style.dragging : style.inputWrapper}
          id={idBox}
        >
          <i className={style.arrow} />
          <div className={style.uploadLabel}>
            {uploadLabel}
          </div>
          <input
            type='file'
            className={style.input}
            onChange={onChange}
            onDragEnter={this.handleDragStart}
            onDrop={this.handleDragStop}
            onDragLeave={this.handleDragStop}
          />
        </div>
      </div>
    );
  }
}

ImageUpload.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

ImageUpload.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  uploadLabel: PropTypes.string,
  previewLabel: PropTypes.string,
  previewImage: PropTypes.string
};

export default ImageUpload;
