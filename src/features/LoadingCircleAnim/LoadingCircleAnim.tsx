import {
  SloadingCircleAnim,
  SLoadingIcon,
} from "@src/features/LoadingCircleAnim";
import { LoadingCircle } from "@src/assets/icons";

interface LoadingCircleProps {
  hasColor?: boolean;
  isSpan?: boolean;
}

export function LoadingCircleAnim({ hasColor, isSpan }: LoadingCircleProps) {
  if (isSpan) {
    return (
      <SloadingCircleAnim hasColor={hasColor}>
        <LoadingCircle />
      </SloadingCircleAnim>
    );
  } else {
    return <SLoadingIcon />;
  }
}
