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
    <path d='M15 12L10 7V17L15 12Z' />
  </svg>
);

export default SvgComponent;
