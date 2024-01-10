import styled from "styled-components";
import tw from "twin.macro";
import { YoutubeIcon } from "@src/assets/icons/YoutubeIcon";

export const YoutubeLogo = styled(YoutubeIcon)`
  ${tw`text-[24px] h-[1em] w-[1em] sm:h-[30px] sm:w-[30px] m-1 p-1 rounded-sm`}
  background-color: #1f51ff;
  color: #ffffff;
`;
