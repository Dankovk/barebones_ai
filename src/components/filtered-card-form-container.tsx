import { FunctionComponent, memo } from "react";
import { Property } from "csstype";
import IPhoneMockup from "./i-phone-mockup";
import SizeSIcon from "./size-s-icon";
import styled from "styled-components";
import Icon24pxOtherImage from "./icon24px-other-image";

type FilteredCardFormContainerType = {
  icon24pxIOSCellular?: boolean;
  cameraIndicator?: boolean;
  screenRecord?: boolean;
  searchBar?: boolean;
  bottomBar?: boolean;

  /** Style props */
  timeOpacity?: Property.Opacity;
  timeZIndex?: Property.ZIndex;
  icon24pxOtherImageBorder?: Property.Border;
};

const BarSection = styled.div<{ icon24pxOtherImageBorder?: Property.Border }>`
  background-color: var(--shades-6);
  border: 2px dashed var(--solid-5);
  box-sizing: border-box;
  width: 378px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: center;
  border: ${(p) => p.icon24pxOtherImageBorder};
`;
const ImageWireframe = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--shades-6);
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const TitleOptional = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 32px;
  font-weight: 500;
`;
const WeAreLoading = styled.p`
  margin-block-start: 0;
  margin-block-end: 8px;
`;
const SeeYouIn = styled.p`
  margin: 0;
`;
const WeAreLoadingContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--desktop-p-3-aa-regular-size);
  line-height: 16px;
  font-family: var(--desktop-p-3-aa-regular);
`;
const Text1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const IntroScreenSection = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Loading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 16px;
`;
const LoaderSection = styled.div`
  border-radius: var(--br-base);
  background-color: var(--shades-6);
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) 0px;
  align-items: center;
  justify-content: center;
  font-size: var(--desktop-p-3-aa-regular-size);
  color: var(--shades-3);
  font-family: var(--desktop-p-3-aa-regular);
`;
const View = styled.div`
  height: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-141xl);
  margin-top: -728px;
`;
const WorkspaceRoot = styled.div<{
  timeOpacity?: Property.Opacity;
  timeZIndex?: Property.ZIndex;
}>`width: 408px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.5;
  z-index: 1;
  text-align: center;
  font-size: var(--desktop-h-4-medium-size);
  color: var(--shades-4);
  font-family: var(--desktop-p-2-aa-medium);
  opacity: ${(p) => p.timeOpacity}
  z-index: ${(p) => p.timeZIndex}
`;
const FilteredCardFormContainer: FunctionComponent<FilteredCardFormContainerType> =
  memo(
    ({
      icon24pxIOSCellular,
      cameraIndicator,
      screenRecord,
      searchBar,
      bottomBar,
      timeOpacity,
      timeZIndex,
      icon24pxOtherImageBorder,
    }) => {
      return (
        <WorkspaceRoot timeOpacity={timeOpacity} timeZIndex={timeZIndex}>
          <IPhoneMockup
            imageDimensions="/brow1.svg"
            showIcon24pxIOSCellular={false}
            cameraIndicator={false}
            screenRecord={false}
            showSearchBar={false}
            showBottomBar={false}
            iPhoneMockupBorder="16px solid var(--white-100)"
            iPhoneMockupHeight="800px"
            topBarBackgroundColor="#f6f4fa"
            bgBackground="unset"
            bgBorderRadius="0px 0px var(--br-21xl) var(--br-21xl)"
            bgBackgroundColor="#fafafa"
          />
          <View>
            <BarSection icon24pxOtherImageBorder={icon24pxOtherImageBorder}>
              <SizeSIcon />
            </BarSection>
            <IntroScreenSection>
              <ImageWireframe>
                <Icon24pxOtherImage
                  icon24pxOtherImageIcon24p="/icon-24px--other--image1.svg"
                  icon24pxOtherImagePosition="absolute"
                  icon24pxOtherImageWidth="96px"
                  icon24pxOtherImageHeight="96px"
                  icon24pxOtherImageMargin="0 !important"
                  icon24pxOtherImageTop="calc(50% - 48px)"
                  icon24pxOtherImageLeft="calc(50% - 48px)"
                  icon24pxOtherImageZIndex="0"
                />
              </ImageWireframe>
              <Text1>
                <TitleOptional>Title (optional)</TitleOptional>
                <WeAreLoadingContainer>
                  <WeAreLoading>{`We are loading your experience, `}</WeAreLoading>
                  <SeeYouIn>see you in a few seconds</SeeYouIn>
                </WeAreLoadingContainer>
              </Text1>
            </IntroScreenSection>
            <LoaderSection>
              <Loading>Loading…</Loading>
            </LoaderSection>
          </View>
        </WorkspaceRoot>
      );
    }
  );

export default FilteredCardFormContainer;
