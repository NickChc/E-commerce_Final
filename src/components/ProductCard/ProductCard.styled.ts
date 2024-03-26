import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProductCard = styled.div`
  ${tw`sm:max-w-[15rem] flex flex-col items-center justify-between py-3 rounded-xl cursor-pointer duration-150 `}

  :hover {
    @media (hover: hover) {
      ${tw`shadow-md`}
      ${(props) => css`
        background-color: ${props.theme.colors["secondary_text"]};
        color: ${props.theme.colors["secondary"]};
      `}
    }
  }

  button,
  button span {
    ${tw`overflow-hidden `}
    ${(props) => css`
      color: ${props.theme.colors["primary"]};
    `}
  }

  span {
    ${tw`w-[90%]`}
    img {
      ${tw`w-full aspect-square object-cover border-none rounded-lg  `}
    }
  }
`;

export const SCardInfo = styled.div`
  ${tw`w-[90%] h-[6.5rem] text-[.6rem] sm:text-[.8rem] xl:text-[.9rem] my-3 pl-3 overflow-hidden flex flex-col justify-between `}

  h3 {
    ${tw`h-[3.2rem] min-h-[3.2rem] overflow-hidden text-[.75rem] xs:text-[.9rem] sm:text-[1rem] md:text-[.9rem] xl:text-[1rem]  `}
  }

  h2 {
    ${tw`whitespace-nowrap text-[.8rem] xs:text-[1rem] xl:text-[1.2rem] `}
  }

  p {
    ${tw`self-end pr-3 text-[.7rem] sm:text-[.75rem] lg:text-[1rem] whitespace-nowrap `}
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
