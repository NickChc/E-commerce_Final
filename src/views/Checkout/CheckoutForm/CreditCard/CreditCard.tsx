import { SCreditCardHolder } from "@src/views/Checkout/CheckoutForm/CreditCard";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface CreditCardProps {
  number: string;
  expiry: string;
  name: string;
  cvc: string;
  focused: string;
}

export function CreditCard({
  number,
  expiry,
  name,
  cvc,
  focused,
}: CreditCardProps) {
  return (
    <SCreditCardHolder>
      <Cards
        number={number}
        expiry={expiry}
        name={name}
        cvc={cvc}
        focused={focused as Focused | undefined}
      />
    </SCreditCardHolder>
  );
}
