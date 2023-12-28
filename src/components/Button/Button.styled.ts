import styled from "styled-components";
import tw from "twin.macro";


interface SButtonProps {
    variation?: string;
}

export const SButton = styled.button<SButtonProps>`
  ${tw`p-3 m-1 rounded-xl border-solid border cursor-pointer font-bold `}
  border-color: #1F51FF;
  background-color: ${(props) => props.variation === "active" && "#1F51FF"};
  color: ${(props) => props.variation === "active" && "#ffffff"};
`;
