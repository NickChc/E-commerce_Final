export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch((err: any) => {
    console.log(err.message);
  });
}
