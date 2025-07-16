import { createContext } from "react";

export const Appcontext = createContext()

export const AppcontextProvider = (props) =>{

    const currency = import.meta.env.VITE_CURRENCY

    const value = {
       currency
    }
    return(
        <Appcontext.Provider value = {value}>
            {props.children}
            </Appcontext.Provider>
    )
}