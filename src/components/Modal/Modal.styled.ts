import styled, { css } from "styled-components";
import tw from "twin.macro";
import "google-fonts";

export const SModalWrapper = styled.div`
  ${tw`w-full min-h-dvh absolute top-0 right-0 flex items-center backdrop-blur-sm justify-center`}
`;

interface SModalProps {
  registering?: boolean;
  small?: boolean;
}

export const SModal = styled.div<SModalProps>`
  ${tw`p-3 pt-9 rounded-lg w-[90%] h-[90dvh] sm:w-[50%] sm:h-[75vh] xl:w-[40%] border-solid border-2 flex flex-col items-center relative`}
  ${(props) => css`
    ${props.registering
      ? tw`sm:h-[75dvh] `
      : props.small
      ? tw` h-fit sm:h-fit`
      : tw` sm:h-[55dvh] `}
    background-color: ${props.theme.mode === "DARK"
      ? props.theme.colors["secondary_text"]
      : "#4b4b4b"};
    color: ${props.theme.mode === "DARK"
      ? props.theme.colors["secondary_background"]
      : "#ffffff"};
    border-color: ${props.theme.colors["additional"]};
    transition: height 0.1s ease-in-out;
  `}
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
