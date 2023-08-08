import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import SizeSIcon1 from "./size-s-icon1";
import PriorityPrimarySizeMType from "./priority-primary-size-m-type";
import styled from "styled-components";

type ShowOnType = {
  icon24pxActionsSettings?: string;
  icon24pxSidebarHideFat?: string;
  showContent?: boolean;
  showButton?: boolean;

  /** Style props */
  showOnBackgroundColor?: Property.BackgroundColor;
  showOnBorderRight?: Property.BorderRight;
  showOnZIndex?: Property.ZIndex;
  buttonOpacity?: Property.Opacity;
};

const Content = styled.div`
  align-self: stretch;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-37xl) 0px var(--padding-13xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 0;
`;
const ShowonRoot = styled.div<{
  showOnBackgroundColor?: Property.BackgroundColor;
  showOnBorderRight?: Property.BorderRight;
  showOnZIndex?: Property.ZIndex;
}>`position: relative;
  background-color: var(--shades-7);
  width: 320px;
  height: 800px;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 0px var(--padding-45xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  background-color: ${(p) => p.showOnBackgroundColor}
  border-right: ${(p) => p.showOnBorderRight}
  z-index: ${(p) => p.showOnZIndex}
`;
const ShowOn: FunctionComponent<ShowOnType> = memo(
  ({
    icon24pxActionsSettings,
    icon24pxSidebarHideFat,
    showContent,
    showButton,
    showOnBackgroundColor,
    showOnBorderRight,
    showOnZIndex,
    buttonOpacity,
  }) => {
    return (
      <ShowonRoot
        showOnBackgroundColor={showOnBackgroundColor}
        showOnBorderRight={showOnBorderRight}
        showOnZIndex={showOnZIndex}
      >
        {showContent && (
          <Content>
            <SizeSIcon1 />
            <PriorityPrimarySizeMType
              icon24pxSceneARFat="/icon-24px--actions--settings.svg"
              priorityPrimarySizeMTypePosition="unset"
              priorityPrimarySizeMTypeBorderRadius="12px"
              priorityPrimarySizeMTypeOverflow="unset"
              priorityPrimarySizeMTypePadding="12px"
              priorityPrimarySizeMTypeAlignItems="flex-end"
              priorityPrimarySizeMTypeJustifyContent="flex-start"
              priorityPrimarySizeMTypeOpacity="unset"
              priorityPrimarySizeMTypeBackgroundColor="#3e3b46"
              priorityPrimarySizeMTypeBoxShadow="0px 2px 4px -1px #858293"
              priorityPrimarySizeMTypeMargin="unset"
              priorityPrimarySizeMTypeTop="unset"
              priorityPrimarySizeMTypeRight="unset"
              priorityPrimarySizeMTypeZIndex="unset"
              icon24pxSceneARFatWidth="24px"
              icon24pxSceneARFatHeight="24px"
              icon24pxSceneARFatOverflow="hidden"
              icon24pxSceneARFatFlexShrink="0"
            />
          </Content>
        )}
        <PriorityPrimarySizeMType
          icon24pxSceneARFat="/icon-24px--sidebar--hide-fat.svg"
          priorityPrimarySizeMTypePosition="absolute"
          priorityPrimarySizeMTypeBorderRadius="8px"
          priorityPrimarySizeMTypeOverflow="hidden"
          priorityPrimarySizeMTypePadding="var(--padding-9xs) 8px"
          priorityPrimarySizeMTypeAlignItems="flex-start"
          priorityPrimarySizeMTypeJustifyContent="flex-end"
          priorityPrimarySizeMTypeOpacity="unset"
          priorityPrimarySizeMTypeBackgroundColor="#fff"
          priorityPrimarySizeMTypeBoxShadow="0px 2px 4px -1px rgba(133, 130, 147, 0.5)"
          priorityPrimarySizeMTypeMargin="0 !important"
          priorityPrimarySizeMTypeTop="88px"
          priorityPrimarySizeMTypeRight="-16px"
          priorityPrimarySizeMTypeZIndex="1"
          icon24pxSceneARFatWidth="16px"
          icon24pxSceneARFatHeight="16px"
          icon24pxSceneARFatOverflow="unset"
          icon24pxSceneARFatFlexShrink="unset"
        />
      </ShowonRoot>
    );
  }
);

export default ShowOn;
