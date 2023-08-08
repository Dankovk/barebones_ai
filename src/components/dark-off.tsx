import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import DarkOff1 from "./dark-off1";
import styled from "styled-components";

type DarkOffType = {
  showIcon24pxIOSCellular?: boolean;
  cameraIndicator?: boolean;
  screenRecord?: boolean;
  showSearchBar?: boolean;

  /** Style props */
  darkOffPosition?: Property.Position;
  darkOffBackgroundColor?: Property.BackgroundColor;
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
  darkOffBorderRadius?: Property.BorderRadius;
  darkOffZIndex?: Property.ZIndex;
};

const Icon24pxIosTextSize = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Domain = styled.div`
  position: relative;
  letter-spacing: -0.03em;
  line-height: 16px;
`;
const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SearchBar = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--shades-7);
  display: flex;
  flex-direction: row;
  padding: var(--padding-7xs) var(--padding-5xs);
  align-items: center;
  justify-content: space-between;
`;
const DarkoffRoot = styled.div<{
  darkOffPosition?: Property.Position;
  darkOffBackgroundColor?: Property.BackgroundColor;
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
  darkOffBorderRadius?: Property.BorderRadius;
  darkOffZIndex?: Property.ZIndex;
}>`position: relative;
  background-color: var(--shades-bg-default);
  width: 376px;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-5xs) var(--padding-5xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--shades-3);
  font-family: var(--font-pt-sans);
  position: ${(p) => p.darkOffPosition}
  background-color: ${(p) => p.darkOffBackgroundColor}
  width: ${(p) => p.darkOffWidth}
  align-self: ${(p) => p.darkOffAlignSelf}
  border-radius: ${(p) => p.darkOffBorderRadius}
  z-index: ${(p) => p.darkOffZIndex}
`;
const DarkOff: FunctionComponent<DarkOffType> = memo(
  ({
    showIcon24pxIOSCellular,
    cameraIndicator,
    screenRecord,
    showSearchBar,
    darkOffPosition,
    darkOffBackgroundColor,
    darkOffWidth,
    darkOffAlignSelf,
    darkOffBorderRadius,
    darkOffZIndex,
  }) => {
    return (
      <DarkoffRoot
        darkOffPosition={darkOffPosition}
        darkOffBackgroundColor={darkOffBackgroundColor}
        darkOffWidth={darkOffWidth}
        darkOffAlignSelf={darkOffAlignSelf}
        darkOffBorderRadius={darkOffBorderRadius}
        darkOffZIndex={darkOffZIndex}
      >
        <DarkOff1
          time="11:14"
          showIcon24pxIOSCellular
          cameraIndicator={false}
          screenRecord={false}
          darkOffWidth="unset"
          darkOffAlignSelf="stretch"
        />
        {showSearchBar && (
          <SearchBar>
            <Icon24pxIosTextSize alt="" src="/icon-24px--ios--text-size.svg" />
            <Address>
              <Icon24pxIosTextSize alt="" src="/icon-24px--ios--secure.svg" />
              <Domain>geenee.ar</Domain>
            </Address>
            <Icon24pxIosTextSize alt="" src="/icon-24px--ios--reload.svg" />
          </SearchBar>
        )}
      </DarkoffRoot>
    );
  }
);

export default DarkOff;
