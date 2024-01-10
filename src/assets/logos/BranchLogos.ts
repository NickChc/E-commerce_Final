import styled from "styled-components";
import tw from "twin.macro";
import { BranchIcon } from "@src/assets/icons/BranchIcon";

export const BranchLogos = styled(BranchIcon)`
  ${tw`text-[24px] h-[1em] w-[1em] sm:h-[30px] sm:w-[30px] m-1 p-1 rounded-sm`}
  background-color: #1f51ff;
  color: #ffffff;
`;
