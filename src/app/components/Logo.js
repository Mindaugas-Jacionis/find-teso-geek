import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

import logo from '~/static/logo.svg';

const Logo = styled(SVGInline)`
  position: absolute;
  top: 5vh;
  left: 5vw;
  width: 20vw;
`;

Logo.defaultProps = {
  svg: logo,
};

export default Logo;
