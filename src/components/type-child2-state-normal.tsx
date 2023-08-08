import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type TypeChild2StateNormalType = {
  extend?: string;
  layerIcon?: string;
  nodeLayerTitle?: string;
  icon24pxActionsDeleteFat?: string;
  icon24pxActionsShowOnFat?: string;
  icon24pxActionsMoreFat?: string;
  actions?: boolean;
  action3?: boolean;
  showAction2?: boolean;
  showIcon24pxActionsShowOn?: boolean;

  /** Style props */
  typeChild2StateNormalPosition?: Property.Position;
  typeChild2StateNormalWidth?: Property.Width;
  typeChild2StateNormalPadding?: Property.Padding;
  nodeLayerTitleColor?: Property.Color;
  actionsFlexDirection?: Property.FlexDirection;
  actionsAlignItems?: Property.AlignItems;
  actionsJustifyContent?: Property.JustifyContent;
  actionsLineBreak?: Property.LineBreak;
  action3BorderRadius?: Property.BorderRadius;
  action3FlexDirection?: Property.FlexDirection;
  action3Padding?: Property.Padding;
  action3AlignItems?: Property.AlignItems;
  action3JustifyContent?: Property.JustifyContent;
  action3Color?: Property.Color;
  icon24pxActionsDeleteFPosition?: Property.Position;
  icon24pxActionsDeleteFWidth?: Property.Width;
  icon24pxActionsDeleteFHeight?: Property.Height;
  icon24pxActionsDeleteFOverflow?: Property.Overflow;
  icon24pxActionsDeleteFFlexShrink?: Property.FlexShrink;
  icon24pxActionsDeleteFColor?: Property.Color;
  action2BorderRadius?: Property.BorderRadius;
  action2Padding?: Property.Padding;
  icon24pxActionsShowOnPosition?: Property.Position;
  icon24pxActionsShowOnWidth?: Property.Width;
  icon24pxActionsShowOnHeight?: Property.Height;
  icon24pxActionsShowOnOverflow?: Property.Overflow;
  icon24pxActionsShowOnFlexShrink?: Property.FlexShrink;
  icon24pxActionsShowOnBorderRadius?: Property.BorderRadius;
  icon24pxActionsShowOnFlexDirection?: Property.FlexDirection;
  icon24pxActionsShowOnPadding?: Property.Padding;
  icon24pxActionsShowOnAlignItems?: Property.AlignItems;
  icon24pxActionsShowOnJustifyContent?: Property.JustifyContent;
  action1BorderRadius?: Property.BorderRadius;
  action1Display?: Property.Display;
  action1FlexDirection?: Property.FlexDirection;
  action1Padding?: Property.Padding;
  action1AlignItems?: Property.AlignItems;
  action1JustifyContent?: Property.JustifyContent;
  action1Position?: Property.Position;
  action1Width?: Property.Width;
  action1Height?: Property.Height;
  action1Overflow?: Property.Overflow;
  action1FlexShrink?: Property.FlexShrink;
  icon24pxActionsMoreFatPosition?: Property.Position;
  icon24pxActionsMoreFatWidth?: Property.Width;
  icon24pxActionsMoreFatHeight?: Property.Height;
  icon24pxActionsMoreFatBorderRadius?: Property.BorderRadius;
  icon24pxActionsMoreFatDisplay?: Property.Display;
  icon24pxActionsMoreFatFlexDirection?: Property.FlexDirection;
  icon24pxActionsMoreFatPadding?: Property.Padding;
  icon24pxActionsMoreFatAlignItems?: Property.AlignItems;
  icon24pxActionsMoreFatJustifyContent?: Property.JustifyContent;
};

const ExtendIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LayerIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const NodeLayerTitle = styled.div<{ nodeLayerTitleColor?: Property.Color }>`
  flex: 1;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  color: ${(p) => p.nodeLayerTitleColor};
`;
const ExtendIcon1 = styled.img<{
  icon24pxActionsDeleteFPosition?: Property.Position;
  icon24pxActionsDeleteFWidth?: Property.Width;
  icon24pxActionsDeleteFHeight?: Property.Height;
  icon24pxActionsDeleteFOverflow?: Property.Overflow;
  icon24pxActionsDeleteFFlexShrink?: Property.FlexShrink;
  icon24pxActionsDeleteFColor?: Property.Color;
}>`position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  position: ${(p) => p.icon24pxActionsDeleteFPosition}
  width: ${(p) => p.icon24pxActionsDeleteFWidth}
  height: ${(p) => p.icon24pxActionsDeleteFHeight}
  overflow: ${(p) => p.icon24pxActionsDeleteFOverflow}
  flex-shrink: ${(p) => p.icon24pxActionsDeleteFFlexShrink}
  color: ${(p) => p.icon24pxActionsDeleteFColor}
`;
const Action3 = styled.div<{
  action3BorderRadius?: Property.BorderRadius;
  action3FlexDirection?: Property.FlexDirection;
  action3Padding?: Property.Padding;
  action3AlignItems?: Property.AlignItems;
  action3JustifyContent?: Property.JustifyContent;
  action3Color?: Property.Color;
}>`border-radius: var(--br-9xs);
  display: none;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: ${(p) => p.action3BorderRadius}
  flex-direction: ${(p) => p.action3FlexDirection}
  padding: ${(p) => p.action3Padding}
  align-items: ${(p) => p.action3AlignItems}
  justify-content: ${(p) => p.action3JustifyContent}
  color: ${(p) => p.action3Color}
`;
const ExtendIcon2 = styled.img<{
  icon24pxActionsShowOnPosition?: Property.Position;
  icon24pxActionsShowOnWidth?: Property.Width;
  icon24pxActionsShowOnHeight?: Property.Height;
  icon24pxActionsShowOnOverflow?: Property.Overflow;
  icon24pxActionsShowOnFlexShrink?: Property.FlexShrink;
  icon24pxActionsShowOnBorderRadius?: Property.BorderRadius;
  icon24pxActionsShowOnFlexDirection?: Property.FlexDirection;
  icon24pxActionsShowOnPadding?: Property.Padding;
  icon24pxActionsShowOnAlignItems?: Property.AlignItems;
  icon24pxActionsShowOnJustifyContent?: Property.JustifyContent;
}>`position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  position: ${(p) => p.icon24pxActionsShowOnPosition}
  width: ${(p) => p.icon24pxActionsShowOnWidth}
  height: ${(p) => p.icon24pxActionsShowOnHeight}
  overflow: ${(p) => p.icon24pxActionsShowOnOverflow}
  flex-shrink: ${(p) => p.icon24pxActionsShowOnFlexShrink}
  border-radius: ${(p) => p.icon24pxActionsShowOnBorderRadius}
  flex-direction: ${(p) => p.icon24pxActionsShowOnFlexDirection}
  padding: ${(p) => p.icon24pxActionsShowOnPadding}
  align-items: ${(p) => p.icon24pxActionsShowOnAlignItems}
  justify-content: ${(p) => p.icon24pxActionsShowOnJustifyContent}
`;
const Action2 = styled.div<{
  action2BorderRadius?: Property.BorderRadius;
  action2Padding?: Property.Padding;
}>`border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-end;
  border-radius: ${(p) => p.action2BorderRadius}
  padding: ${(p) => p.action2Padding}
`;
const LayerIcon1 = styled.img<{
  icon24pxActionsMoreFatPosition?: Property.Position;
  icon24pxActionsMoreFatWidth?: Property.Width;
  icon24pxActionsMoreFatHeight?: Property.Height;
  icon24pxActionsMoreFatBorderRadius?: Property.BorderRadius;
  icon24pxActionsMoreFatDisplay?: Property.Display;
  icon24pxActionsMoreFatFlexDirection?: Property.FlexDirection;
  icon24pxActionsMoreFatPadding?: Property.Padding;
  icon24pxActionsMoreFatAlignItems?: Property.AlignItems;
  icon24pxActionsMoreFatJustifyContent?: Property.JustifyContent;
}>`position: relative;
  width: 16px;
  height: 16px;
  position: ${(p) => p.icon24pxActionsMoreFatPosition}
  width: ${(p) => p.icon24pxActionsMoreFatWidth}
  height: ${(p) => p.icon24pxActionsMoreFatHeight}
  border-radius: ${(p) => p.icon24pxActionsMoreFatBorderRadius}
  display: ${(p) => p.icon24pxActionsMoreFatDisplay}
  flex-direction: ${(p) => p.icon24pxActionsMoreFatFlexDirection}
  padding: ${(p) => p.icon24pxActionsMoreFatPadding}
  align-items: ${(p) => p.icon24pxActionsMoreFatAlignItems}
  justify-content: ${(p) => p.icon24pxActionsMoreFatJustifyContent}
`;
const Action21 = styled.div<{
  action1BorderRadius?: Property.BorderRadius;
  action1Display?: Property.Display;
  action1FlexDirection?: Property.FlexDirection;
  action1Padding?: Property.Padding;
  action1AlignItems?: Property.AlignItems;
  action1JustifyContent?: Property.JustifyContent;
  action1Position?: Property.Position;
  action1Width?: Property.Width;
  action1Height?: Property.Height;
  action1Overflow?: Property.Overflow;
  action1FlexShrink?: Property.FlexShrink;
}>`border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-end;
  border-radius: ${(p) => p.action1BorderRadius}
  display: ${(p) => p.action1Display}
  flex-direction: ${(p) => p.action1FlexDirection}
  padding: ${(p) => p.action1Padding}
  align-items: ${(p) => p.action1AlignItems}
  justify-content: ${(p) => p.action1JustifyContent}
  position: ${(p) => p.action1Position}
  width: ${(p) => p.action1Width}
  height: ${(p) => p.action1Height}
  overflow: ${(p) => p.action1Overflow}
  flex-shrink: ${(p) => p.action1FlexShrink}
`;
const Actions = styled.div<{
  actionsFlexDirection?: Property.FlexDirection;
  actionsAlignItems?: Property.AlignItems;
  actionsJustifyContent?: Property.JustifyContent;
  actionsLineBreak?: Property.LineBreak;
}>`display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-direction: ${(p) => p.actionsFlexDirection}
  align-items: ${(p) => p.actionsAlignItems}
  justify-content: ${(p) => p.actionsJustifyContent}
  line-break: ${(p) => p.actionsLineBreak}
`;
const Typechild2StatenormalRoot = styled.div<{
  typeChild2StateNormalPosition?: Property.Position;
  typeChild2StateNormalWidth?: Property.Width;
  typeChild2StateNormalPadding?: Property.Padding;
}>`position: relative;
  border-radius: var(--br-9xs);
  width: 256px;
  height: 32px;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-9xs) 0px var(--padding-25xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--desktop-p-3-aa-regular-size);
  color: var(--shades-2);
  font-family: var(--desktop-p-3-aa-regular);
  position: ${(p) => p.typeChild2StateNormalPosition}
  width: ${(p) => p.typeChild2StateNormalWidth}
  padding: ${(p) => p.typeChild2StateNormalPadding}
`;
const TypeChild2StateNormal: FunctionComponent<TypeChild2StateNormalType> =
  memo(
    ({
      extend,
      layerIcon,
      nodeLayerTitle,
      icon24pxActionsDeleteFat,
      icon24pxActionsShowOnFat,
      icon24pxActionsMoreFat,
      actions,
      action3,
      showAction2,
      showIcon24pxActionsShowOn,
      typeChild2StateNormalPosition,
      typeChild2StateNormalWidth,
      typeChild2StateNormalPadding,
      nodeLayerTitleColor,
      actionsFlexDirection,
      actionsAlignItems,
      actionsJustifyContent,
      actionsLineBreak,
      action3BorderRadius,
      action3FlexDirection,
      action3Padding,
      action3AlignItems,
      action3JustifyContent,
      action3Color,
      icon24pxActionsDeleteFPosition,
      icon24pxActionsDeleteFWidth,
      icon24pxActionsDeleteFHeight,
      icon24pxActionsDeleteFOverflow,
      icon24pxActionsDeleteFFlexShrink,
      icon24pxActionsDeleteFColor,
      action2BorderRadius,
      action2Padding,
      icon24pxActionsShowOnPosition,
      icon24pxActionsShowOnWidth,
      icon24pxActionsShowOnHeight,
      icon24pxActionsShowOnOverflow,
      icon24pxActionsShowOnFlexShrink,
      icon24pxActionsShowOnBorderRadius,
      icon24pxActionsShowOnFlexDirection,
      icon24pxActionsShowOnPadding,
      icon24pxActionsShowOnAlignItems,
      icon24pxActionsShowOnJustifyContent,
      action1BorderRadius,
      action1Display,
      action1FlexDirection,
      action1Padding,
      action1AlignItems,
      action1JustifyContent,
      action1Position,
      action1Width,
      action1Height,
      action1Overflow,
      action1FlexShrink,
      icon24pxActionsMoreFatPosition,
      icon24pxActionsMoreFatWidth,
      icon24pxActionsMoreFatHeight,
      icon24pxActionsMoreFatBorderRadius,
      icon24pxActionsMoreFatDisplay,
      icon24pxActionsMoreFatFlexDirection,
      icon24pxActionsMoreFatPadding,
      icon24pxActionsMoreFatAlignItems,
      icon24pxActionsMoreFatJustifyContent,
    }) => {
      return (
        <Typechild2StatenormalRoot
          typeChild2StateNormalPosition={typeChild2StateNormalPosition}
          typeChild2StateNormalWidth={typeChild2StateNormalWidth}
          typeChild2StateNormalPadding={typeChild2StateNormalPadding}
        >
          <Icons>
            <ExtendIcon alt="" src={extend} />
            <LayerIcon alt="" src={layerIcon} />
          </Icons>
          <NodeLayerTitle nodeLayerTitleColor={nodeLayerTitleColor}>
            {nodeLayerTitle}
          </NodeLayerTitle>
          {!actions && (
            <Actions
              actionsFlexDirection={actionsFlexDirection}
              actionsAlignItems={actionsAlignItems}
              actionsJustifyContent={actionsJustifyContent}
              actionsLineBreak={actionsLineBreak}
            >
              {!action3 && (
                <Action3
                  action3BorderRadius={action3BorderRadius}
                  action3FlexDirection={action3FlexDirection}
                  action3Padding={action3Padding}
                  action3AlignItems={action3AlignItems}
                  action3JustifyContent={action3JustifyContent}
                  action3Color={action3Color}
                >
                  <ExtendIcon1
                    alt=""
                    src={icon24pxActionsDeleteFat}
                    icon24pxActionsDeleteFPosition={
                      icon24pxActionsDeleteFPosition
                    }
                    icon24pxActionsDeleteFWidth={icon24pxActionsDeleteFWidth}
                    icon24pxActionsDeleteFHeight={icon24pxActionsDeleteFHeight}
                    icon24pxActionsDeleteFOverflow={
                      icon24pxActionsDeleteFOverflow
                    }
                    icon24pxActionsDeleteFFlexShrink={
                      icon24pxActionsDeleteFFlexShrink
                    }
                    icon24pxActionsDeleteFColor={icon24pxActionsDeleteFColor}
                  />
                </Action3>
              )}
              {showAction2 && (
                <Action2
                  action2BorderRadius={action2BorderRadius}
                  action2Padding={action2Padding}
                >
                  {showIcon24pxActionsShowOn && (
                    <ExtendIcon2
                      alt=""
                      src={icon24pxActionsShowOnFat}
                      icon24pxActionsShowOnPosition={
                        icon24pxActionsShowOnPosition
                      }
                      icon24pxActionsShowOnWidth={icon24pxActionsShowOnWidth}
                      icon24pxActionsShowOnHeight={icon24pxActionsShowOnHeight}
                      icon24pxActionsShowOnOverflow={
                        icon24pxActionsShowOnOverflow
                      }
                      icon24pxActionsShowOnFlexShrink={
                        icon24pxActionsShowOnFlexShrink
                      }
                      icon24pxActionsShowOnBorderRadius={
                        icon24pxActionsShowOnBorderRadius
                      }
                      icon24pxActionsShowOnFlexDirection={
                        icon24pxActionsShowOnFlexDirection
                      }
                      icon24pxActionsShowOnPadding={
                        icon24pxActionsShowOnPadding
                      }
                      icon24pxActionsShowOnAlignItems={
                        icon24pxActionsShowOnAlignItems
                      }
                      icon24pxActionsShowOnJustifyContent={
                        icon24pxActionsShowOnJustifyContent
                      }
                    />
                  )}
                </Action2>
              )}
              <Action21
                action1BorderRadius={action1BorderRadius}
                action1Display={action1Display}
                action1FlexDirection={action1FlexDirection}
                action1Padding={action1Padding}
                action1AlignItems={action1AlignItems}
                action1JustifyContent={action1JustifyContent}
                action1Position={action1Position}
                action1Width={action1Width}
                action1Height={action1Height}
                action1Overflow={action1Overflow}
                action1FlexShrink={action1FlexShrink}
              >
                <LayerIcon1
                  alt=""
                  src={icon24pxActionsMoreFat}
                  icon24pxActionsMoreFatPosition={
                    icon24pxActionsMoreFatPosition
                  }
                  icon24pxActionsMoreFatWidth={icon24pxActionsMoreFatWidth}
                  icon24pxActionsMoreFatHeight={icon24pxActionsMoreFatHeight}
                  icon24pxActionsMoreFatBorderRadius={
                    icon24pxActionsMoreFatBorderRadius
                  }
                  icon24pxActionsMoreFatDisplay={icon24pxActionsMoreFatDisplay}
                  icon24pxActionsMoreFatFlexDirection={
                    icon24pxActionsMoreFatFlexDirection
                  }
                  icon24pxActionsMoreFatPadding={icon24pxActionsMoreFatPadding}
                  icon24pxActionsMoreFatAlignItems={
                    icon24pxActionsMoreFatAlignItems
                  }
                  icon24pxActionsMoreFatJustifyContent={
                    icon24pxActionsMoreFatJustifyContent
                  }
                />
              </Action21>
            </Actions>
          )}
        </Typechild2StatenormalRoot>
      );
    }
  );

export default TypeChild2StateNormal;
