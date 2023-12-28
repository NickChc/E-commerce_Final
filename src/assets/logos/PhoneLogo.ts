import styled from "styled-components";
import tw from "twin.macro";
import { PhoneIcon } from "@src/assets/icons/phone";

export const PhoneLogo = styled(PhoneIcon)`
  ${tw`font-[24px] h-[30px] w-[30px] m-1 p-1 rounded-sm`}
  background-color: #1f51ff;
  color: #ffffff;
`;
