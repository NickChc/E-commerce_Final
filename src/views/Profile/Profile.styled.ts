import styled, { css } from "styled-components";
import tw from "twin.macro";



export const SProfile = styled.div`
  ${tw`w-full sm:w-[80%] min-h-dvh flex flex-col items-center border-solid border border-y-0`}
  ${(props) => css`
    background-color: ${props.theme.colors["secondary"]};
    color: ${props.theme.colors["primary"]};
    border-color: ${props.theme.mode === "DARK" ? "#7b7b7b" : "transparent"};
  `}
`;