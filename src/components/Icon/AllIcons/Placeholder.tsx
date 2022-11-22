import { Icon } from '../Icon';

const SvgComponent: Icon = props => (
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
      d='M10.55 20.03L12 21.35L13.45 20.04L13.4895 20.0041C18.6174 15.3442 22 12.2703 22 8.5C22 5.42 19.58 3 16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.2769 5.39442 15.3549 10.5373 20.0185L10.55 20.03ZM18.1077 12.6668C19.4635 11.0081 20 9.73306 20 8.5C20 6.52457 18.4754 5 16.5 5C15.3656 5 14.2455 5.53787 13.5227 6.38668L12 8.17481L10.4773 6.38668C9.75448 5.53787 8.63443 5 7.5 5C5.52457 5 4 6.52457 4 8.5C4 9.73303 4.53649 11.0079 5.89185 12.665C7.3951 14.5029 9.16157 16.0904 10.924 17.6742C11.2853 17.9989 11.6464 18.3235 12.0051 18.65C12.2871 18.3953 12.5709 18.1408 12.8552 17.8859C14.6909 16.2397 16.55 14.5725 18.1077 12.6668Z'
    />
  </svg>
);

export default SvgComponent;
