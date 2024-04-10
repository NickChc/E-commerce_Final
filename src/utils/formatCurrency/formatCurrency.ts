export function formatCurrency(amount: number) {
  const CURRENCY_FORMATTER = new Intl.NumberFormat("ka-GE", {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return CURRENCY_FORMATTER.format(amount).replace(/,/g, " ");
}
