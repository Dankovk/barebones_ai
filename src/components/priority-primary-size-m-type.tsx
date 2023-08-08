import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type PriorityPrimarySizeMTypeType = {
  icon24pxSceneARFat?: string;

  /** Style props */
  priorityPrimarySizeMTypePosition?: Property.Position;
  priorityPrimarySizeMTypeBorderRadius?: Property.BorderRadius;
  priorityPrimarySizeMTypeOverflow?: Property.Overflow;
  priorityPrimarySizeMTypePadding?: Property.Padding;
  priorityPrimarySizeMTypeAlignItems?: Property.AlignItems;
  priorityPrimarySizeMTypeJustifyContent?: Property.JustifyContent;
  priorityPrimarySizeMTypeOpacity?: Property.Opacity;
  priorityPrimarySizeMTypeBackgroundColor?: Property.BackgroundColor;
  priorityPrimarySizeMTypeBoxShadow?: Property.BoxShadow;
  priorityPrimarySizeMTypeMargin?: Property.Margin;
  priorityPrimarySizeMTypeTop?: Property.Top;
  priorityPrimarySizeMTypeRight?: Property.Right;
  priorityPrimarySizeMTypeZIndex?: Property.ZIndex;
  icon24pxSceneARFatWidth?: Property.Width;
  icon24pxSceneARFatHeight?: Property.Height;
  icon24pxSceneARFatOverflow?: Property.Overflow;
  icon24pxSceneARFatFlexShrink?: Property.FlexShrink;
};

const Icon24pxSceneArFat = styled.img<{
  icon24pxSceneARFatWidth?: Property.Width;
  icon24pxSceneARFatHeight?: Property.Height;
  icon24pxSceneARFatOverflow?: Property.Overflow;
  icon24pxSceneARFatFlexShrink?: Property.FlexShrink;
}>`position: relative;
  width: 16px;
  height: 16px;
  width: ${(p) => p.icon24pxSceneARFatWidth}
  height: ${(p) => p.icon24pxSceneARFatHeight}
  overflow: ${(p) => p.icon24pxSceneARFatOverflow}
  flex-shrink: ${(p) => p.icon24pxSceneARFatFlexShrink}
`;
const PriorityprimarySizemTypeRoot = styled.div<{
  priorityPrimarySizeMTypePosition?: Property.Position;
  priorityPrimarySizeMTypeBorderRadius?: Property.BorderRadius;
  priorityPrimarySizeMTypeOverflow?: Property.Overflow;
  priorityPrimarySizeMTypePadding?: Property.Padding;
  priorityPrimarySizeMTypeAlignItems?: Property.AlignItems;
  priorityPrimarySizeMTypeJustifyContent?: Property.JustifyContent;
  priorityPrimarySizeMTypeOpacity?: Property.Opacity;
  priorityPrimarySizeMTypeBackgroundColor?: Property.BackgroundColor;
  priorityPrimarySizeMTypeBoxShadow?: Property.BoxShadow;
  priorityPrimarySizeMTypeMargin?: Property.Margin;
  priorityPrimarySizeMTypeTop?: Property.Top;
  priorityPrimarySizeMTypeRight?: Property.Right;
  priorityPrimarySizeMTypeZIndex?: Property.ZIndex;
}>`position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--shades-2);
  box-shadow: var(--button-dark-normal);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  position: ${(p) => p.priorityPrimarySizeMTypePosition}
  border-radius: ${(p) => p.priorityPrimarySizeMTypeBorderRadius}
  overflow: ${(p) => p.priorityPrimarySizeMTypeOverflow}
  padding: ${(p) => p.priorityPrimarySizeMTypePadding}
  align-items: ${(p) => p.priorityPrimarySizeMTypeAlignItems}
  justify-content: ${(p) => p.priorityPrimarySizeMTypeJustifyContent}
  opacity: ${(p) => p.priorityPrimarySizeMTypeOpacity}
  background-color: ${(p) => p.priorityPrimarySizeMTypeBackgroundColor}
  box-shadow: ${(p) => p.priorityPrimarySizeMTypeBoxShadow}
  margin: ${(p) => p.priorityPrimarySizeMTypeMargin}
  top: ${(p) => p.priorityPrimarySizeMTypeTop}
  right: ${(p) => p.priorityPrimarySizeMTypeRight}
  z-index: ${(p) => p.priorityPrimarySizeMTypeZIndex}
`;
const PriorityPrimarySizeMType: FunctionComponent<PriorityPrimarySizeMTypeType> =
  memo(
    ({
      icon24pxSceneARFat,
      priorityPrimarySizeMTypePosition,
      priorityPrimarySizeMTypeBorderRadius,
      priorityPrimarySizeMTypeOverflow,
      priorityPrimarySizeMTypePadding,
      priorityPrimarySizeMTypeAlignItems,
      priorityPrimarySizeMTypeJustifyContent,
      priorityPrimarySizeMTypeOpacity,
      priorityPrimarySizeMTypeBackgroundColor,
      priorityPrimarySizeMTypeBoxShadow,
      priorityPrimarySizeMTypeMargin,
      priorityPrimarySizeMTypeTop,
      priorityPrimarySizeMTypeRight,
      priorityPrimarySizeMTypeZIndex,
      icon24pxSceneARFatWidth,
      icon24pxSceneARFatHeight,
      icon24pxSceneARFatOverflow,
      icon24pxSceneARFatFlexShrink,
    }) => {
      return (
        <PriorityprimarySizemTypeRoot
          priorityPrimarySizeMTypePosition={priorityPrimarySizeMTypePosition}
          priorityPrimarySizeMTypeBorderRadius={
            priorityPrimarySizeMTypeBorderRadius
          }
          priorityPrimarySizeMTypeOverflow={priorityPrimarySizeMTypeOverflow}
          priorityPrimarySizeMTypePadding={priorityPrimarySizeMTypePadding}
          priorityPrimarySizeMTypeAlignItems={
            priorityPrimarySizeMTypeAlignItems
          }
          priorityPrimarySizeMTypeJustifyContent={
            priorityPrimarySizeMTypeJustifyContent
          }
          priorityPrimarySizeMTypeOpacity={priorityPrimarySizeMTypeOpacity}
          priorityPrimarySizeMTypeBackgroundColor={
            priorityPrimarySizeMTypeBackgroundColor
          }
          priorityPrimarySizeMTypeBoxShadow={priorityPrimarySizeMTypeBoxShadow}
          priorityPrimarySizeMTypeMargin={priorityPrimarySizeMTypeMargin}
          priorityPrimarySizeMTypeTop={priorityPrimarySizeMTypeTop}
          priorityPrimarySizeMTypeRight={priorityPrimarySizeMTypeRight}
          priorityPrimarySizeMTypeZIndex={priorityPrimarySizeMTypeZIndex}
        >
          <Icon24pxSceneArFat
            alt=""
            src={icon24pxSceneARFat}
            icon24pxSceneARFatWidth={icon24pxSceneARFatWidth}
            icon24pxSceneARFatHeight={icon24pxSceneARFatHeight}
            icon24pxSceneARFatOverflow={icon24pxSceneARFatOverflow}
            icon24pxSceneARFatFlexShrink={icon24pxSceneARFatFlexShrink}
          />
        </PriorityprimarySizemTypeRoot>
      );
    }
  );

export default PriorityPrimarySizeMType;
