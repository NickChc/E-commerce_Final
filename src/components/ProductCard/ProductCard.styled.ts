import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductCard = styled.div`
  ${tw`flex flex-col items-center justify-between py-3 rounded-xl aspect-[1/1.8] cursor-pointer `}

  :hover {
    @media (hover: hover) {
      ${tw`shadow-xl`}
      background-color: #d0d0d0;
    }
  }

  img {
    ${tw`w-[90%] aspect-square object-cover border-none rounded-lg `}
  }

  span {
    ${tw`w-[90%] `}
    img {
      ${tw`w-full aspect-square object-cover border-none rounded-lg  `}
    }
  }

  h3 {
    ${tw`break-words mb-3 `}
  }

  h2 {
    ${tw`  whitespace-nowrap `}
    color: #6e6e6e;
  }
`;

export const SCardInfo = styled.div`
  ${tw`w-[90%] h-[7rem] text-[.7rem] sm:text-[.8rem] xl:text-[.9rem] my-3 pl-3 gap-y-3 overflow-hidden flex flex-col justify-between `}

  p {
    ${tw`self-end pr-3 `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;

export const SCardButtonWrapper = styled.div`
  ${tw`w-[90%] mt-3 flex flex-col items-stretch gap-y-3`}
`;
