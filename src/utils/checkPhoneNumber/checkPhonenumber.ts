

// THIS FUNCTION CHECKS IF NUMBER CONSISTS OF NUMBERS AND SPACES ONLY OR JUST NUMBERS

export function checkPhoneNumber(phoneNumber: string) {
  const spacelessNumber = phoneNumber.replace(/ /gi, "");

  if (isNaN(Number(spacelessNumber))) {
    return false;
  } else {
    return true;
  }
}
