import styled from "styled-components";
import tw from "twin.macro";

export const SImageSliderHolder = styled.div`
  ${tw`w-[98%] m-3 flex flex-col items-center z-10`}

  div {
    ${tw`w-full xs:h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[350px] outline-none`}

    img {
      ${tw`w-full h-full mx-[auto]  `}
      mask-image: linear-gradient(to right,
         rgba(0, 0, 0, .2) 0%,
         rgba(0, 0, 0, .75) 15%,
         rgba(0, 0, 0, 1) 25%,
         rgba(0, 0, 0, 1) 85%,
         rgba(0, 0, 0, .75) 90%,
         rgba(0, 0, 0, .2) 100%,
      );
      -webkit-mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.75) 15%,
        rgba(0, 0, 0, 1) 25%,
        rgba(0, 0, 0, 1) 85%,
        rgba(0, 0, 0, 0.75) 90%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }
`;
