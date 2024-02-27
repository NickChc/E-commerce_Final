import styled, { css } from "styled-components";
import tw from "twin.macro";
import { LoadingCircle } from "@src/assets/icons";

export const SLoadingCircleAnim = styled(LoadingCircle)`
    ${tw`animate-spin `}
    ${(props) => css`
        color: ${props.theme.colors["additional"]};
    `}
`;
