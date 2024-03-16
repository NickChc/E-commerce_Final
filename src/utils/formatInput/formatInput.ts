export function formatInput(input: string, repalceWith: string, gap: number) {
  let formattedInput = "";
  let cleanedInput = input.replace(/\D/g, "");

  for (let i = 0; i < cleanedInput.length; i += gap) {
    formattedInput += cleanedInput.slice(i, i + gap) + repalceWith;
  }

  return formattedInput.trim();
}
