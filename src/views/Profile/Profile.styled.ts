import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProfile = styled.div`
  ${tw`w-[80%] min-h-dvh flex flex-col items-center px-2 `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}


  input:disabled {
    ${tw`border-none outline-none w-[40%] ml-3 disabled:text-black disabled:font-bold `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
      background-color: ${props.theme.colors["secondary"]};
    `}
  }

  /* USE FOR LOG OUT BUTTON */
  /* button {
    ${tw`p-[.6rem] border-solid border rounded-xl cursor-pointer `}
    ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    color: ${props.theme.colors["additional"]};
  `}
  } */
`;

export const SChangeForm = styled.form<SEditProps>`
  ${tw`w-[35%] border-solid border rounded-md h-[20dvh] p-3 pt-1 pb-6 flex flex-col items-stretch justify-between text-center `}

  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.colors["secondary_text"]};
    color: #8b8b8b;
    transform-origin: top left;
    transform: scale(${props.editing ? "1" : "0"});
    transition: transform 0.2s;
  `}
`;

export const SUserInfo = styled.div`
  ${tw`w-[65%] flex items-start gap-x-3 `}

  img {
    ${tw`w-[20%] min-w-[170px] aspect-square  `}
  }

  div {
    ${tw`w-[70%] flex flex-col items-start gap-y-1 `}

    h2 {
      ${tw`w-full border-solid border border-black border-x-0 border-t-0 relative py-1 pr-6 whitespace-nowrap `}
      ${(props) => css`
        color: ${props.theme.colors["secondary_text"]};
      `}
    }
  }
`;

export const SValue = styled.span`
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
  `}
`;

interface SEditProps {
  editing: boolean;
}

export const SEditHolder = styled.span<SEditProps>`
  ${tw`absolute right-1 top-[50%] translate-y-[-50%] text-[1.2rem] cursor-pointer `}
  ${(props) => css`
    color: ${props.editing
      ? props.theme.colors["additional"]
      : props.theme.colors["primary"]};
  `}
`;
