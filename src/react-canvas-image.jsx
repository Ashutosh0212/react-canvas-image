import React, { Component, PropTypes } from 'react';

export default class CanvasImage extends Component {
  static PropTypes = {
    src: PropTypes.string.isRequired
  };
  state = {};

  componentDidMount() {
    const { src, offsetTop, offsetLeft } = this.props;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      /**
       void ctx.drawImage(image, dx, dy);
       void ctx.drawImage(image, dx, dy, dWidth, dHeight);
       void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  NOT SUPPORT
       */

      const width = img.width;
      const height = img.height;

      const argv = [img, offsetLeft || 0, offsetTop || 0, width, height];

      const { canvas } = this.refs;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(...argv);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    };
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return <canvas ref="canvas" {...this.props} />;
  }
}
