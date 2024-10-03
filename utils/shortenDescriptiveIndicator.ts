export function shortenDescriptiveIndicator(
     value: string | number,
     maxLength: number
) {
     const asString = value.toString();
     if (asString.length > maxLength) {
          return asString.slice(0, maxLength) + "...";
     }
     return asString;
}
