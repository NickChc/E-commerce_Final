import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCartWishlistItem = styled.div`
  ${tw`flex items-center justify-between w-[80%] border-solid border border-x-0 border-b-0 last:border-b p-1 `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_text"]};
  `}

  div {
    ${tw`flex items-center gap-x-3 `}

    a {
      ${tw`text-[1.2rem] `}
      ${(props) => css`
        color: ${props.theme.colors["primary"]};
      `}
    }
  }

  img {
    ${tw`w-[40px] aspect-square object-cover `}
  }

  span {
    ${tw`text-[1.4rem] cursor-pointer transition-colors duration-75 `}

    @media (hover: hover) {
      :hover {
        ${(props) => css`
          color: ${props.theme.colors["myGreen"]};
        `}
      }
    }
  }
`;
