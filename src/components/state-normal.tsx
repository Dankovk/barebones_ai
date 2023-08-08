import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type StateNormalType = {
  /** Style props */
  stateNormalBorderRadius?: Property.BorderRadius;
  stateNormalBackgroundColor?: Property.BackgroundColor;
  stateNormalBorder?: Property.Border;
  stateNormalBoxSizing?: Property.BoxSizing;
  stateNormalWidth?: Property.Width;
  stateNormalHeight?: Property.Height;
  stateNormalFlexShrink?: Property.FlexShrink;
  stateNormalZIndex?: Property.ZIndex;
};

const StatenormalRoot = styled.div<{
  stateNormalBorderRadius?: Property.BorderRadius;
  stateNormalBackgroundColor?: Property.BackgroundColor;
  stateNormalBorder?: Property.Border;
  stateNormalBoxSizing?: Property.BoxSizing;
  stateNormalWidth?: Property.Width;
  stateNormalHeight?: Property.Height;
  stateNormalFlexShrink?: Property.FlexShrink;
  stateNormalZIndex?: Property.ZIndex;
}>`position: relative;
  border-radius: var(--br-base);
  background-color: var(--white-60);
  box-shadow: var(--translucency-m);
  backdrop-filter: blur(32px);
  border: 1px solid var(--white-25);
  box-sizing: border-box;
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: ${(p) => p.stateNormalBorderRadius}
  background-color: ${(p) => p.stateNormalBackgroundColor}
  border: ${(p) => p.stateNormalBorder}
  box-sizing: ${(p) => p.stateNormalBoxSizing}
  width: ${(p) => p.stateNormalWidth}
  height: ${(p) => p.stateNormalHeight}
  flex-shrink: ${(p) => p.stateNormalFlexShrink}
  z-index: ${(p) => p.stateNormalZIndex}
`;
const StateNormal: FunctionComponent<StateNormalType> = memo(
  ({
    stateNormalBorderRadius,
    stateNormalBackgroundColor,
    stateNormalBorder,
    stateNormalBoxSizing,
    stateNormalWidth,
    stateNormalHeight,
    stateNormalFlexShrink,
    stateNormalZIndex,
  }) => {
    return (
      <StatenormalRoot
        stateNormalBorderRadius={stateNormalBorderRadius}
        stateNormalBackgroundColor={stateNormalBackgroundColor}
        stateNormalBorder={stateNormalBorder}
        stateNormalBoxSizing={stateNormalBoxSizing}
        stateNormalWidth={stateNormalWidth}
        stateNormalHeight={stateNormalHeight}
        stateNormalFlexShrink={stateNormalFlexShrink}
        stateNormalZIndex={stateNormalZIndex}
      />
    );
  }
);

export default StateNormal;
