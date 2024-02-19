import styled, { css } from "styled-components";
import tw from "twin.macro";

interface SButtonProps {
  variation?: string;
}

export const Button = styled.button<SButtonProps>`
  ${tw`p-1 px-2 sm:p-3 sm:px-4 m-1 rounded-xl font-semibold border-solid border cursor-pointer flex flex-row  items-center justify-between gap-x-3 transition-all duration-200`}

  ${(props) => css`
    ${props.variation === "active" && tw`rounded-md`}
    border-color: ${props.theme.colors["additional"]};
  `}
    background-color: ${(props) =>
    props.variation === "active" && props.theme.colors["additional"]};
  color: ${(props) =>
    props.variation === "active" && props.theme.colors["secondary"]};

  :hover {
    ${tw`rounded-md`}
    color: ${(props) =>
      props.variation !== "active" && props.theme.colors["additional"]};
  }

  div {
    ${tw`text-2xl h-[25px]`}
    color: ${(props) =>
      props.variation === "active"
        ? "#ffffff"
        : props.theme.colors["additional"]};
  }

  p {
    ${tw`hidden sm:block`}
  }
`;
