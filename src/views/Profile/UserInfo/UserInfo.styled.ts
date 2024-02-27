import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SUserInfo = styled.div`
  ${tw`w-[80%] md:w-[80%] lg:w-[60%] lg:pl-0 flex flex-col items-center sm:flex-row sm:items-start gap-x-3  `}

  button {
    ${tw`p-[.6rem] text-[.7rem] md:text-[.9rem] lg:text-[1rem] border-solid border rounded-xl cursor-pointer duration-100 `}
    ${(props) => css`
      border-color: ${props.theme.colors["additional"]};
      color: ${props.theme.colors["additional"]};
    `}

    @media (hover: hover) {
      :hover {
        ${(props) => css`
          border-color: ${props.theme.colors["saleClr"]};
          color: ${props.theme.colors["saleClr"]};
        `}
      }
    }
  }
`;

export const SImgWrapper = styled.div`
  ${tw`w-[65%] min-w-[120px] md:w-[50%] flex flex-col items-stretch gap-y-3 `}

  img {
    ${tw`w-full aspect-square  `}
  }

  button {
    ${tw`hidden sm:block `}
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
  ${tw`absolute right-1 top-[50%] translate-y-[-50%] text-[1rem] md:text-[1.2rem] cursor-pointer `}
  ${(props) => css`
    color: ${props.editing
      ? props.theme.colors["additional"]
      : props.theme.colors["primary"]};
  `}
`;

export const STextHolder = styled.div`
  ${tw`w-full md:w-[60%] flex flex-col items-stretch lg:items-center gap-y-1 md:mt-3 xl:mt-0 text-start `}

  h2 {
    ${tw`w-full border-solid border border-black border-x-0 border-t-0 relative pr-6 whitespace-nowrap text-[.75rem] sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] truncate py-2 `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}
  }
`;

export const SThemeSelectHolder = styled.span`
  ${tw`rounded-[50%] absolute right-1 top-[50%] translate-y-[-50%] text-[.5rem] `}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary_background"]};
  `}

  button {
    ${tw`py-[.2rem] `}

    :active {
      ${(props) => css`
        color: ${props.theme.colors["saleClr"]};
        border-color: ${props.theme.colors["saleClr"]};
      `}
    }
  }
`;
