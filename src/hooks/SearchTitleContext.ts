import { useContext } from "react";
import { searchTitleContext } from "../context/SearchTitleContext";

export function useSearchTitle (){
    const context = useContext(searchTitleContext);
    if(!context){
        throw new Error('useSearchTitle debe usarse dentro de provider')
    }
    return context;
}