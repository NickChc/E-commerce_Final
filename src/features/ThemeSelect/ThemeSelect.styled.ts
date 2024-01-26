import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SThemeSelect = styled.span`
  ${tw`w-[32px] min-h-[32px] cursor-pointer transition-all duration-200 flex items-center justify-center text-[24px]`}
  color: #8b8b8b;

  :hover {
    ${(props) => css`
      color: ${props.theme.colors["additional"]};
    `}
  }
`;


