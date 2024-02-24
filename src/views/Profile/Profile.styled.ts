import styled, { css } from "styled-components";
import tw from "twin.macro";
import { EyeIcon } from "@src/assets/icons";

export const SProfile = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex flex-col items-center border-solid border border-y-0 pt-9 text-start`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}

  h1 {
    ${tw`mb-3 `}
  }
`;

export const SMainWrapper = styled.div`
  ${tw`flex justify-between items-stretch w-full mt-6 `}
`;

export const SProfileWrapper = styled.div`
  ${tw`w-[50%] px-14 gap-x-3 gap-y-3 flex flex-col items-stretch `}

  img {
    ${tw`w-[25%] min-w-[50px] aspect-square object-cover rounded-lg `}
  }

  h4 {
    ${tw` max-w-[50%] whitespace-nowrap `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}

    span {
      ${tw``}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;


export const SUserInfo = styled.div`
  ${tw`flex flex-col items-start gap-y-3 pt-1 w-[45%] `}

  div {
    ${tw`flex flex-col items-start gap-y-[.7rem] `}

    div {
      ${tw`flex flex-row items-center justify-between `}

      input {
        ${tw`disabled:border-none border-none outline-none m-1 ml-3 disabled:max-w-[5rem] font-bold `}
        ${(props) => css`
          color: ${props.theme.colors["primary"]};
          background-color: ${props.theme.colors["secondary"]};
        `}
      }
    }
  }
`;


export const SImgWrapper = styled.div`
  ${tw`flex items-start gap-x-3 mb-1 `}
`;

export const SMapHolder = styled.div`
  ${tw`w-[40%] max-h-[55dvh] border-solid border border-black rounded-lg mr-10 `}
`;
