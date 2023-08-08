import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type Icon24pxIOSBatteryType = {
  /** Style props */
  capacityBackgroundColor?: Property.BackgroundColor;
};

const Capacity = styled.div<{
  capacityBackgroundColor?: Property.BackgroundColor;
}>`
  position: absolute;
  height: 29.17%;
  width: 66.67%;
  top: 35.42%;
  right: 16.67%;
  bottom: 35.42%;
  left: 16.67%;
  border-radius: var(--br-12xs);
  background-color: var(--shades-1);
  background-color: ${(p) => p.capacityBackgroundColor};
`;
const UnionIcon = styled.img`
  position: absolute;
  height: 45.83%;
  width: 91.67%;
  top: 27.08%;
  right: 0%;
  bottom: 27.08%;
  left: 8.33%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Icon24pxIosBatteryRoot = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Icon24pxIOSBattery: FunctionComponent<Icon24pxIOSBatteryType> = memo(
  ({ capacityBackgroundColor }) => {
    return (
      <Icon24pxIosBatteryRoot>
        <Capacity capacityBackgroundColor={capacityBackgroundColor} />
        <UnionIcon alt="" src="/union.svg" />
      </Icon24pxIosBatteryRoot>
    );
  }
);

export default Icon24pxIOSBattery;
