import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SHome = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;

export const STitleSpan = styled.span`
  ${(props) => css`
    color: ${props.theme.colors["saleClr"]};
  `}
`;

export const SScreenMessage = styled.div`
  ${tw`h-[80dvh] flex items-center justify-center `}

  h1 {
    ${tw`text-[1.4rem] sm:text-[1.6rem] lg:text-[3rem] 2xl:text-[4rem] text-center flex items-center gap-x-3 w-[80%] `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }
`;

export const SSlidersContainer = styled.div`
  ${tw`gap-y-14 w-full flex flex-col items-center my-9`}
`;

export const SSliderHolder = styled.div`
  ${tw`w-full flex flex-col items-center `}
`;

export const SSliderHeader = styled.h1`
  ${tw`w-[90%] sm:w-full flex items-center justify-center  rounded-md p-1 text-[1.4rem] sm:text-[1.6rem] lg:text-[2rem] h-[3rem] lg:h-[4rem] `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_text"]};
    color: #fff;
  `}

  a {
    ${tw`cursor-pointer no-underline flex items-center justify-center gap-x-3 `}
    ${(props) => css`
      color: #fff;

      :active {
        color: ${props.theme.colors["additional"]};
      }
    `}
  }

  span {
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }

  img {
    ${tw`w-[2rem] sm:w-[2.5rem] lg:w-[3rem] aspect-square rounded-md p-1 `}
    ${(props) => css`
      background-color: ${props.theme.colors["additional"]};
    `}
  }
`;
