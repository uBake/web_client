const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width='25'
    height='24'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M6.29688 21C5.74688 21 5.27621 20.8043 4.88487 20.413C4.49287 20.021 4.29688 19.55 4.29688 19V10C4.29688 9.68333 4.36787 9.38333 4.50987 9.1C4.65121 8.81667 4.84688 8.58333 5.09688 8.4L11.0969 3.9C11.2802 3.76667 11.4719 3.66667 11.6719 3.6C11.8719 3.53333 12.0802 3.5 12.2969 3.5C12.5135 3.5 12.7219 3.53333 12.9219 3.6C13.1219 3.66667 13.3135 3.76667 13.4969 3.9L19.4969 8.4C19.7469 8.58333 19.9429 8.81667 20.0849 9.1C20.2262 9.38333 20.2969 9.68333 20.2969 10V19C20.2969 19.55 20.1012 20.021 19.7099 20.413C19.3179 20.8043 18.8469 21 18.2969 21H14.2969V14H10.2969V21H6.29688Z' />
  </svg>
);

export default SvgComponent;
