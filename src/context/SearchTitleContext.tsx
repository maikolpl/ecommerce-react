import { createContext } from "react";

export type SearchTitleContextType = {
    searchTitle: string,
    setSearchTitle: (value: string) => void 
}

export const searchTitleContext = createContext<SearchTitleContextType | null>(null);







