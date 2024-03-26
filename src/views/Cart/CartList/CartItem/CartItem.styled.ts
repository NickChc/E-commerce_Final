import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CartItemProps {
  show: boolean;
}

export const SCartItem = styled.div<CartItemProps>`
  ${tw`w-full border-2 border-solid rounded-lg flex flex-row items-center sm:items-start lg:items-center justify-between relative transition-all duration-700 origin-top overflow-hidden w-full  `}
  ${(props) => css`
    ${!props.show
      ? tw`scale-[0] p-0 max-h-0 opacity-[0] m-0 `
      : tw`scale-[1] opacity-[1] p-2 max-h-[10rem] my-2 lg:mt-9 `}

    border-color: ${props.theme.colors["additional"]};
    background-color: ${props.theme.mode === "DARK" &&
    props.theme.colors["secondary_text"]};
  `}


  h3 {
    ${tw`text-[.75rem] sm:text-[.8rem] md:text-[1rem] xl:text-[1.2rem] mt-2 `}
    ${(props) => css`
      color: ${props.theme.mode === "DARK"
        ? props.theme.colors["secondary"]
        : props.theme.colors["primary"]};
    `}
  }

  img {
    ${tw`min-w-[65px] w-[8vw] rounded-lg aspect-square object-cover mr-1 `}
  }
`;

export const SImgWrapper = styled.div`
  ${tw`flex min-w-0 `}

  p {
    ${tw`text-[1rem] md:text-[1.4rem] absolute bottom-1 right-1 `}
    :active {
      ${(props) => css`
        color: ${props.theme.colors["saleClr"]};
      `}
    }
  }
`;

export const SCartItemInfo = styled.div`
  ${tw`flex flex-col items-start gap-y-1 m-1 truncate `}

  a {
    ${tw`text-[.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] mt-1 w-[100%] truncate  `}
    ${(props) => css`
      color: ${props.theme.mode === "DARK"
        ? props.theme.colors["secondary"]
        : props.theme.colors["primary"]};
    `}
  }
`;

export const SButtonsHolderSm = styled.div`
  ${tw`block sm:hidden  `}
`;

interface SSaleTagProps {
  isSale: boolean;
}

export const SSaleTag = styled.span<SSaleTagProps>`
  ${(props) => css`
    ${props.isSale && tw`line-through opacity-[.75] text-[.75em] `}
  `}
`;

export const SCountBtnHolder = styled.div`
  ${tw`flex items-stretch justify-center mr-3 text-[.7rem] sm:text-[.9rem] md:text-[1.2rem] lg:text-[1.4rem] border-solid border rounded-md `}

  ${(props) => css`
    border-color: ${props.theme.colors["additional"]};
    color: ${props.theme.mode === "DARK"
      ? props.theme.colors["secondary"]
      : props.theme.colors["primary"]};
  `}

  span {
    ${tw`w-[2.25em] px-[.6rem] sm:px-[.8rem] border-solid border border-y-0 flex items-center justify-center font-semibold `}
    ${(props) => css`
      border-color: ${props.theme.colors["additional"]};
      background-color: ${props.theme.colors["secondary"]};
      color: ${props.theme.colors["primary"]};
    `}
  }

  button {
    ${tw`p-[.5rem] sm:p-[.8rem] text-[.6rem] md:text-[.8rem] lg:text-[1rem] border-none first:border-r-0 first:rounded-l-md  first:rounded-[0] border-l-0 rounded-r-md cursor-pointer outline-none opacity-[.75] hover:opacity-[1] flex items-center justify-center  `}
    ${(props) => css`
      border-color: ${props.theme.colors["primary"]};
      background-color: ${props.theme.colors["secondary"]};
    `}

    :active {
      ${(props) => css`
        color: ${props.theme.colors["additional"]};
      `}
    }

    :disabled {
      ${tw`cursor-default opacity-[.25] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }
`;

export const SBtnsLg = styled.div`
  ${tw`hidden sm:block relative`}

  p {
    ${tw`absolute bottom-0 left-[105%] sm:left-[50%] sm:translate-x-[-50%] text-[.6rem] sm:top-[120%] sm:text-[.8rem] flex flex-row gap-x-1 cursor-pointer duration-75 whitespace-nowrap select-none `}
    ${(props) => css`
      color: ${props.theme.mode === "DARK"
        ? props.theme.colors["secondary"]
        : props.theme.colors["primary"]};
    `}

    div {
      ${tw`text-[.75rem] sm:text-[.9rem]  `}
    }

    @media (hover: hover) {
      :hover {
        ${(props) => css`
          color: ${props.theme.colors["saleClr"]};
        `}
      }
    }
  }
`;
