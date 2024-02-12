import { SHome } from "@src/views/Home";
import { useGetProducts } from "@src/hooks/useGetProducts";

export function Home() {
  const {} = useGetProducts();

  return (
    <SHome>
      <h1>HOME PAGE</h1>
    </SHome>
  );
}
