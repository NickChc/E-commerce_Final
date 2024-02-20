import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SearchedItemImgProps {
  showImg: boolean;
}

export const SSearchedItem = styled.div`
  ${tw`flex items-center w-full p-[.75rem] border-solid border border-x-0 border-t-0 gap-x-3 cursor-pointer opacity-[.75] relative `}
  ${(props) => css`
    border-color: ${props.theme.colors["primary"]};
  `}

  :hover {
    @media (hover: hover) {
      ${tw`opacity-[1] `}
    }
  }

  span {
    ${tw`absolute bottom-1 right-1 `}
  }
`;

export const SSearchedItemImg = styled.img<SearchedItemImgProps>`
  ${tw`w-[10%] aspect-square object-cover `}
  ${(props) => !props.showImg && tw`w-0 h-0 invisible`}
`;
