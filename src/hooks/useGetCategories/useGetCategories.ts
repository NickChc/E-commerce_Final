import { useState } from "react";
import { TCategory } from "@src/@types/general";
import { publicAxios } from "@src/utils/publicAxios";

export function useGetCategories() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loading, setLoading] = useState(false);

  async function getCategories() {
    try {
      setLoading(true);
      const response = await publicAxios.get("/product-category");
      setCategories(response?.data);
      console.log(response?.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { getCategories, categories, gettingCategories: loading };
}
