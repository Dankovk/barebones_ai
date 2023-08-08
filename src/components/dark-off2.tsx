import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type DarkOff2Type = {
  /** Style props */
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
  darkOffBorderRadius?: Property.BorderRadius;
};

const HomeIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% - 64px);
  border-radius: var(--br-81xl);
  background-color: var(--shades-3);
  width: 128px;
  height: 4px;
`;
const DarkoffRoot = styled.div<{
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
  darkOffBorderRadius?: Property.BorderRadius;
}>`position: relative;
  background-color: var(--shades-bg-default);
  width: 376px;
  height: 36px;
  width: ${(p) => p.darkOffWidth}
  align-self: ${(p) => p.darkOffAlignSelf}
  border-radius: ${(p) => p.darkOffBorderRadius}
`;
const DarkOff2: FunctionComponent<DarkOff2Type> = memo(
  ({ darkOffWidth, darkOffAlignSelf, darkOffBorderRadius }) => {
    return (
      <DarkoffRoot
        darkOffWidth={darkOffWidth}
        darkOffAlignSelf={darkOffAlignSelf}
        darkOffBorderRadius={darkOffBorderRadius}
      >
        <HomeIndicator />
      </DarkoffRoot>
    );
  }
);

export default DarkOff2;
