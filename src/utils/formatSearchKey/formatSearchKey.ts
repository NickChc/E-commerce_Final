

export function formatSearchKey(key: string) {
  if (key === "") return key;

  let result = "";

  result += key[0].toUpperCase();
  result += key.slice(1);

  return result;
}