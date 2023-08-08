import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type StateSelectedTextNoType = {
  icon24px?: string;

  /** Style props */
  stateSelectedTextNoPosition?: Property.Position;
  stateSelectedTextNoBackgroundColor?: Property.BackgroundColor;
  icon24pxOverflow?: Property.Overflow;
  icon24pxFlexShrink?: Property.FlexShrink;
};

const Icon24px = styled.img<{
  icon24pxOverflow?: Property.Overflow;
  icon24pxFlexShrink?: Property.FlexShrink;
}>`position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  overflow: ${(p) => p.icon24pxOverflow}
  flex-shrink: ${(p) => p.icon24pxFlexShrink}
`;
const StateselectedTextnoRoot = styled.div<{
  stateSelectedTextNoPosition?: Property.Position;
  stateSelectedTextNoBackgroundColor?: Property.BackgroundColor;
}>`position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--shades-4);
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  position: ${(p) => p.stateSelectedTextNoPosition}
  background-color: ${(p) => p.stateSelectedTextNoBackgroundColor}
`;
const StateSelectedTextNo: FunctionComponent<StateSelectedTextNoType> = memo(
  ({
    icon24px,
    stateSelectedTextNoPosition,
    stateSelectedTextNoBackgroundColor,
    icon24pxOverflow,
    icon24pxFlexShrink,
  }) => {
    return (
      <StateselectedTextnoRoot
        stateSelectedTextNoPosition={stateSelectedTextNoPosition}
        stateSelectedTextNoBackgroundColor={stateSelectedTextNoBackgroundColor}
      >
        <Icon24px
          alt=""
          src={icon24px}
          icon24pxOverflow={icon24pxOverflow}
          icon24pxFlexShrink={icon24pxFlexShrink}
        />
      </StateselectedTextnoRoot>
    );
  }
);

export default StateSelectedTextNo;
