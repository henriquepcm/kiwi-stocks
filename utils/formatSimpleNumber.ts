export function formatSimpleNumber(value: string | number) {
     const asNumber = Number(value);
     return Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 2,
     }).format(asNumber);
}
