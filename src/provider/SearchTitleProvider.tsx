import { searchTitleContext } from "../context/SearchTitleContext";

type ProviderProps = {
    children: React.ReactNode,
    searchTitle:string,
    setSearchTitle: (value: string) => void
}

export function SearchTiltleProvider ({
    children,
    searchTitle,
    setSearchTitle
}: ProviderProps){
    return(
        <searchTitleContext.Provider value = {{searchTitle,setSearchTitle}}>
            {children}
        </searchTitleContext.Provider>
    )
}