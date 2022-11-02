const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 21C7.33333 21 5.91667 20.4167 4.75 19.25C3.58333 18.0833 3 16.6667 3 15V9C3 7.33333 3.58333 5.91667 4.75 4.75C5.91667 3.58333 7.33333 3 9 3H15C16.6667 3 18.0833 3.58333 19.25 4.75C20.4167 5.91667 21 7.33333 21 9V15C21 16.6667 20.4167 18.0833 19.25 19.25C18.0833 20.4167 16.6667 21 15 21H9ZM11 16L17 10L15.6 8.6L11 13.2L8.8 11L7.4 12.4L11 16Z"
      fill="#1C1B1F"
    />
  </svg>
);

export default SvgComponent;
