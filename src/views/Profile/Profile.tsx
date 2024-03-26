import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { SProfile, SUserLayer } from "@src/views/Profile";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { UserInfo } from "@src/views/Profile/UserInfo";
import { UpdateForm } from "@src/views/Profile/UpdateForm";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { OrderList } from "@src/views/Profile/OrderList";
import { ProductSlider } from "@src/components/ProductSlider";
import { useWishlistProvider } from "@src/providers/WishlistProvider";


export function Profile() {
  const { userData } = useAuthProvider();
  const { wishlistItems } = useWishlistProvider();
  const { formatMessage } = useIntl()

  const wishlistProducts = wishlistItems?.map((item) => item.likedProduct);

  const [currentEdit, setCurrentEdit] = useState<
    keyof TChangeableUserData | undefined
  >();

  const [formValues, setFormValues] = useState<TChangeableUserData>({
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    email: userData?.email || "",
  });

  const [updateFail, setUpdateFail] = useState<string>("");

  // TOGGLES EDITING MODE OF USER FORM
  function toggleEdit(value: keyof TChangeableUserData) {
    if (currentEdit === value) {
      setCurrentEdit(undefined);
    } else {
      setCurrentEdit(value);
    }
    // RESET FORM ON CLOSE
    setFormValues({
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      email: userData?.email || "",
    });
    setUpdateFail("");
  }

  return (
    <SProfile>
      <SUserLayer>
        {/* THIS COMPONENT SHOWS USERS AVATAR AND INFO */}
        <UserInfo currentEdit={currentEdit as string} toggleEdit={toggleEdit} />

        {/* FORM FOR UPDATING USER INFO */}
        <UpdateForm
          formValues={formValues}
          setFormValues={setFormValues}
          updateFail={updateFail}
          setUpdateFail={setUpdateFail}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
        />
      </SUserLayer>
      {/* LIST OF ORDERS */}
      <OrderList />
      <hr />
      {/* WISHLIST */}
        <ProductSlider
          products={wishlistProducts}
          title={formatMessage({
            id: "wishlist",
            defaultMessage: "_WISHLIST_",
          })}
        />
    </SProfile>
  );
}
