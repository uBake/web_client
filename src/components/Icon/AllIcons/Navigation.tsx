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
      d="M21 3L3 10.53V11.5L9.84 14.16L12.5 21H13.46L21 3Z"
      fill="#201A1C"
    />
  </svg>
);

export default SvgComponent;