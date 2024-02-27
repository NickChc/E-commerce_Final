export function formatPhoneNumber(number: string) {
  let formattedNumber = "xxx xxx xxx";

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== " ") {
      formattedNumber = formattedNumber.replace("x", number[i]);
    }
  }

  return formattedNumber;
}
