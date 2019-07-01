import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 23" {...props}>
    <Path d="M23.9 15.2l-3.5-6c-.1-.1-.2-.2-.4-.2h-1V.5c0-.3-.2-.5-.5-.5h-13c-.3 0-.5.2-.5.5V9H4c-.2 0-.3.1-.4.2l-3.5 6c-.1.1-.1.2-.1.3v7c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5v-7c0-.1 0-.2-.1-.3zM10.5 5h5c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm-2-2h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm0 4h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm0 2h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm0 2h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm8 4c-.3 0-.5.2-.5.5v1c0 .8-.7 1.5-1.5 1.5H10c-.8 0-1.5-.7-1.5-1.5v-1c0-.3-.2-.5-.5-.5H1.4l2.9-5H5v3.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V10h.7l2.9 5h-6.1z" />
  </Svg>
);

export default SvgComponent;
