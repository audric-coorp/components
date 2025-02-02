import React from 'react';

export const safeCancelAnimationFrame = requestId => requestId && cancelAnimationFrame(requestId);

class Swapper extends React.Component {
  state = {
    init: true
  };

  componentDidMount() {
    if (typeof requestAnimationFrame !== 'undefined') {
      this.requestID = requestAnimationFrame(() => this.setState(() => ({init: false})));
    }
  }

  componentWillUnmount() {
    if (this.requestID !== undefined) {
      safeCancelAnimationFrame(this.requestID);
    }
  }

  render() {
    const {init} = this.state;
    const {children, ...props} = this.props;
    const child = React.Children.only(children);

    return init ? React.cloneElement(child, props) : child;
  }
}

export default Swapper;
