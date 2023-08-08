import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";
import Icon24pxIOSBattery from "./icon24px-i-o-s-battery";

type DarkOff1Type = {
  time?: string;
  showIcon24pxIOSCellular?: boolean;
  cameraIndicator?: boolean;
  screenRecord?: boolean;

  /** Style props */
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
};

const Time = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 48px;
  flex-shrink: 0;
  z-index: 0;
`;
const Icon24pxIosCellular = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const TopRightIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
`;
const CameraIndicator = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 8px;
  right: 64px;
  border-radius: 50%;
  background-color: var(--solid-1);
  width: 6px;
  height: 6px;
  display: none;
  z-index: 2;
`;
const Time1 = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 16px;
  font-weight: 600;
`;
const ScreenRecord = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 12px;
  left: 16px;
  border-radius: var(--br-980xl);
  background-color: var(--solid-8);
  display: none;
  flex-direction: row;
  padding: var(--padding-9xs) var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
  font-size: var(--font-size-mini);
  color: var(--white-100);
`;
const DarkoffRoot = styled.div<{
  darkOffWidth?: Property.Width;
  darkOffAlignSelf?: Property.AlignSelf;
}>`position: relative;
  width: 352px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-sm) var(--padding-5xs) var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: var(--desktop-p-2-aa-regular-size);
  color: var(--shades-3);
  font-family: var(--font-pt-serif);
  width: ${(p) => p.darkOffWidth}
  align-self: ${(p) => p.darkOffAlignSelf}
`;
const DarkOff1: FunctionComponent<DarkOff1Type> = memo(
  ({
    time,
    showIcon24pxIOSCellular,
    cameraIndicator,
    screenRecord,
    darkOffWidth,
    darkOffAlignSelf,
  }) => {
    return (
      <DarkoffRoot
        darkOffWidth={darkOffWidth}
        darkOffAlignSelf={darkOffAlignSelf}
      >
        <Time>{time}</Time>
        <TopRightIcons>
          {showIcon24pxIOSCellular && (
            <Icon24pxIosCellular alt="" src="/icon-24px--ios--cellular.svg" />
          )}
          <Icon24pxIosCellular alt="" src="/icon-24px--ios--wifi.svg" />
          <Icon24pxIOSBattery capacityBackgroundColor="#615b6f" />
        </TopRightIcons>
        {!cameraIndicator && <CameraIndicator />}
        {!screenRecord && (
          <ScreenRecord>
            <Time1>12:48</Time1>
          </ScreenRecord>
        )}
      </DarkoffRoot>
    );
  }
);

export default DarkOff1;
