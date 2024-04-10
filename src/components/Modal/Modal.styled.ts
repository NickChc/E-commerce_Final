import styled, { css } from "styled-components";
import tw from "twin.macro";
import "google-fonts";

export const SModalWrapper = styled.div`
  ${tw`w-full min-h-dvh absolute top-0 right-0 flex items-center backdrop-blur-sm justify-center`}
`;

export const SModal = styled.div`
  ${tw`p-3 pt-9 rounded-lg w-[90%] sm:w-[50%] h-fit max-h-dvh shrink overflow-y-auto xl:w-[40%] border-solid border-2 flex flex-col items-center relative`}
  ${(props) => css`
    background-color: ${props.theme.mode === "DARK"
      ? props.theme.colors["secondary_text"]
      : "#4b4b4b"};
    color: ${props.theme.mode === "DARK"
      ? props.theme.colors["secondary_background"]
      : "#ffffff"};
    border-color: ${props.theme.colors["additional"]};
  `}

  ::-webkit-scrollbar {
    ${tw`w-[4px] `}
  }
`;
export const SModalClose = styled.span`
  ${tw`text-[1.4rem] grid place-items-center cursor-pointer select-none absolute right-2 top-2 rounded-full p-1 border-solid border duration-75 `}
  ${(props) => css`
    border-color: transparent;
    color: ${props.theme.mode === "DARK" ? "#5b5b5b" : "#8b8b8b"};
  `}

  :hover {
    ${(props) => css`
      color: ${props.theme.mode === "DARK"
        ? props.theme.colors["additional"]
        : "#1b1b1b"};
      background-color: ${props.theme.mode === "LIGHT" && "#5b5b5b"};
      border-color: ${props.theme.mode === "LIGHT"
        ? props.theme.colors["additional"]
        : "transparent"};
    `}
  }
`;
