'use client';

import * as React from 'react';
import { SVGProps } from 'react';
import { motion } from 'framer-motion';
const FirstHeroSvg = (props: SVGProps<SVGSVGElement> & any) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784 827"
      fill="none"
      drag
      dragConstraints={props.constraintsRef}
      {...props}
    >
      <g filter="url(#filter0_ddii_3780_7076)">
        <path
          d="M313.844 90.0388C341.29 78.6703 370.449 72.0978 400.052 70.5737C407.435 70.1935 413.433 76.2229 413.433 83.6162V231.25C413.433 232.149 414.162 232.878 415.061 232.878C415.725 232.878 416.321 232.475 416.573 231.861C416.707 231.533 416.842 231.206 416.977 230.878C430.055 199.305 449.224 170.617 473.39 146.451C497.555 122.286 526.243 103.117 557.817 90.0388C585.263 78.6703 614.422 72.0978 644.025 70.5737C651.408 70.1935 657.406 76.2229 657.406 83.6162V231.25C657.406 232.149 658.135 232.878 659.034 232.878C659.697 232.878 660.294 232.475 660.545 231.861C660.68 231.533 660.815 231.206 660.95 230.878C674.028 199.305 693.197 170.617 717.362 146.451C741.528 122.286 770.216 103.117 801.79 90.0388C829.236 78.6703 858.395 72.0978 887.997 70.5737C895.381 70.1935 901.378 76.2229 901.378 83.6162V317.08C901.378 324.474 907.372 330.467 914.765 330.467H985.581C992.974 330.467 999.003 336.464 998.623 343.848C997.099 373.451 990.526 402.609 979.158 430.056C966.08 461.629 946.911 490.317 922.745 514.483C898.58 538.648 869.892 557.817 838.318 570.895C810.872 582.264 781.713 588.836 752.111 590.36C744.727 590.74 738.73 584.711 738.73 577.318V429.684C738.73 428.785 738.001 428.056 737.102 428.056C736.438 428.056 735.841 428.459 735.59 429.073C735.456 429.401 735.321 429.728 735.185 430.056C722.107 461.629 702.938 490.317 678.773 514.483C654.607 538.648 625.919 557.817 594.346 570.895C566.9 582.264 537.741 588.836 508.138 590.36C500.755 590.74 494.757 584.711 494.757 577.318V429.684C494.757 428.785 494.028 428.056 493.129 428.056C492.465 428.056 491.869 428.459 491.617 429.073C491.483 429.401 491.348 429.728 491.212 430.056C478.134 461.629 458.965 490.317 434.8 514.483C410.635 538.648 381.946 557.817 350.373 570.895C322.927 582.264 293.768 588.836 264.165 590.36C256.782 590.74 250.784 584.711 250.784 577.318V343.854C250.784 336.46 244.791 330.467 237.398 330.467H166.582C159.189 330.467 153.159 324.469 153.54 317.086C155.064 287.483 161.636 258.324 173.005 230.878C186.083 199.305 205.252 170.617 229.417 146.451C253.582 122.286 282.271 103.117 313.844 90.0388Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddii_3780_7076"
          x="0.422066"
          y="0.662979"
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
