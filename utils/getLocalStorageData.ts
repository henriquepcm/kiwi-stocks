export function getLocalStorageData<T>(key: string): T {
     // To avoid errors between localStorage and Next.js
     if (typeof window !== "undefined") {
          const fallback = key === "stocks" ? "[]" : "{}";
          const data = JSON.parse(localStorage.getItem(key) ?? fallback);
          return data;
     }
     return key === "stocks" ? ([] as T) : ({} as T);
}
