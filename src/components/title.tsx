import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";
import StateNormal1 from "./state-normal1";

type TitleType = {
  icon24pxViewHideAll?: string;

  /** Style props */
  titlePosition?: Property.Position;
  titleWidth?: Property.Width;
  titleHeight?: Property.Height;
  titleMargin?: Property.Margin;
  titleTop?: Property.Top;
  titleLeft?: Property.Left;
  titleZIndex?: Property.ZIndex;
  titleFlex?: Property.Flex;
  titleDisplay?: Property.Display;
  titleAlignItems?: Property.AlignItems;
  titleWidth1?: Property.Width;
  titleFlexShrink?: Property.FlexShrink;
};

const Title1 = styled.div<{
  titleFlex?: Property.Flex;
  titleDisplay?: Property.Display;
  titleAlignItems?: Property.AlignItems;
  titleWidth1?: Property.Width;
  titleFlexShrink?: Property.FlexShrink;
}>`flex: 1;
  position: relative;
  line-height: 24px;
  flex: ${(p) => p.titleFlex}
  display: ${(p) => p.titleDisplay}
  align-items: ${(p) => p.titleAlignItems}
  width: ${(p) => p.titleWidth1}
  flex-shrink: ${(p) => p.titleFlexShrink}
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const TitleRoot = styled.div<{
  titlePosition?: Property.Position;
  titleWidth?: Property.Width;
  titleHeight?: Property.Height;
  titleMargin?: Property.Margin;
  titleTop?: Property.Top;
  titleLeft?: Property.Left;
  titleZIndex?: Property.ZIndex;
}>`position: relative;
  border-bottom: 1px solid var(--shades-10);
  box-sizing: border-box;
  width: 256px;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xs) var(--padding-5xs) var(--padding-xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--desktop-p-2-aa-regular-size);
  color: var(--shades-3);
  font-family: var(--desktop-p-3-aa-regular);
  position: ${(p) => p.titlePosition}
  width: ${(p) => p.titleWidth}
  height: ${(p) => p.titleHeight}
  margin: ${(p) => p.titleMargin}
  top: ${(p) => p.titleTop}
  left: ${(p) => p.titleLeft}
  z-index: ${(p) => p.titleZIndex}
`;
const Title: FunctionComponent<TitleType> = memo(
  ({
    icon24pxViewHideAll,
    titlePosition,
    titleWidth,
    titleHeight,
    titleMargin,
    titleTop,
    titleLeft,
    titleZIndex,
    titleFlex,
    titleDisplay,
    titleAlignItems,
    titleWidth1,
    titleFlexShrink,
  }) => {
    return (
      <TitleRoot
        titlePosition={titlePosition}
        titleWidth={titleWidth}
        titleHeight={titleHeight}
        titleMargin={titleMargin}
        titleTop={titleTop}
        titleLeft={titleLeft}
        titleZIndex={titleZIndex}
      >
        <Title1
          titleFlex={titleFlex}
          titleDisplay={titleDisplay}
          titleAlignItems={titleAlignItems}
          titleWidth1={titleWidth1}
          titleFlexShrink={titleFlexShrink}
        >
          Nodes navigation
        </Title1>
        <Actions>
          <StateNormal1
            icon24pxUserFaceTrackingF="/icon-24px--view--hide-all.svg"
            stateNormalPosition="unset"
            stateNormalAlignItems="center"
            stateNormalJustifyContent="flex-end"
          />
        </Actions>
      </TitleRoot>
    );
  }
);

export default Title;
