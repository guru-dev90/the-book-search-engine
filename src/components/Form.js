import React, {useState, useContext, useRef} from "react"
import {Context} from "../context/Context"
import axios from "axios"
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from "../styles/Form.module.css"


function Form({formsize}){

    const {setBooksArray} = useContext(Context)

    const [queryString, setQueryString] = useState('')
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState(false)


    const history = useHistory()
    const inputTextReference = useRef()
    
    async function queryGoogleBooksApi(){

        const googleBooksEndpoint = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryString}`

        try{
            const getResponse = await axios.get(googleBooksEndpoint) 
            const result = getResponse.data.items

            setBooksArray(result)
            inputTextReference.current.value = ""
            history.push("/results")
        }catch(e){
            console.log(e)
        }
    }

    function handleSubmit(event){

        event.preventDefault()

        queryGoogleBooksApi()
    }

    function handleChange(event){

        const {value } = event.target
        setQueryString(value)
    }

    const magnifyingGlassIcon = <FontAwesomeIcon icon={faSearch} />
    const inputTextSize = ( formsize === "formLarge" ) ? "inputSearchBookBig" : "inputSearchBookSmall"
    const buttonSize = ( formsize === "formLarge" ) ? "buttonSearchBookBig" : "buttonSearchBookSmall"
    const formStyles = ( formsize === "formSmall" ) ? {marginTop: "0.8rem"} : null 

    return(
        <form style={formStyles} onSubmit={handleSubmit} className={styles["form"]}>
            <input 
                style={ isFocused ? { outline: "none" } : null }
                ref={inputTextReference}
                type="text" 
                placeholder="Search a book" 
                onChange={handleChange} 
                onFocus={ () => setIsFocused(true) }
                onBlur={ () => setIsFocused(false) }
                className={`${styles["inputSearchBook:focus"]} ${styles[inputTextSize]}`}
            />

            <button 
                style={ isHovered ? { background: "linear-gradient(to bottom, #bc3315 5%, #d0451b 100%)" } : null }
                onMouseEnter={ () => setIsHovered(true)} 
                onMouseLeave={ () => setIsHovered(false)} 
                className={` ${styles[buttonSize]}`}>
                    {magnifyingGlassIcon}
            </button>
        </form>
    )
}

Form.propTypes = {
    formsize: PropTypes.oneOf(["formLarge", "formSmall"]).isRequired
}

export default Form