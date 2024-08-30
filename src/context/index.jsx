import { createContext, useContext, useEffect, useState } from "react";
import { MoviesJson } from "../constants";

// * hada  howa sac  li fih  les variables  li m7taj
export const Mycontext = createContext()

//* hada howa  livreyur  li ghadi iwasal lina sl3a li  f sac
export const MyProvider = ({ children }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {

        const fetchCountriesDate = async () => {
            let response = await fetch("https://restcountries.com/v3.1/all")
            let data = await response.json()
            setCountries(data)
        }

        fetchCountriesDate()
    }, [])


    const all = { MoviesJson, countries }

    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}

export const UseAppContext = () => useContext(Mycontext)



