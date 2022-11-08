import { useContext } from "react";
import CategoriasContext from "../context/CategoriasProviders";

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias