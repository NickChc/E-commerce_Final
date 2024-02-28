import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useGetWishlist } from "@src/hooks/useGetWishlist";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useToggleWishlist } from "@src/hooks/useToggleWishlist";
import { useRemoveFromWishlist } from "@src/hooks/useRemoveFromWishlist";
import { useAddToWishlist } from "@src/hooks/useAddToWishlist";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [registering, setRegistering] = useState(false);
  const [authModal, setAuthModal] = useState<boolean>(false);
  const [popUpText, setPopUpText] = useState<string>("");

  const {
    products,
    productsLoading,
    fetchProducts,
    productsError,
    searchedProducts,
    setSearchedProducts,
    searching,
  } = useGetProducts();

  const { authStage } = useAuthProvider();

  const { product, productLoading, fetchSingleProduct } = useGetSingleProduct();
  const { getWishlist, gettingWishlist, wishlist } = useGetWishlist();
  const { addToCart, addingToCart } = useAddToCart();
  // const { toggleWishlist, togglingWishlist, checkLiked } = useToggleWishlist();

  // TEMPO
    const { addToWishlist, addingToWishlist } = useAddToWishlist();

    const { removeFromWishlist, removingWishlistItem } = useRemoveFromWishlist()

  // TEMPO

  const Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [Location.pathname]);


  async function toggleWishlist(productId: string) {
    try {
      const isLiked = wishlist?.find((product) => product.product_id === productId)
      if (isLiked) {
        await removeFromWishlist(isLiked.id)
      } else {
        await addToWishlist(productId);
      }
      getWishlist();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  

  useEffect(() => {
    fetchProducts("");
    getWishlist();
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
        fetchProducts,
        products,
        searchedProducts,
        setSearchedProducts,
        productsLoading,
        productsError,
        product,
        productLoading,
        fetchSingleProduct,
        searchKeyWord,
        setSearchKeyWord,
        searching,
        registering,
        setRegistering,
        authModal,
        setAuthModal,
        popUpText,
        setPopUpText,
        getWishlist,
        gettingWishlist,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        removingWishlistItem,
        addToCart,
        addingToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
