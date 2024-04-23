import { SLoadingScreen } from "@src/components/LoadingScreen";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function LoadingScreen() {
  return (
    <SLoadingScreen>
      <h1>
        LOADING <LoadingCircleAnim />
      </h1>
    </SLoadingScreen>
  );
}
