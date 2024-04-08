import { useState } from "react";
import { TCategory } from "@src/@types/general";
import { publicAxios } from "@src/utils/publicAxios";
import { CACHED_CATEGORIES } from "@src/config/localStorageCache";

export function useGetCategories() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loading, setLoading] = useState(false);

  async function getCategories() {
    try {
      setLoading(true);
      const cachedCategories = localStorage.getItem(CACHED_CATEGORIES);
      if (cachedCategories) {
        const localCategories = JSON.parse(cachedCategories);
        setCategories(localCategories);
      } else {
        const response = await publicAxios.get("/product-category");
        setCategories(response?.data);
        localStorage.setItem(CACHED_CATEGORIES, JSON.stringify(response?.data));
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { getCategories, categories, gettingCategories: loading };
}
