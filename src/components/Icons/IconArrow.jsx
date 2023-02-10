import React from 'react';

const IconArrow = ({ color }) => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M1.63051 0.28272C1.25777 -0.09424 0.652929 -0.09424 0.279563 0.28272C-0.0931875 0.65897 -0.0931875 1.26954 0.279563 1.64615L4.33242 5.7375C4.70516 6.11411 5.31063 6.11411 5.68337 5.7375L9.73623 1.64615C10.109 1.26954 10.109 0.65897 9.73623 0.28272C9.36287 -0.09424 8.75802 -0.09424 8.38465 0.28272L5.00784 3.69184L1.63051 0.28272Z"/>
  </svg>
);

IconArrow.defaultProps = {
  color: '#0B7AB8'
};

export default IconArrow;