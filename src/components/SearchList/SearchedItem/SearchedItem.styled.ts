import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SearchedItemImgProps {
  showImg: boolean;
}

export const SSearchedItem = styled.div`
  ${tw`flex flex-col justify-center w-full py-[.55rem] pr-3 border-solid border border-x-0 border-t-0 gap-x-3 cursor-pointer opacity-[.75] text-[.75rem] md:text-[1rem] last:border-none last:pb-3 relative`}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  :hover {
    @media (hover: hover) {
      ${tw`opacity-[1] `}
      ${(props) => css`
        background-color: ${props.theme.colors["secondary"]};
      `}
    }
  }

  span {
    ${tw`w-full flex justify-end absolute bottom-1 right-2 `}
    ${(props) => css`
      color: ${props.theme.colors["saleClr"]};
    `}
  }

  div {
    ${tw`flex flex-row items-center gap-x-3 overflow-hidden `}
  }

  h2 {
    ${tw`text-[.9rem] md:text-[1.3rem] xl:text-[1.8rem] `}
  }
`;

export const SSearchedItemImg = styled.img<SearchedItemImgProps>`
  ${tw`  aspect-square object-cover border-solid border border-black `}
  ${(props) =>
    props.showImg ? tw`min-w-[50px] w-[5vw]` : tw`w-0 h-0 invisible`}
`;
