import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type DarkOffPlatformSafariType = {
  /** Style props */
  darkOffPlatformSafariPosition?: Property.Position;
  darkOffPlatformSafariWidth?: Property.Width;
  darkOffPlatformSafariBoxSizing?: Property.BoxSizing;
  darkOffPlatformSafariAlignSelf?: Property.AlignSelf;
};

const Icon24pxIos = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon24pxIosShare = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const DarkoffPlatformsafariRoot = styled.div<{
  darkOffPlatformSafariPosition?: Property.Position;
  darkOffPlatformSafariWidth?: Property.Width;
  darkOffPlatformSafariBoxSizing?: Property.BoxSizing;
  darkOffPlatformSafariAlignSelf?: Property.AlignSelf;
}>`position: relative;
  background-color: var(--shades-bg-default);
  width: 376px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: ${(p) => p.darkOffPlatformSafariPosition}
  width: ${(p) => p.darkOffPlatformSafariWidth}
  box-sizing: ${(p) => p.darkOffPlatformSafariBoxSizing}
  align-self: ${(p) => p.darkOffPlatformSafariAlignSelf}
`;
const DarkOffPlatformSafari: FunctionComponent<DarkOffPlatformSafariType> =
  memo(
    ({
      darkOffPlatformSafariPosition,
      darkOffPlatformSafariWidth,
      darkOffPlatformSafariBoxSizing,
      darkOffPlatformSafariAlignSelf,
    }) => {
      return (
        <DarkoffPlatformsafariRoot
          darkOffPlatformSafariPosition={darkOffPlatformSafariPosition}
          darkOffPlatformSafariWidth={darkOffPlatformSafariWidth}
          darkOffPlatformSafariBoxSizing={darkOffPlatformSafariBoxSizing}
          darkOffPlatformSafariAlignSelf={darkOffPlatformSafariAlignSelf}
        >
          <Icon24pxIos alt="" src="/icon-24px--ios-.svg" />
          <Icon24pxIos alt="" src="/icon-24px--ios-1.svg" />
          <Icon24pxIosShare alt="" src="/icon-24px--ios--share.svg" />
          <Icon24pxIosShare alt="" src="/icon-24px--ios--library.svg" />
          <Icon24pxIosShare alt="" src="/icon-24px--ios--copy.svg" />
        </DarkoffPlatformsafariRoot>
      );
    }
  );

export default DarkOffPlatformSafari;
