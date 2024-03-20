import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductCard = styled.div`
  ${tw`sm:max-w-[15rem] flex flex-col items-center justify-between py-3 rounded-xl aspect-[1/1.8] cursor-pointer `}

  :hover {
    @media (hover: hover) {
      ${tw`shadow-xl`}
      background-color: #d0d0d0;
    }
  }

  span {
    ${tw`w-[90%]`}
    img {
      ${tw`w-full aspect-square object-cover border-none rounded-lg  `}
    }
  }

  h3 {
    ${tw`break-words mb-3 text-[.9rem] xl:text-[1.2rem] `}
  }

  h2 {
    ${tw`  whitespace-nowrap `}
    ${(props) => css`
      color: ${props.theme.colors["secondary_text"]};
    `}
  }
`;

export const SCardInfo = styled.div`
  ${tw`w-[90%] h-[8rem] text-[.6rem] sm:text-[.8rem] xl:text-[.9rem] my-3 pl-3 gap-y-3 overflow-hidden flex flex-col justify-between `}

  h3 {
    ${tw`h-[2.7rem] overflow-hidden text-[.9rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem]  `}
  }

  p {
    ${tw`self-end pr-3 text-[.7rem] sm:text-[1rem] `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }
`;

export const SCardButtonWrapper = styled.div`
  ${tw`w-[90%] mt-3 flex flex-col items-stretch gap-y-3`}

  span {
    ${tw`w-fit `}
  }
`;
