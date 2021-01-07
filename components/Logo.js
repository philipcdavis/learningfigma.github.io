import React from "react";
import { Box, Link } from "rebass/styled-components";
import styled from "styled-components";

const Logo = function (props) {
  let { width = "57px", ...rest } = props;
  return (
    <Box {...rest}>
      <LogoLink to="/">
        <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1">
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Artboard">
              <g id="Group-3">
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="0"
                  y="0"
                  width="59"
                  height="59"
                  className="container"
                  rx={16}
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#000000"
                  x="3"
                  y="3"
                  width="53"
                  height="53"
                  rx={14}
                ></rect>
                <path
                  d="M12.6680613,19.5222432 C12.6680613,12.3016529 12.6680613,12.3016529 19.8886516,12.3016529 C27.1092419,12.3016529 27.1092419,12.3016529 27.1092419,19.5222432 C27.1092419,26.7428335 27.1092419,26.7428335 19.8886516,26.7428335 C12.6680613,26.7428335 12.6680613,26.7428335 12.6680613,19.5222432 Z"
                  id="b"
                  fill="#1ABCFE"
                ></path>
                <path
                  d="M49.0853554,17.1558964 C49.0853554,14.545348 46.9689592,12.4289518 44.3585527,12.4289518 C42.5166224,12.4289518 40.9243227,13.4849502 40.144777,15.0226122 C39.3646637,13.4849502 37.7727897,12.4292356 35.9307175,12.4292356 C33.3201691,12.4290937 31.2039148,14.545348 31.2039148,17.1558964 C31.2039148,22.0938704 39.1340499,27.5014452 40.144777,27.5014452 C41.1556461,27.5014452 49.0853554,22.1175704 49.0853554,17.1558964 Z"
                  id="Path"
                  fill="#FF7262"
                ></path>
                <path
                  d="M39.0929129,48.7942436 L39.8185755,48.7942436 C40.6801397,48.7942436 41.3785755,48.0958079 41.3785755,47.2342437 L41.3785755,43.0034567 L46.1893474,44.3051212 C46.6051769,44.4176334 47.0334825,44.1717461 47.1459947,43.7559165 C47.1985775,43.5615778 47.1739804,43.3544342 47.0773483,43.1778139 L40.0643406,30.35971 C39.8575755,29.9817928 39.3835969,29.8430466 39.0056797,30.0498117 C38.8800467,30.1185477 38.7757618,30.2205441 38.7042555,30.3446212 L31.6445858,42.5945049 C31.4294874,42.967742 31.5576841,43.4446821 31.9309212,43.6597805 C32.0831117,43.7474886 32.2604519,43.7812591 32.4342262,43.7556236 L37.532913,43.0034567 L37.532913,47.2342437 C37.532913,48.0958079 38.2313488,48.7942436 39.0929129,48.7942436 Z"
                  id="Path-2"
                  fill="#FFFFFF"
                  transform="translate(39.397731, 38.967776) rotate(-37.000000) translate(-39.397731, -38.967776) "
                ></path>
                <path
                  d="M19.7120774,46.1499151 L15.9395112,47.4312421 C15.1237171,47.7083212 14.2377684,47.2716064 13.9606893,46.4558122 C13.9035788,46.2876639 13.8755978,46.1109987 13.8779524,45.933432 L13.9307798,41.9495565 C13.9330576,41.7777763 13.8785599,41.6100494 13.7757472,41.4724152 L11.3913457,38.2804435 C10.8757336,37.5901993 11.0173009,36.6126596 11.707545,36.0970476 C11.8498155,35.9907716 12.0091875,35.9095675 12.1787911,35.8569357 L15.9840064,34.6760923 C16.1480829,34.6251757 16.29076,34.5215148 16.389887,34.3812028 L18.688812,31.1271287 C19.1859403,30.4234553 20.1593824,30.2560174 20.8630558,30.7531457 C21.0080943,30.8556119 21.1345726,30.9820902 21.2370388,31.1271287 L23.5359638,34.3812028 C23.6350908,34.5215148 23.7777678,34.6251757 23.9418444,34.6760923 L27.7470597,35.8569357 C28.569914,36.1122858 29.029967,36.9863431 28.7746169,37.8091974 C28.7219851,37.978801 28.6407811,38.138173 28.5345051,38.2804435 L26.1501036,41.4724152 C26.0472909,41.6100494 25.9927931,41.7777763 25.995071,41.9495565 L26.0478984,45.933432 C26.059322,46.7949204 25.3702083,47.5025554 24.5087198,47.513979 C24.3311531,47.5163336 24.1544879,47.4883526 23.9863395,47.4312421 L20.2137734,46.1499151 C20.0511046,46.0946657 19.8747461,46.0946657 19.7120774,46.1499151 Z"
                  id="Star"
                  fill="#0ACF83"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </LogoLink>
    </Box>
  );
};

const LogoLink = styled(Link)`
  svg {
    transition: 0.7s all ease;
  }
  .container {
    opacity: 0.15;
  }

  &:hover svg {
  }
`;

export default Logo;
