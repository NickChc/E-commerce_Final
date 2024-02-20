import styled, { css } from "styled-components";
import tw from "twin.macro";
import { YoutubeIcon } from "@src/assets/icons";

export const YoutubeLogo = styled(YoutubeIcon)`
  ${tw`text-[24px] h-[1em] w-[1em] sm:h-[30px] sm:w-[30px] m-1 p-1 rounded-sm`}
  color: #ffffff;
  ${(props) => css`
    background-color: ${props.theme.colors["additional"]};
  `}
`;
