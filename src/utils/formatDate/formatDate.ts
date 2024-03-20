export function formatDate(date: string | undefined) {
  if (!date) return;

  const formattedDate = date.split("T")[0].replace(/\-/g, "/");

  return formattedDate;
}
