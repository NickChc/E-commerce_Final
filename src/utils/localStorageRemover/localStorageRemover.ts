export function localStorageRemover(values: string[]) {
  values.forEach((val) => {
    localStorage.removeItem(val);
  });
}
