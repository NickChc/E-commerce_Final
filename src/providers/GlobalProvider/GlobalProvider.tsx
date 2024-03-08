import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useGetSingleProduct } from "@src/hooks/useGetSingleproduct";
import { useAddToCart } from "@src/hooks/useAddToCart";
import { useGetWishlist } from "@src/hooks/useGetWishlist";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useRemoveFromWishlist } from "@src/hooks/useRemoveFromWishlist";
import { useAddToWishlist } from "@src/hooks/useAddToWishlist";
import { useGetCart } from "@src/hooks/useGetCart";
import { useRemoveCartItem } from "@src/hooks/useRemoveCartItem";
import { useGetCategories } from "@src/hooks/useGetCategories";
import { useGetFilteredProducts } from "@src/hooks/useGetFilteredProducts";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");
  const [minMax, setMinMax] = useState<number[]>([]);
  const [registering, setRegistering] = useState(false);
  const [authModal, setAuthModal] = useState<boolean>(false);
  const [popUpText, setPopUpText] = useState<string>("");

  const [categoryNavOpen, setCategoryNavOpen] = useState<boolean>(false);

  const { authStage } = useAuthProvider();

  const {
    products,
    productsLoading,
    fetchProducts,
    productsError,
    searchedProducts,
    setSearchedProducts,
    searching,
    totalProducts,
  } = useGetProducts();

  const { filteredProducts, gettingFiltered, getFilteredProducts, totalFiltered } = useGetFilteredProducts();
  const { product, productLoading, fetchSingleProduct } = useGetSingleProduct();
  const { getWishlist, gettingWishlist, wishlist } = useGetWishlist();
  const { addToCart, addingToCart } = useAddToCart();
  const { addToWishlist, addingToWishlist } = useAddToWishlist();
  const { removeFromWishlist, removingWishlistItem } = useRemoveFromWishlist();
  const { getCart, gettingCart, cartItems } = useGetCart();
  const { removeCartItem, removingCartItem } = useRemoveCartItem();
  const { getCategories, categories, gettingCategories } = useGetCategories();

  const Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [Location.pathname]);

  async function toggleWishlist(productId: string) {
    try {
      const isLiked = wishlist?.find(
        (product) => product.product_id === productId
      );
      if (isLiked) {
        await removeFromWishlist(isLiked.id);
      } else {
        await addToWishlist(productId);
      }
      getWishlist();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // fetchProducts("", false);
    getWishlist();
    getCart();
    getCategories();
  }, [authStage]);

  return (
    <GlobalContext.Provider
      value={{
        filteredProducts,
        getFilteredProducts,
        gettingFiltered,
        totalFiltered,
        fetchProducts,
        products,
        searchedProducts,
        setSearchedProducts,
        productsLoading,
        productsError,
        product,
        productLoading,
        fetchSingleProduct,
        totalProducts,
        searchKeyWord,
        minMax,
        setMinMax,
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
        addingToWishlist,
        getCart,
        gettingCart,
        cartItems,
        removeCartItem,
        removingCartItem,
        categoryNavOpen,
        setCategoryNavOpen,
        getCategories,
        gettingCategories,
        categories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
