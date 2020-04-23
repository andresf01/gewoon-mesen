import React from 'react';

const CheckedIcon = ({ width = 20, height = 20 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.9231 0H3.07692C2.26115 0.000890796 1.47904 0.325352 0.902194 0.902194C0.325352 1.47904 0.000890796 2.26115 0 3.07692V16.9231C0.000890796 17.7389 0.325352 18.521 0.902194 19.0978C1.47904 19.6746 2.26115 19.9991 3.07692 20H16.9231C17.7389 19.9991 18.521 19.6746 19.0978 19.0978C19.6746 18.521 19.9991 17.7389 20 16.9231V3.07692C19.9991 2.26115 19.6746 1.47904 19.0978 0.902194C18.521 0.325352 17.7389 0.000890796 16.9231 0ZM15.2043 6.64856L8.74279 14.3409C8.67191 14.4253 8.58371 14.4935 8.48418 14.5409C8.38464 14.5882 8.27608 14.6136 8.16587 14.6154H8.15288C8.04507 14.6153 7.93846 14.5926 7.83998 14.5487C7.7415 14.5048 7.65335 14.4407 7.58125 14.3606L4.81202 11.2837C4.74169 11.2091 4.68698 11.1212 4.65111 11.0251C4.61524 10.9291 4.59892 10.8268 4.60313 10.7244C4.60733 10.622 4.63197 10.5214 4.67559 10.4286C4.71922 10.3359 4.78094 10.2527 4.85715 10.1842C4.93336 10.1156 5.0225 10.0629 5.11935 10.0293C5.21619 9.99567 5.31878 9.98173 5.42109 9.98832C5.5234 9.9949 5.62336 10.0219 5.7151 10.0676C5.80683 10.1134 5.8885 10.177 5.95529 10.2548L8.13269 12.674L14.0264 5.65913C14.1586 5.50629 14.3457 5.41161 14.5471 5.39555C14.7486 5.3795 14.9483 5.44337 15.103 5.57335C15.2577 5.70333 15.3551 5.88899 15.3741 6.09018C15.393 6.29138 15.3321 6.49196 15.2043 6.64856Z" />
  </svg>
);

export { CheckedIcon as default };
