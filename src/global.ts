import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-pt-sans: 'PT Sans';
--font-pt-serif: 'PT Serif';
--desktop-p-3-aa-regular: Inter;
--desktop-p-2-aa-medium: 'Inter Tight';

/* font sizes */
--font-size-mini: 15px;
--desktop-p-2-aa-regular-size: 14px;
--desktop-p-3-aa-regular-size: 12px;
--desktop-h-4-medium-size: 24px;

/* Colors */
--shades-bg-default: #fafafa;
--shades-1: #211b2e;
--white-50: rgba(255, 255, 255, 0.5);
--shades-10: rgba(33, 27, 46, 0.1);
--white-25: rgba(255, 255, 255, 0.25);
--white-60: rgba(255, 255, 255, 0.6);
--shades-7: #f6f4fa;
--shades-3: #615b6f;
--solid-8: #ff5e7b;
--white-100: #fff;
--solid-1: #85ff9f;
--shades-2: #3e3b46;
--shades-4: #858293;
--shades-6: #e4e2ea;
--solid-5: #8e53ff;

/* Gaps */
--gap-9xs: 4px;
--gap-base: 16px;
--gap-5xs: 8px;
--gap-141xl: 160px;

/* Paddings */
--padding-base: 16px;
--padding-3xs: 10px;
--padding-5xs: 8px;
--padding-7xs: 6px;
--padding-sm: 14px;
--padding-9xs: 4px;
--padding-45xl: 64px;
--padding-37xl: 56px;
--padding-13xl: 32px;
--padding-xs: 12px;
--padding-5xl: 24px;
--padding-25xl: 44px;

/* border radiuses */
--br-37xl: 56px;
--br-21xl: 40px;
--br-81xl: 100px;
--br-5xs: 8px;
--br-980xl: 999px;
--br-12xs: 1px;
--br-base: 16px;
--br-xs: 12px;
--br-9xs: 4px;

/* Effects */
--drop-shadow-m: 0px 4px 16px rgba(133, 130, 147, 0.35);
--translucency-m: 0px 8px 32px -16px rgba(135, 112, 195, 0.6);
--button-light-normal: 0px 2px 4px -1px rgba(133, 130, 147, 0.5);
--button-dark-normal: 0px 2px 4px -1px #858293;
--translucency-s: 0px 2px 4px rgba(135, 112, 195, 0.4);
}
`;
