import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SWishlistSliderWrapper = styled.div`
  ${tw`border-solid border border-x-0 border-b-0 w-full z-10 `}
  ${(props) => css`
    border-color: ${props.theme.colors["secondary_text"]};
  `}
`;
