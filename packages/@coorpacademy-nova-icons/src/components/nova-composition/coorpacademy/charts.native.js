import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 15 15" {...props}>
    <Path
      fill={props.color}
      d="M3.5 12.375V1H2v12.187c0 .452.333.813.75.813H14v-1.625H3.5zm1.875-1.625h.75c.208 0 .375-.18.375-.406V6.28c0-.225-.167-.406-.375-.406h-.75c-.208 0-.375.18-.375.406v4.063c0 .225.167.406.375.406zm2.25 0h.75c.208 0 .375-.18.375-.406V3.03c0-.225-.167-.406-.375-.406h-.75c-.208 0-.375.18-.375.406v7.313c0 .225.167.406.375.406zm2.25 0h.75c.208 0 .375-.18.375-.406V7.906c0-.225-.167-.406-.375-.406h-.75c-.208 0-.375.18-.375.406v2.438c0 .225.167.406.375.406zm2.25 0h.75c.208 0 .375-.18.375-.406V4.656c0-.225-.167-.406-.375-.406h-.75c-.208 0-.375.18-.375.406v5.688c0 .225.167.406.375.406z"
      fillRule="nonzero"
    />
  </Svg>
);

export default SvgComponent;
