const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_111_18724"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_111_18724)">
      <path
        d="M4 21.9992C3.71667 21.9992 3.47933 21.9032 3.288 21.7112C3.096 21.5199 3 21.2826 3 20.9992V16.9992C3 16.4492 3.19567 15.9786 3.587 15.5872C3.979 15.1952 4.45 14.9992 5 14.9992H19C19.55 14.9992 20.021 15.1952 20.413 15.5872C20.8043 15.9786 21 16.4492 21 16.9992V20.9992C21 21.2826 20.904 21.5199 20.712 21.7112C20.5207 21.9032 20.2833 21.9992 20 21.9992H4ZM5 12.9992V9.99922C5 9.44922 5.196 8.97822 5.588 8.58622C5.97933 8.19489 6.45 7.99922 7 7.99922H11V6.54922C10.7 6.34922 10.4583 6.10755 10.275 5.82422C10.0917 5.54089 10 5.19922 10 4.79922C10 4.54922 10.05 4.30322 10.15 4.06122C10.25 3.81989 10.4 3.59922 10.6 3.39922L11.65 2.34922C11.6833 2.31589 11.8 2.26589 12 2.19922C12.0333 2.19922 12.15 2.24922 12.35 2.34922L13.4 3.39922C13.6 3.59922 13.75 3.81989 13.85 4.06122C13.95 4.30322 14 4.54922 14 4.79922C14 5.19922 13.9083 5.54089 13.725 5.82422C13.5417 6.10755 13.3 6.34922 13 6.54922V7.99922H17C17.55 7.99922 18.021 8.19489 18.413 8.58622C18.8043 8.97822 19 9.44922 19 9.99922V12.9992H5Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export default SvgComponent;