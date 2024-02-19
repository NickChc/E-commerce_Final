import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SProduct = styled.div`
  ${tw`min-h-dvh w-full sm:w-[80%] flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    color: ${props.theme.colors["primary"]};
    background-color: ${props.theme.colors["secondary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;
