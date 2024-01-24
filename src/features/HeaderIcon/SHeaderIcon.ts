import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SHeaderIcon = styled.div`
  ${tw`text-3xl sm:text-4xl cursor-pointer`}
  ${(props) => css`
    color: ${props.theme.colors["additional"]};
  `}
`;
