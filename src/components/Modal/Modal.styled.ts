import styled, { css } from "styled-components";
import tw from "twin.macro";
import "google-fonts";

export const SModalWrapper = styled.div`
  ${tw`w-full min-h-dvh absolute top-0 right-0 flex items-center backdrop-blur-sm justify-center`}
`;

interface SModalProps {
  registering?: boolean;
}

export const SModal = styled.div<SModalProps>`
  ${tw`p-3 pt-9 rounded-lg w-[90%] h-[90dvh] sm:w-[50%] sm:h-[75vh] xl:w-[40%] border-solid border flex flex-col items-center relative`}
  ${(props) => css`
    ${props.registering ? tw`sm:h-[75dvh] ` : tw` sm:h-[55dvh] `}
    background-color: ${props.theme.mode === "DARK" ? "#2b2b2b" : "#4b4b4b"};
    color: ${props.theme.mode === "DARK" ? "#9b9b9b" : "#ffffff"};
    border-color: ${props.theme.colors["additional"]};
    transition: height 0.1s ease-in-out;
  `}
`;
export const SModalClose = styled.span`
  ${tw`w-[1em] h-[1em] text-[1.2em] cursor-pointer select-none absolute right-2 top-2 flex items-center justify-center rounded-full p-3 border-solid border duration-75`}
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
