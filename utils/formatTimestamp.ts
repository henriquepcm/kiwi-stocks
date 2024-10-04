export function formatTimestamp(value: string): string {
     const date = new Date(value);

     const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "UTC",
          hour12: false,
     };

     const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
     );

     const formattedDateWithUTC = `${formattedDate} UTC`;

     return formattedDateWithUTC;
}
