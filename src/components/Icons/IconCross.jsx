import React from 'react';

const IconStar = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke={color} d="M1.49289 0.785805L1.49239 0.785304L0.785287 1.49241L0.785787 1.49291L6.56289 7.2782L0.785787 13.0635L0.785287 13.064L1.49239 13.7711L1.49289 13.7706L7.27818 7.99349L13.0635 13.7706L13.064 13.7711L13.7711 13.064L13.7706 13.0635L7.99347 7.2782L13.7706 1.49291L13.7711 1.49241L13.064 0.785305L13.0635 0.785804L7.27818 6.56291L1.49289 0.785805Z" />
  </svg>
);

IconStar.defaultProps = {
  color: '#0B7AB8'
};

export default IconStar;