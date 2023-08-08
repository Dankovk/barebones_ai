import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import StateSelectedTextNo from "./state-selected-text-no";
import styled from "styled-components";

type AlignLeftType = {
  icon24px?: string;
  icon24px1?: string;
  icon24px2?: string;
  showSceneControls?: boolean;
  sceneControlsVisible?: boolean;

  /** Style props */
  alignLeftPosition?: Property.Position;
  sceneControlsBackgroundColor?: Property.BackgroundColor;
  icon24pxOverflow?: Property.Overflow;
  icon24pxFlexShrink?: Property.FlexShrink;
};

const AlignleftRoot = styled.div<{ alignLeftPosition?: Property.Position }>`
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--white-60);
  box-shadow: var(--translucency-s);
  backdrop-filter: blur(32px);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  position: ${(p) => p.alignLeftPosition};
`;
const AlignLeft: FunctionComponent<AlignLeftType> = memo(
  ({
    icon24px,
    icon24px1,
    icon24px2,
    showSceneControls,
    sceneControlsVisible,
    alignLeftPosition,
    sceneControlsBackgroundColor,
    icon24pxOverflow,
    icon24pxFlexShrink,
  }) => {
    return (
      <AlignleftRoot alignLeftPosition={alignLeftPosition}>
        <StateSelectedTextNo
          icon24px="/icon-24px.svg"
          stateSelectedTextNoPosition="unset"
          stateSelectedTextNoBackgroundColor="unset"
          icon24pxOverflow="unset"
          icon24pxFlexShrink="unset"
        />
        <StateSelectedTextNo
          icon24px="/icon-24px1.svg"
          stateSelectedTextNoPosition="unset"
          stateSelectedTextNoBackgroundColor="unset"
          icon24pxOverflow="hidden"
          icon24pxFlexShrink="0"
        />
        <StateSelectedTextNo
          icon24px="/icon-24px2.svg"
          stateSelectedTextNoPosition="unset"
          stateSelectedTextNoBackgroundColor="unset"
          icon24pxOverflow="unset"
          icon24pxFlexShrink="unset"
        />
      </AlignleftRoot>
    );
  }
);

export default AlignLeft;
