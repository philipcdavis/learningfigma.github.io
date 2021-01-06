import React from "react";
import { Box, Link } from "rebass/styled-components";
import styled from "styled-components";

const Logo = function (props) {
  let { width = "57px", ...rest } = props;
  return (
    <Box {...rest}>
      <LogoLink to="/">
        <svg width="57px" height="58px" viewBox="0 0 57 58" version="1.1">
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Desktop" transform="translate(-501.000000, -145.000000)">
              <g id="Group-2" transform="translate(502.000000, 147.179199)">
                <g id="Group-3">
                  <rect
                    id="Rectangle"
                    stroke="#313131"
                    stroke-width="3"
                    fill="#000000"
                    x="0.501426786"
                    y="0.0453615747"
                    rx="15"
                    width="53.429998"
                    height="53.429998"
                  ></rect>
                  <path
                    d="M9.66806134,16.5222432 C9.66806134,9.30165295 9.66806134,9.30165295 16.8886516,9.30165295 C24.1092419,9.30165295 24.1092419,9.30165295 24.1092419,16.5222432 C24.1092419,23.7428335 24.1092419,23.7428335 16.8886516,23.7428335 C9.66806134,23.7428335 9.66806134,23.7428335 9.66806134,16.5222432 Z"
                    id="b"
                    fill="#1ABCFE"
                  ></path>
                  <path
                    d="M46.0853554,14.1558964 C46.0853554,11.545348 43.9689592,9.42895178 41.3585527,9.42895178 C39.5166224,9.42895178 37.9243227,10.4849502 37.144777,12.0226122 C36.3646637,10.4849502 34.7727897,9.42923561 32.9307175,9.42923561 C30.3201691,9.42909369 28.2039148,11.545348 28.2039148,14.1558964 C28.2039148,19.0938704 36.1340499,24.5014452 37.144777,24.5014452 C38.1556461,24.5014452 46.0853554,19.1175704 46.0853554,14.1558964 Z"
                    id="Path"
                    fill="#FF7262"
                  ></path>
                  <path
                    d="M36.0929129,45.7942436 L36.8185755,45.7942436 C37.6801397,45.7942436 38.3785755,45.0958079 38.3785755,44.2342437 L38.3785755,40.0034567 L43.1893474,41.3051212 C43.6051769,41.4176334 44.0334825,41.1717461 44.1459947,40.7559165 C44.1985775,40.5615778 44.1739804,40.3544342 44.0773483,40.1778139 L37.0643406,27.35971 C36.8575755,26.9817928 36.3835969,26.8430466 36.0056797,27.0498117 C35.8800467,27.1185477 35.7757618,27.2205441 35.7042555,27.3446212 L28.6445858,39.5945049 C28.4294874,39.967742 28.5576841,40.4446821 28.9309212,40.6597805 C29.0831117,40.7474886 29.2604519,40.7812591 29.4342262,40.7556236 L34.532913,40.0034567 L34.532913,44.2342437 C34.532913,45.0958079 35.2313488,45.7942436 36.0929129,45.7942436 Z"
                    id="Path-2"
                    fill="#FFFFFF"
                    transform="translate(36.397731, 35.967776) rotate(-37.000000) translate(-36.397731, -35.967776) "
                  ></path>
                  <path
                    d="M16.7120774,43.1499151 L12.9395112,44.4312421 C12.1237171,44.7083212 11.2377684,44.2716064 10.9606893,43.4558122 C10.9035788,43.2876639 10.8755978,43.1109987 10.8779524,42.933432 L10.9307798,38.9495565 C10.9330576,38.7777763 10.8785599,38.6100494 10.7757472,38.4724152 L8.39134568,35.2804435 C7.87573359,34.5901993 8.01730086,33.6126596 8.70754503,33.0970476 C8.84981552,32.9907716 9.0091875,32.9095675 9.17879108,32.8569357 L12.9840064,31.6760923 C13.1480829,31.6251757 13.29076,31.5215148 13.389887,31.3812028 L15.688812,28.1271287 C16.1859403,27.4234553 17.1593824,27.2560174 17.8630558,27.7531457 C18.0080943,27.8556119 18.1345726,27.9820902 18.2370388,28.1271287 L20.5359638,31.3812028 C20.6350908,31.5215148 20.7777678,31.6251757 20.9418444,31.6760923 L24.7470597,32.8569357 C25.569914,33.1122858 26.029967,33.9863431 25.7746169,34.8091974 C25.7219851,34.978801 25.6407811,35.138173 25.5345051,35.2804435 L23.1501036,38.4724152 C23.0472909,38.6100494 22.9927931,38.7777763 22.995071,38.9495565 L23.0478984,42.933432 C23.059322,43.7949204 22.3702083,44.5025554 21.5087198,44.513979 C21.3311531,44.5163336 21.1544879,44.4883526 20.9863395,44.4312421 L17.2137734,43.1499151 C17.0511046,43.0946657 16.8747461,43.0946657 16.7120774,43.1499151 Z"
                    id="Star"
                    fill="#0ACF83"
                  ></path>
                </g>
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

  &:hover svg {
  }
`;

export default Logo;
