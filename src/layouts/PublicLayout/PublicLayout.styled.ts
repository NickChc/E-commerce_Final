import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SPublicLayout = styled.div`
    ${tw`w-full min-h-screen flex flex-col items-center justify-between relative`}
    ${(props) => css`
        background-color: ${props.theme.mode === "DARK" && "#2b2b2b"};
    `}

`;
