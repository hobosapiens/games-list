import React from 'react';

const IconSpinner = ({ color }) => (
  <svg width="223px" height="223px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g transform="rotate(0 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.9782608695652173s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(36 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.8695652173913042s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(72 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.7608695652173912s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(108 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.6521739130434782s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(144 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.5434782608695652s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.4347826086956521s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(216 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.3260869565217391s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(252 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.21739130434782605s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(288 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.10869565217391303s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(324 50 50)">
      <rect x="48.5" y="27.5" rx="0" ry="0" width="3" height="9" fill={color}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
  </svg>
);

IconSpinner.defaultProps = {
  color: '#9ad1f0'
};

export default IconSpinner;