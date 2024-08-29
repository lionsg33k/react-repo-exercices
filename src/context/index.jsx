import { createContext } from "react";
import { MoviesJson } from "../constants";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {



    const all = { MoviesJson }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )


}



