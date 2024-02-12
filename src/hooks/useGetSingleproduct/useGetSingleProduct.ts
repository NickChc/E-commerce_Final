import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { publicAxios } from "@src/utils/publicAxios";
import { TProduct } from "@src/@types/requestTypes";

export function useGetSingleProduct() {
  const [product, setProduct] = useState<TProduct>();
  const [loading, setloading] = useState<boolean>(false);

  const { productId } = useParams();

  async function fetchSingleProduct(productId: string) {
    try {
      setloading(true);
      const response = await publicAxios.get(`/product/${productId}`);
      setProduct(response?.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    if (productId) {
      fetchSingleProduct(productId);
    }
  }, []);

  return { product, productLoading: loading };
}
