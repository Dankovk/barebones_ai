import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type TypeSingleStateNormalType = {
  layerIcon?: string;
  nodeLayerTitle?: string;
  icon24pxActionsDeleteFat?: string;
  icon24pxActionsShowOnFat?: string;
  icon24pxActionsMoreFat?: string;
  actions?: boolean;
  action3?: boolean;

  /** Style props */
  typeSingleStateNormalPosition?: Property.Position;
  typeSingleStateNormalWidth?: Property.Width;
};

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
`;
const NodeLayerTitle = styled.div`
  flex: 1;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
`;
const Icon24pxActionsDeleteF = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Action3 = styled.div`
  border-radius: var(--br-9xs);
  display: none;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: flex-start;
  justify-content: flex-start;
`;
const Action2 = styled.div`
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-end;
`;
const Actions = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const TypesingleStatenormalRoot = styled.div<{
  typeSingleStateNormalPosition?: Property.Position;
  typeSingleStateNormalWidth?: Property.Width;
}>`position: relative;
  border-radius: var(--br-9xs);
  width: 256px;
  height: 32px;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-9xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--desktop-p-3-aa-regular-size);
  color: var(--shades-2);
  font-family: var(--desktop-p-3-aa-regular);
  position: ${(p) => p.typeSingleStateNormalPosition}
  width: ${(p) => p.typeSingleStateNormalWidth}
`;
const TypeSingleStateNormal: FunctionComponent<TypeSingleStateNormalType> =
  memo(
    ({
      layerIcon,
      nodeLayerTitle,
      icon24pxActionsDeleteFat,
      icon24pxActionsShowOnFat,
      icon24pxActionsMoreFat,
      actions,
      action3,
      typeSingleStateNormalPosition,
      typeSingleStateNormalWidth,
    }) => {
      return (
        <TypesingleStatenormalRoot
          typeSingleStateNormalPosition={typeSingleStateNormalPosition}
          typeSingleStateNormalWidth={typeSingleStateNormalWidth}
        >
          <Icons>
            <LayerIcon alt="" src={layerIcon} />
          </Icons>
          <NodeLayerTitle>{nodeLayerTitle}</NodeLayerTitle>
          {!actions && (
            <Actions>
              {!action3 && (
                <Action3>
                  <Icon24pxActionsDeleteF
                    alt=""
                    src={icon24pxActionsDeleteFat}
                  />
                </Action3>
              )}
              <Action2>
                <Icon24pxActionsDeleteF alt="" src={icon24pxActionsShowOnFat} />
              </Action2>
              <Action2>
                <LayerIcon alt="" src={icon24pxActionsMoreFat} />
              </Action2>
            </Actions>
          )}
        </TypesingleStatenormalRoot>
      );
    }
  );

export default TypeSingleStateNormal;
