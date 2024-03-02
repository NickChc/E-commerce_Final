import styled, { css } from "styled-components";
import tw from "twin.macro";

interface CartItemProps {
  show: boolean;
}

export const SCartItem = styled.div<CartItemProps>`
  ${tw`border border-solid rounded-lg flex flex-row items-center sm:items-start lg:items-center justify-between relative shadow-lg overflow-hidden transition-all duration-700 origin-top max-h-[15rem] p-1 scale-100 opacity-[1] my-2  `}
  ${(props) => css`
    ${!props.show && tw`scale-[0] p-0 max-h-0 opacity-[0] my-0 `}

    border-color: ${props.theme.colors["additional"]};
  `}

  a {
    ${tw`text-[.8rem] sm:text-[1rem] md:text-[1.2rem] xl:text-[1.8rem] mt-1  `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}

    :hover {
      color: #000;
    }
  }

  h3 {
    ${tw`text-[.75rem] sm:text-[.8rem] md:text-[1rem] xl:text-[1.2rem] truncate `}
  }

  img {
    ${tw`min-w-[65px] w-[8vw] rounded-lg aspect-square object-cover mr-1 `}
  }
`;

export const SImgWrapper = styled.div`
  ${tw`flex `}

  p {
    ${tw`text-[1rem] md:text-[1.4rem] absolute bottom-1  right-1 `}
  }
`;

export const SCartItemInfo = styled.div`
  ${tw`flex flex-col items-start gap-y-1 mt-1 `}

  div {
    ${tw`block sm:hidden flex`}
  }
`;

interface SSaleTagProps {
  isSale: boolean;
}

export const SSaleTag = styled.span<SSaleTagProps>`
  ${(props) => css`
    ${props.isSale && tw`line-through opacity-[.75]`}
  `}
`;

export const SCountBtnHolder = styled.div`
  ${tw`flex items-stretch justify-center mr-3 text-[.7rem] sm:text-[.9rem] md:text-[1.2rem] lg:text-[1.4rem] border-solid border rounded-md `}

  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  span {
    ${tw`w-[2.25em] px-[.6rem] sm:px-[.8rem] border-solid border border-y-0 flex items-center justify-center font-semibold `}
    ${(props) => css`
      border-color: ${props.theme.colors["primary"]};
      background-color: #fff;
    `}
  }

  button {
    ${tw`p-[.5rem] sm:p-[.8rem] text-[.6rem] md:text-[.8rem] lg:text-[1rem] border-none first:border-r-0 first:rounded-l-md  first:rounded-[0] border-l-0 rounded-r-md cursor-pointer outline-none opacity-[.8] hover:opacity-[1] flex items-center justify-center  `}
    ${(props) => css`
      border-color: ${props.theme.colors["primary"]};
    `}

    :disabled {
      ${tw`cursor-default `}
    }
  }
`;

export const SBtnsLg = styled.div`
  ${tw`hidden sm:block relative `}

  p {
    ${tw`absolute bottom-0 left-[105%] sm:left-[50%] sm:translate-x-[-50%] text-[.6rem] sm:top-[120%] sm:text-[.8rem] flex flex-row gap-x-1 cursor-pointer duration-75 whitespace-nowrap select-none   `}

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
