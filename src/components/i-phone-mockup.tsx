import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import DarkOff from "./dark-off";
import styled from "styled-components";
import DarkOffPlatformSafari from "./dark-off-platform-safari";
import DarkOff2 from "./dark-off2";

type IPhoneMockupType = {
  imageDimensions?: string;
  showIcon24pxIOSCellular?: boolean;
  cameraIndicator?: boolean;
  screenRecord?: boolean;
  showSearchBar?: boolean;
  showBottomBar?: boolean;

  /** Style props */
  iPhoneMockupBorder?: Property.Border;
  iPhoneMockupHeight?: Property.Height;
  topBarBackgroundColor?: Property.BackgroundColor;
  bgBackground?: Property.Background;
  bgBorderRadius?: Property.BorderRadius;
  bgBackgroundColor?: Property.BackgroundColor;
};

const Bg = styled.div<{
  bgBackground?: Property.Background;
  bgBorderRadius?: Property.BorderRadius;
  bgBackgroundColor?: Property.BackgroundColor;
}>`align-self: stretch;
  flex: 1;
  position: relative;
  background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(180deg, #e24eff, #8e53ff);
  z-index: 1;
  background: ${(p) => p.bgBackground}
  border-radius: ${(p) => p.bgBorderRadius}
  background-color: ${(p) => p.bgBackgroundColor}
`;
const BottomBar = styled.div`
  align-self: stretch;
  border-radius: 0px 0px var(--br-21xl) var(--br-21xl);
  background-color: var(--shades-bg-default);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
`;
const BrowIcon = styled.img`
  position: relative;
  width: 168px;
  height: 32px;
`;
const Brow = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: calc(50% - 84px);
  display: flex;
  flex-direction: column;
  padding: var(--padding-base) 0px 0px;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
`;
const IphoneMockupRoot = styled.div<{
  iPhoneMockupBorder?: Property.Border;
  iPhoneMockupHeight?: Property.Height;
}>`position: relative;
  border-radius: var(--br-37xl);
  box-shadow: var(--drop-shadow-m);
  border: 16px solid var(--shades-7);
  box-sizing: border-box;
  width: 408px;
  height: 848px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  border: ${(p) => p.iPhoneMockupBorder}
  height: ${(p) => p.iPhoneMockupHeight}
`;
const IPhoneMockup: FunctionComponent<IPhoneMockupType> = memo(
  ({
    imageDimensions,
    showIcon24pxIOSCellular,
    cameraIndicator,
    screenRecord,
    showSearchBar,
    showBottomBar,
    iPhoneMockupBorder,
    iPhoneMockupHeight,
    topBarBackgroundColor,
    bgBackground,
    bgBorderRadius,
    bgBackgroundColor,
  }) => {
    return (
      <IphoneMockupRoot
        iPhoneMockupBorder={iPhoneMockupBorder}
        iPhoneMockupHeight={iPhoneMockupHeight}
      >
        <DarkOff
          showIcon24pxIOSCellular
          cameraIndicator={false}
          screenRecord={false}
          showSearchBar
          darkOffPosition="unset"
          darkOffBackgroundColor="#fafafa"
          darkOffWidth="unset"
          darkOffAlignSelf="stretch"
          darkOffBorderRadius="var(--br-21xl) var(--br-21xl) 0px 0px"
          darkOffZIndex="0"
        />
        <Bg
          bgBackground={bgBackground}
          bgBorderRadius={bgBorderRadius}
          bgBackgroundColor={bgBackgroundColor}
        />
        {showBottomBar && (
          <BottomBar>
            <DarkOffPlatformSafari
              darkOffPlatformSafariPosition="unset"
              darkOffPlatformSafariWidth="unset"
              darkOffPlatformSafariBoxSizing="border-box"
              darkOffPlatformSafariAlignSelf="stretch"
            />
            <DarkOff2
              darkOffWidth="unset"
              darkOffAlignSelf="stretch"
              darkOffBorderRadius="0px 0px var(--br-21xl) var(--br-21xl)"
            />
          </BottomBar>
        )}
        <Brow>
          <BrowIcon alt="" src={imageDimensions} />
        </Brow>
      </IphoneMockupRoot>
    );
  }
);

export default IPhoneMockup;
