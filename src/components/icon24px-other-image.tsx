import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type Icon24pxOtherImageType = {
  icon24pxOtherImageIcon24p?: string;

  /** Style props */
  icon24pxOtherImagePosition?: Property.Position;
  icon24pxOtherImageWidth?: Property.Width;
  icon24pxOtherImageHeight?: Property.Height;
  icon24pxOtherImageMargin?: Property.Margin;
  icon24pxOtherImageTop?: Property.Top;
  icon24pxOtherImageLeft?: Property.Left;
  icon24pxOtherImageZIndex?: Property.ZIndex;
};

const Icon24pxOtherImageRoot = styled.img<{
  icon24pxOtherImagePosition?: Property.Position;
  icon24pxOtherImageWidth?: Property.Width;
  icon24pxOtherImageHeight?: Property.Height;
  icon24pxOtherImageMargin?: Property.Margin;
  icon24pxOtherImageTop?: Property.Top;
  icon24pxOtherImageLeft?: Property.Left;
  icon24pxOtherImageZIndex?: Property.ZIndex;
}>`position: relative;
  width: 24px;
  height: 24px;
  position: ${(p) => p.icon24pxOtherImagePosition}
  width: ${(p) => p.icon24pxOtherImageWidth}
  height: ${(p) => p.icon24pxOtherImageHeight}
  margin: ${(p) => p.icon24pxOtherImageMargin}
  top: ${(p) => p.icon24pxOtherImageTop}
  left: ${(p) => p.icon24pxOtherImageLeft}
  z-index: ${(p) => p.icon24pxOtherImageZIndex}
`;
const Icon24pxOtherImage: FunctionComponent<Icon24pxOtherImageType> = memo(
  ({
    icon24pxOtherImageIcon24p,
    icon24pxOtherImagePosition,
    icon24pxOtherImageWidth,
    icon24pxOtherImageHeight,
    icon24pxOtherImageMargin,
    icon24pxOtherImageTop,
    icon24pxOtherImageLeft,
    icon24pxOtherImageZIndex,
  }) => {
    return (
      <Icon24pxOtherImageRoot
        alt=""
        src={icon24pxOtherImageIcon24p}
        icon24pxOtherImagePosition={icon24pxOtherImagePosition}
        icon24pxOtherImageWidth={icon24pxOtherImageWidth}
        icon24pxOtherImageHeight={icon24pxOtherImageHeight}
        icon24pxOtherImageMargin={icon24pxOtherImageMargin}
        icon24pxOtherImageTop={icon24pxOtherImageTop}
        icon24pxOtherImageLeft={icon24pxOtherImageLeft}
        icon24pxOtherImageZIndex={icon24pxOtherImageZIndex}
      />
    );
  }
);

export default Icon24pxOtherImage;
