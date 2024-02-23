import { useState } from "react";
import { publicAxios } from "@src/utils/publicAxios";


export function useAddToCart() {
    const [loading, setLoading] = useState<boolean>(false);

    async function addToCart(id: string) {
        try {
            setLoading(true);
            await publicAxios.post(`/cart`, { product_id: id });
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { addToCart, addingToCart: loading };
}