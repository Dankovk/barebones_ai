import { FunctionComponent, memo } from "react";
import styled from "styled-components";

const SizesIconRoot = styled.img`
  position: relative;
  width: 112px;
  height: 16px;
`;
const SizeSIcon1: FunctionComponent = memo(() => {
  return <SizesIconRoot alt="" src="/logo.svg" />;
});

export default SizeSIcon1;
