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
    <path d='M13 4H11V11L4 11V13L11 13V20H13V13H20V11L13 11V4Z' />
  </svg>
);

export default SvgComponent;
