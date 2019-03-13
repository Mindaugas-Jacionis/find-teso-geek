import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

const Background = styled(SVGInline)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #222;

  svg {
    background: #222;
  }
`;

export default Background;
