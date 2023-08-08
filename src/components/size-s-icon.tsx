import { FunctionComponent, memo } from "react";
import styled from "styled-components";

const SizesIconRoot = styled.img`
  position: relative;
  width: 208px;
  height: 16px;
`;
const SizeSIcon: FunctionComponent = memo(() => {
  return <SizesIconRoot alt="" src="/sizes.svg" />;
});

export default SizeSIcon;
