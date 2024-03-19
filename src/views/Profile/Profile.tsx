import { useState } from "react";
import { useIntl } from "react-intl";
import { SProfile, SUserLayer } from "@src/views/Profile";
import { TChangeableUserData } from "@src/@types/requestTypes";
import { UserInfo } from "@src/views/Profile/UserInfo";
import { UpdateForm } from "@src/views/Profile/UpdateForm";
import { ProductSlider } from "@src/components/ProductSlider";
import { TLocale_Enum } from "@src/providers/LocaleProvider";
import { useLocaleProvider } from "@src/providers/LocaleProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TProduct } from "@src/@types/general";
import { OrderList } from "@src/views/Profile/OrderList";

export function Profile() {
  const { userData } = useAuthProvider();

  const { wishlist } = useGlobalProvider();

  const { locale } = useLocaleProvider();

  const { formatMessage } = useIntl();

  const wishlistProducts: TProduct[] = wishlist?.map(
    (item) => item.likedProduct
  );

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
      {wishlistProducts.length < 1 && (
        <h1>
          {locale === TLocale_Enum.EN
            ? "YOUR WISHLIST IS EMPTY"
            : locale === TLocale_Enum.KA
            ? "სასურველების სია ცარიელია"
            : null}
        </h1>
      )}
      <ProductSlider
        products={wishlistProducts}
        title={formatMessage({ id: "wishlist", defaultMessage: "_WISHLIST_" })}
      />
    </SProfile>
  );
}
