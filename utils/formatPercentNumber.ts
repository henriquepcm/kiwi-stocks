export function formatPercentNumber(value: string | number) {
     const asNumber = Number(value);
     return Intl.NumberFormat("en-US", {
          style: "percent",
          maximumFractionDigits: 2,
     }).format(asNumber);
}
