import {createContext} from "react"

const Context = createContext()

function StateProvider(props){

    const {booksArray,setBooksArray} = props.values
 
    return(
        <Context.Provider value={{booksArray,setBooksArray}}>
            {props.children}
        </Context.Provider>
    )
}

export {StateProvider, Context}