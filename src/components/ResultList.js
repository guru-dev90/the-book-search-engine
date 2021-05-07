import React, {useContext, useState, useEffect} from "react"
import {get} from 'lodash';

import {useHistory} from "react-router-dom"

import {Context} from "../context/Context"

import styles from "../styles/ResultList.module.css"

import DefaultImage from "../images/default-image.jpg"

function ResultList({setIsError}){

    const [isHovered, setIsHovered] = useState(false) 
    const {booksArray} = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        
        if( booksArray === null ) {
            setIsError(true) // mostra pagina 404
        }

    }, [] )

    if( booksArray === null ) return null // innesca useEffect al prossimo render
    
    const listOfBooks = booksArray.map( (book) => {

        const imageSrc = get(book, "volumeInfo.imageLinks.smallThumbnail", DefaultImage)
        const title = get(book, "volumeInfo.title", "Unknow Title" ) 
        const authorsArray = get(book, "volumeInfo.authors", ["Unknow Author"]) 
        const authors = authorsArray.length > 1 ? `Authors: ${authorsArray.join(", ")}` : `Author: ${authorsArray[0]}`
        
        return(
            
                
            <div key={book.id} className={styles["bookDetailsDiv"]}>
                <div className={styles["imageContainer"]}>
                    <img src={imageSrc} alt={title} className={styles["bookImage"]} />
                </div>
                <h3 className={styles["bookTitle"]}>{title}</h3>
                <p className={styles["bookAuthors"]}>{authors}</p>
                <div className={styles["buttonContainer"]}>
                    <button 
                         style={ isHovered ? { background: "linear-gradient(to bottom, #bc3315 5%, #d0451b 100%)" } : null }
                        onMouseEnter={ () => setIsHovered(true) } 
                        onMouseLeave={ () => setIsHovered(false) } 
                        onClick={ () => history.push(`/results/${book.id}`) } 
                        className={ styles["bookDetailsButton"] }
                    >
                        See more
                    </button>
                </div>
            </div>
            
        )
    })

    return(
        <div className={styles["listOfBooksContainer"]}>
            {listOfBooks}
        </div>
    )
}

export default ResultList