import { SPaymentMessage } from "@src/components/PaymentMessage";
import { TPaymentStatus_Enum } from "@src/@types/general";
import { Good } from "@src/components/PaymentMessage/Good";
import { Cancel } from "@src/components/PaymentMessage/Cancel";

interface PaymentMessageProps {
  status: TPaymentStatus_Enum;
  closeModal: () => void;
}

export function PaymentMessage({ status, closeModal }: PaymentMessageProps) {
  return (
    <SPaymentMessage>
      {status === TPaymentStatus_Enum.GOOD ? (
        <Good closeModal={closeModal} />
      ) : status === TPaymentStatus_Enum.BAD ? (
        <>
          <h2>OOPS, SOMETHING WENT WRONG</h2>
          <p>ERROR MESSSAGE HERE</p>
        </>
      ) : status === TPaymentStatus_Enum.CANCEL ? (
        <Cancel closeModal={closeModal} />
      ) : null}
    </SPaymentMessage>
  );
}
