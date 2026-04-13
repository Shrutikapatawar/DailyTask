const TreeLogo = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="15" r="11" fill="rgba(255,255,255,0.15)" />
    <path
      d="M20 4 C14 4 10 8.5 10 13 C10 16 11.5 18.5 14 20 L13 30 L27 30 L26 20 C28.5 18.5 30 16 30 13 C30 8.5 26 4 20 4Z"
      fill="white"
      opacity="0.9"
    />
    <path d="M20 10 L20 28" stroke="rgba(30,92,53,0.4)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M20 14 L16 11" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round" />
    <path d="M20 17 L24 14" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round" />
    <path d="M20 20 L15 17" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round" />
    <rect x="17" y="28" width="6" height="4" rx="1" fill="white" opacity="0.8" />
  </svg>
);

export default TreeLogo;
