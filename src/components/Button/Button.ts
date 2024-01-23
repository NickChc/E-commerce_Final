import styled from "styled-components";
import tw from "twin.macro";

interface SButtonProps {
  variation?: string;
}

export const Button = styled.button<SButtonProps>`
  ${tw`p-1 px-2 sm:p-3 sm:px-4 m-1 rounded-xl font-semibold border-solid border cursor-pointer flex flex-row  items-center justify-between gap-x-3`}
  border-color: #1F51FF;
  background-color: ${(props) => props.variation === "active" && "#1F51FF"};
  color: ${(props) => props.variation === "active" && "#ffffff"};
  transition: all 0.2s;

  :hover {
    ${tw`rounded-lg`}
    color: ${(props) => props.variation !== "active" && "#1F51FF"};
  }

  div {
    ${tw`text-2xl h-[25px]`}
    color: ${(props) => (props.variation === "active" ? "#ffffff" : "#1F51FF")};
  }

  p {
    ${tw`hidden sm:block`}
  }
`;
