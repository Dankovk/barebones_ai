import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type ColorPinkType = {
  /** Style props */
  colorPinkPosition?: Property.Position;
  colorPinkMargin?: Property.Margin;
  colorPinkTop?: Property.Top;
  colorPinkLeft?: Property.Left;
  colorPinkZIndex?: Property.ZIndex;
  gradientCircleIconTop?: Property.Top;
  gradientCircleIconLeft?: Property.Left;
  gradientCircleIconWidth?: Property.Width;
  gradientCircleIconHeight?: Property.Height;
  gradientCircleIconRight?: Property.Right;
  gradientCircleIconBottom?: Property.Bottom;
  gradientCircleIconWidth1?: Property.Width;
  gradientCircleIconHeight1?: Property.Height;
};

const GradientCircleIcon = styled.img<{
  gradientCircleIconTop?: Property.Top;
  gradientCircleIconLeft?: Property.Left;
  gradientCircleIconWidth?: Property.Width;
  gradientCircleIconHeight?: Property.Height;
}>`position: absolute;
  margin: 0 !important;
  top: -16px;
  left: -16px;
  width: 696px;
  height: 696px;
  opacity: 0.15;
  z-index: 0;
  top: ${(p) => p.gradientCircleIconTop}
  left: ${(p) => p.gradientCircleIconLeft}
  width: ${(p) => p.gradientCircleIconWidth}
  height: ${(p) => p.gradientCircleIconHeight}
`;
const GradientCircleIcon1 = styled.img<{
  gradientCircleIconRight?: Property.Right;
  gradientCircleIconBottom?: Property.Bottom;
  gradientCircleIconWidth1?: Property.Width;
  gradientCircleIconHeight1?: Property.Height;
}>`position: absolute;
  margin: 0 !important;
  right: -16px;
  bottom: -200px;
  width: 696px;
  height: 880px;
  opacity: 0.1;
  z-index: 1;
  right: ${(p) => p.gradientCircleIconRight}
  bottom: ${(p) => p.gradientCircleIconBottom}
  width: ${(p) => p.gradientCircleIconWidth1}
  height: ${(p) => p.gradientCircleIconHeight1}
`;
const ColorpinkRoot = styled.div<{
  colorPinkPosition?: Property.Position;
  colorPinkMargin?: Property.Margin;
  colorPinkTop?: Property.Top;
  colorPinkLeft?: Property.Left;
  colorPinkZIndex?: Property.ZIndex;
}>`position: relative;
  background-color: var(--shades-bg-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: ${(p) => p.colorPinkPosition}
  margin: ${(p) => p.colorPinkMargin}
  top: ${(p) => p.colorPinkTop}
  left: ${(p) => p.colorPinkLeft}
  z-index: ${(p) => p.colorPinkZIndex}
`;
const ColorPink: FunctionComponent<ColorPinkType> = memo(
  ({
    colorPinkPosition,
    colorPinkMargin,
    colorPinkTop,
    colorPinkLeft,
    colorPinkZIndex,
    gradientCircleIconTop,
    gradientCircleIconLeft,
    gradientCircleIconWidth,
    gradientCircleIconHeight,
    gradientCircleIconRight,
    gradientCircleIconBottom,
    gradientCircleIconWidth1,
    gradientCircleIconHeight1,
  }) => {
    return (
      <ColorpinkRoot
        colorPinkPosition={colorPinkPosition}
        colorPinkMargin={colorPinkMargin}
        colorPinkTop={colorPinkTop}
        colorPinkLeft={colorPinkLeft}
        colorPinkZIndex={colorPinkZIndex}
      >
        <GradientCircleIcon
          alt=""
          src="/gradient-circle.svg"
          gradientCircleIconTop={gradientCircleIconTop}
          gradientCircleIconLeft={gradientCircleIconLeft}
          gradientCircleIconWidth={gradientCircleIconWidth}
          gradientCircleIconHeight={gradientCircleIconHeight}
        />
        <GradientCircleIcon1
          alt=""
          src="/gradient-circle1.svg"
          gradientCircleIconRight={gradientCircleIconRight}
          gradientCircleIconBottom={gradientCircleIconBottom}
          gradientCircleIconWidth1={gradientCircleIconWidth1}
          gradientCircleIconHeight1={gradientCircleIconHeight1}
        />
      </ColorpinkRoot>
    );
  }
);

export default ColorPink;
