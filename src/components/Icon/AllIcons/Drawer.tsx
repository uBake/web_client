import { IconType } from '../Icon';

const SvgComponent: IconType = props => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z'
    />
  </svg>
);

export default SvgComponent;
