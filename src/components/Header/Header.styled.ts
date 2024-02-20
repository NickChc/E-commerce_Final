import styled, { css } from "styled-components";
import tw from "twin.macro";
import "google-fonts";
import { ReactIcon } from "@src/assets/icons";

export const SHeader = styled.div`
  ${tw`w-full p-1 sm:p-3 z-10 sticky top-0 flex flex-col lg:flex-row justify-around items-center border-b border-solid border-t-0 border-r-0 border-l-0 relative`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_background"]};
    border-color: ${props.theme.colors["additional"]};
  `}

  h1 {
    ${tw`text-[1.5em] sm:text-[2em] md:text-[2em] lg:text-[1.5em] xl:text-[2em]`}
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }

`;

export const SBtnsWrapper = styled.div`
  ${tw`w-full mt-1 px-9 md:w-auto flex items-stretch justify-around lg:justify-center gap-x-1 sm:gap-x-3`}
`;

export const SHideButtonWrapper = styled.span`
  ${tw`flex lg:hidden`}
`;


interface SHeadlineWrapperProps {
  isHome: boolean;
}

export const SHeadlineWrapper = styled.div<SHeadlineWrapperProps>`
  ${tw`inline-flex items-center justify-center gap-x-2 lg:gap-x-3 relative whitespace-nowrap after:content-["go to home"] after:py-1 after:px-2 after:text-[.8em] after:rounded-sm after:border-solid after:border after:absolute after:bottom-[-40%] after:left-[70%] after:whitespace-nowrap after:scale-0 after:origin-top-left hover:after:scale-100 after:duration-200 after:pointer-events-none select-none`}
  ${(props) => css`
    ${props.isHome ? tw`cursor-default` : tw`cursor-pointer`}
  `}

  ::after {
    content: "go to home";
    background-color: #ffffff;
    border-color: #000000;
    ${(props) => css`
      ${props.isHome && tw`hidden`}
    `}
  }

  @media (hover: hover) {
    :hover::after {
      content: "go to home";
    }
  }

  div {
    ${tw`inline-flex items-center justify-center`}
  }

  h1 {
    ${tw`lg:text-[1.6em] xl:text-[2em] font-[Oswald, sans]`}
  }
`;

export const SReactIcon = styled(ReactIcon)`
  ${tw`text-3xl sm:text-3xl xl:text-4xl `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary-background"]};
    color: ${props.theme.colors["additional"]};
  `}
`;

export const SNavWrapper = styled.div`
  ${tw`hidden lg:block`}
`;

export const SThemeSelectSm = styled.span`
  ${tw`block lg:hidden absolute right-3 top-2 sm:right-9 sm:top-4`}
`;

export const SThemeSelectLg = styled.span`
  ${tw`hidden lg:block`}
`;
