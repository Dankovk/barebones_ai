import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type StateNormal1Type = {
  icon24pxUserFaceTrackingF?: string;

  /** Style props */
  stateNormalPosition?: Property.Position;
  stateNormalAlignItems?: Property.AlignItems;
  stateNormalJustifyContent?: Property.JustifyContent;
};

const Icon24pxUserFaceTracki = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const StatenormalRoot = styled.div<{
  stateNormalPosition?: Property.Position;
  stateNormalAlignItems?: Property.AlignItems;
  stateNormalJustifyContent?: Property.JustifyContent;
}>`position: relative;
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  position: ${(p) => p.stateNormalPosition}
  align-items: ${(p) => p.stateNormalAlignItems}
  justify-content: ${(p) => p.stateNormalJustifyContent}
`;
const StateNormal1: FunctionComponent<StateNormal1Type> = memo(
  ({
    icon24pxUserFaceTrackingF,
    stateNormalPosition,
    stateNormalAlignItems,
    stateNormalJustifyContent,
  }) => {
    return (
      <StatenormalRoot
        stateNormalPosition={stateNormalPosition}
        stateNormalAlignItems={stateNormalAlignItems}
        stateNormalJustifyContent={stateNormalJustifyContent}
      >
        <Icon24pxUserFaceTracki alt="" src={icon24pxUserFaceTrackingF} />
      </StatenormalRoot>
    );
  }
);

export default StateNormal1;
