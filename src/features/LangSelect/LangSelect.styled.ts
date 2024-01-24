import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SLangWrapper = styled.div`
  ${tw` flex items-end justify-between absolute bottom-9 sm:bottom-3 right-3`}

  p {
    ${tw`text-sm sm:text-lg`}
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }
`;

export const SLangSelect = styled.div`
  ${tw`w-[5em]`}
`;

export const SLangPopup = styled.div`
  ${tw`w-full my-1 py-3 rounded-xl flex flex-col gap-y-3 items-center border-solid border-2`}
  background-color: #8b8b8b;
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}
`;

export const SLangPopupBtn = styled.button`
  ${tw`w-[90%] py-1 rounded-xl cursor-pointer border-solid border`}
  border-color: transparent;

  :hover {
    border-color: black;
  }

  :disabled {
    ${tw`cursor-default`}
  }

  :disabled:hover {
    border-color: transparent;
  }
`;

export const SLangButton = styled.button`
  ${tw`w-full mb-1 p-2 outline-none cursor-pointer rounded-xl border-solid border-2`}
  background-color: #8b8b8b;
  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
  `}

  img {
    ${tw`w-[3em] min-h-[2em] max-h-[2em] border-solid border`}
    border-color: #000000;
  }
`;
