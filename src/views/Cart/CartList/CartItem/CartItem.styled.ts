import styled, { css } from "styled-components";
import tw from "twin.macro";


export const SCartItem = styled.div`
  ${tw`border border-solid rounded-lg flex flex-row items-center justify-between p-1 relative  `}
  ${(props) => css`
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
    ${tw`min-w-[60px] w-[8vw] rounded-lg aspect-square object-cover mr-1 `}
  }
`;

export const SImgWrapper = styled.div`
  ${tw`flex `}

  p {
    ${tw`text-[1rem] absolute bottom-1  right-1 `}
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
  ${tw`flex items-stretch justify-center mr-3 text-[.7rem] sm:text-[.9rem] md:text-[1.2rem] lg:text-[1.4rem] `}

  span {
    ${tw`w-[2.25em] px-[.6rem] sm:px-[.8rem] border-solid border flex items-center justify-center font-semibold `}
    ${(props) => css`
      border-color: ${props.theme.colors["primary"]};
      background-color: #fff;
    `}
  }

  button {
    ${tw`p-[.5rem] sm:p-[.8rem] text-[.6rem] md:text-[.8rem] lg:text-[1rem] border border-solid first:border-r-0 first:rounded-l-md first:border first:rounded-[0] border-l-0 rounded-r-md cursor-pointer outline-none opacity-[.8] hover:opacity-[1] flex items-center justify-center  `}
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
    ${tw`absolute bottom-0 left-[105%] text-[.6rem] sm:top-[120%] sm:text-[.8rem] flex flex-row gap-x-1 cursor-pointer duration-75 whitespace-nowrap `}

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
