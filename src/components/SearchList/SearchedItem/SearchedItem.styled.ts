import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SSearchedItem = styled.div`
  ${tw`flex flex-col justify-center w-full py-[.55rem] pr-3 pl-1 border-solid border border-x-0 border-t-0 gap-x-3 cursor-pointer text-[.75rem] md:text-[1rem] last:border-none last:pb-3 relative first:rounded-t-lg last:rounded-b-lg`}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  :hover {
    @media (hover: hover) {
      ${(props) => css`
        background-color: ${props.theme.colors["secondary"]};
      `}
    }
  }

  img {
    ${tw`min-w-[50px] w-[5vw] aspect-square object-cover border-solid border border-black rounded-lg `}
  }

  div {
    ${tw`flex flex-row items-center gap-x-3 overflow-hidden `}
  }

  h2 {
    ${tw`text-[.9rem] md:text-[1.3rem] xl:text-[1.8rem] `}
  }
`;

export const SSaleTag = styled.span`
  ${tw`w-full flex justify-end absolute bottom-1 right-2 `}
  ${(props) => css`
    color: ${props.theme.colors["saleClr"]};
  `}
`;
