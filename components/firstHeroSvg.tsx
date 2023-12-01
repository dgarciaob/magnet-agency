'use client';

import * as React from 'react';
import { SVGProps } from 'react';
import { motion } from 'framer-motion';

const FirstHeroSvg = (props: SVGProps<SVGSVGElement> & any) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      drag
      dragConstraints={props.constraintsRef}
      width="1084"
      height="767"
      viewBox="0 0 1084 767"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_ddii_3780_7076)">
        <path
          d="M314.322 89.4822C341.768 78.1136 370.927 71.5411 400.529 70.017C407.913 69.6369 413.91 75.6662 413.91 83.0595V230.693C413.91 231.592 414.639 232.321 415.539 232.321C416.202 232.321 416.799 231.919 417.05 231.305C417.185 230.977 417.319 230.649 417.455 230.322C430.533 198.748 449.702 170.06 473.867 145.895C498.033 121.729 526.721 102.56 558.294 89.4822C585.741 78.1136 614.899 71.5411 644.502 70.017C651.886 69.6369 657.883 75.6662 657.883 83.0595V230.693C657.883 231.592 658.612 232.321 659.511 232.321C660.175 232.321 660.772 231.919 661.023 231.305C661.157 230.977 661.292 230.649 661.428 230.322C674.506 198.748 693.675 170.06 717.84 145.895C742.005 121.729 770.694 102.56 802.267 89.4822C829.713 78.1136 858.872 71.5411 888.475 70.017C895.858 69.6369 901.856 75.6662 901.856 83.0595V316.524C901.856 323.917 907.849 329.91 915.242 329.91H986.058C993.451 329.91 999.481 335.908 999.101 343.291C997.576 372.894 991.004 402.053 979.635 429.499C966.557 461.072 947.388 489.761 923.223 513.926C899.058 538.091 870.369 557.26 838.796 570.338C811.35 581.707 782.191 588.279 752.588 589.804C745.205 590.184 739.207 584.154 739.207 576.761V429.128C739.207 428.228 738.478 427.499 737.579 427.499C736.916 427.499 736.319 427.902 736.067 428.516C735.933 428.844 735.798 429.172 735.663 429.499C722.584 461.072 703.416 489.761 679.25 513.926C655.085 538.091 626.397 557.26 594.823 570.338C567.377 581.707 538.218 588.279 508.616 589.804C501.232 590.184 495.235 584.154 495.235 576.761V429.128C495.235 428.228 494.506 427.499 493.606 427.499C492.943 427.499 492.346 427.902 492.095 428.516C491.96 428.844 491.826 429.172 491.69 429.499C478.612 461.072 459.443 489.761 435.278 513.926C411.112 538.091 382.424 557.26 350.851 570.338C323.404 581.707 294.245 588.279 264.643 589.804C257.259 590.184 251.262 584.154 251.262 576.761V343.297C251.262 335.904 245.268 329.91 237.875 329.91H167.06C159.666 329.91 153.637 323.913 154.017 316.529C155.541 286.927 162.114 257.768 173.482 230.322C186.56 198.748 205.729 170.06 229.895 145.895C254.06 121.729 282.748 102.56 314.322 89.4822Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddii_3780_7076"
          x="0.899605"
          y="0.106339"
          width="1151.32"
          height="826.021"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="17.7508"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_3780_7076"
          />
          <feOffset dy="83.2067" />
          <feGaussianBlur stdDeviation="67.6748" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.246026 0 0 0 0 0.221684 0 0 0 0 0.470833 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3780_7076"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.21885"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_3780_7076"
          />
          <feOffset dy="2.21885" />
          <feGaussianBlur stdDeviation="5.54712" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.246026 0 0 0 0 0.221684 0 0 0 0 0.470833 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3780_7076"
            result="effect2_dropShadow_3780_7076"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_3780_7076"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.43769" />
          <feGaussianBlur stdDeviation="27.7356" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_3780_7076"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.43769" />
          <feGaussianBlur stdDeviation="27.7356" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_3780_7076"
            result="effect4_innerShadow_3780_7076"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};
export default FirstHeroSvg;
