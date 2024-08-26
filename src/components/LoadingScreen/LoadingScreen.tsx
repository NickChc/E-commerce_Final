import { SLoadingScreen } from "@src/components/LoadingScreen";
import { LoadingCircleAnim } from "@src/features/LoadingCircleAnim";

export function LoadingScreen() {
  return (
    <SLoadingScreen>
      <header></header>
      <main>
        <h1>
          LOADING <LoadingCircleAnim />
        </h1>
      </main>
    </SLoadingScreen>
  );
}
