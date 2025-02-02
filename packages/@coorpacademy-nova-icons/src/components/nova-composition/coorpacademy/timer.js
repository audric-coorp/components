import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 26 26" {...props}>
    <path
      d="M13 26C5.8 26 0 20.2 0 13S5.8 0 13 0s13 5.8 13 13-5.8 13-13 13zm6.2-16.8c.1-.1.2-.3.3-.5.1-.5-.4-1-.9-.9-.2 0-.4.1-.5.3l-.7.7c-.9-.7-2-1.1-3.2-1.3v-.6h.6c.4 0 .8-.3.9-.7 0-.5-.3-.9-.8-.9h-3c-.4 0-.8.3-.9.7 0 .5.3.9.8.9h.7v.6c-1.1.1-2.1.5-3 1.2-.8.6.1 1.9 1 1.3 1.5-1 3.4-1.2 5-.4 1.6.8 2.7 2.3 2.8 4 .1 1.7-.9 3.4-2.4 4.2-1.6.9-3.5.8-5-.1-.4-.2-.8-.2-1.1.2-.3.4-.2.9.2 1.2 1.3.8 2.9 1.1 4.5.9 3.2-.5 5.5-3.1 5.6-6.2 0-1.4-.5-2.8-1.3-3.9l.4-.7zm-4.6 4.3l1.5-1.8c.4-.5-.3-1.1-.7-.7l-1.9 1.4c-.6-.1-1.1.2-1.4.7-.3.5-.2 1.1.2 1.5.4.4 1 .5 1.5.2.6-.2.9-.8.8-1.3zm-3.9 2.6c0-.4-.3-.6-.7-.6H7.2c-.9 0-.9 1.3 0 1.3H10c.4 0 .7-.3.7-.7zm-.7-2.9H6.1c-.9 0-.9 1.3 0 1.3H10c.9 0 .9-1.3 0-1.3zm0-1c.9 0 .9-1.3 0-1.3H4.8c-.9 0-.9 1.3 0 1.3H10z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
