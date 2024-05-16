const LevelIcon = (props: any) => {
  return (
    <svg
      width="13.5"
      height="13.5"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <mask
        id="mask0_4631_152047"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="15"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="6.75"
          cy="7.5"
          r="6.75"
          transform="rotate(90 6.75 7.5)"
          fill="var(--colors-text)"
          stroke="currentColor"
        ></circle>
      </mask>
      <g mask="url(#mask0_4631_152047)">
        <rect
          x="7"
          y="-0.25"
          width="16"
          height="2.5"
          transform="rotate(90 7 -0.25)"
          fill="currentColor"
        ></rect>
        <rect
          x="4.5"
          y="-0.25"
          width="16"
          height="2.5"
          transform="rotate(90 4.5 -0.25)"
          fill="currentColor"
        ></rect>
        <rect
          x="9.5"
          y="-0.25"
          width="16"
          height="2.5"
          transform="rotate(90 9.5 -0.25)"
          fill="currentColor"
          stroke=""
        ></rect>
      </g>
      <circle
        cx="6.75"
        cy="7.5"
        r="5.75"
        transform="rotate(90 6.75 7.5)"
        stroke="currentColor"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};

export default LevelIcon;
