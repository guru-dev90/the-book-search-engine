import React, {useState, useEffect, useContext} from "react"
import {Context} from "../context/Context"
import {useParams} from "react-router-dom"
import {get} from "lodash"

import styles from "../styles/DetailsPage.module.css"

import DefaultImage from "../images/default-image.jpg"


function DetailsPage({setIsError, setBookNameState}){

    const {id} = useParams()
    const {booksArray} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)
    
    useEffect(() => {
        
        if( booksArray === null ) {
            setIsError(true) // mostra pagina 404
        }

    }, [] )

    if( booksArray === null ) return null // innesca useEffect al prossimo rerender

    const chosenBook = booksArray.find( book => book.id === id )

    //console.log(chosenBook)

    const imageSrc = get(chosenBook, 'volumeInfo.imageLinks.smallThumbnail', DefaultImage)
    const title = get(chosenBook, "volumeInfo.title", "Unknow Title") 
    const authorsArray = get(chosenBook, "volumeInfo.authors", ["Unknow Author"]) 
    const authors = authorsArray.length > 1 ? authorsArray.join(", ") : authorsArray[0]

    const categoriesArray = get(chosenBook, "volumeInfo.categories", [])
    const categories = categoriesArray.length > 1 ? categoriesArray.join(", ") : categoriesArray[0]
    const language = get(chosenBook, "volumeInfo.language", "Unspecified")
    const pageCount = get(chosenBook, "volumeInfo.pageCount", "Unspecified")
    const publishedDate = get(chosenBook, "volumeInfo.publishedDate", "Unspecified")
    const publisher = get(chosenBook, "volumeInfo.publisher", "Unspecified")

    const description = get(chosenBook, "volumeInfo.description", "No description available")
    const moreInfoLink = get(chosenBook, "volumeInfo.infoLink", "")

    const authorsTitle = authorsArray.length > 1 ? "Authors" : "Author"
    let displayButton = "block"
    setBookNameState(title)

    if( moreInfoLink === "" ){
        displayButton = "none"
    }

    return(
        <div className={styles["detailsDiv"]}>
            <h2>{title}</h2>
            <div className={styles["imageContainer"]}>
                <img src={imageSrc} alt={title} className={styles["bookImage"]} />
            </div>
            <div className={styles["gridDisplayer"]}>
                <div>
                    <h3>{authorsTitle}</h3>
                    <p>{authors}</p>
                </div>
                <div>
                    <h3>Categories</h3>
                    <p>{categories ? categories : "Unspecified"}</p>
                </div>
                <div>
                    <h3>Language</h3>
                    <p>{language}</p>
                </div>
                <div>
                    <h3>Page Count</h3>
                    <p>{pageCount}</p>
                </div>
                <div>
                    <h3>Published Date</h3>
                    <p>{publishedDate}</p>
                </div>
                <div>
                    <h3>Publisher</h3>
                    <p>{publisher}</p>
                </div>
                <div>
                    <h3>Description:</h3>
                    <p className={styles["description"]}>{description}</p>
                </div>
            </div>
            <div className={styles["buttonContainer"]}>
                <button 
                    style={ isHovered ? { 
                                            background: "linear-gradient(to bottom, #bc3315 5%, #d0451b 100%)",
                                            display: displayButton
                                        } 
                                      : { display: displayButton }
                    }
                    className={styles["moreInfoButton"]} 
                    onMouseEnter={ () => setIsHovered(true) } 
                    onMouseLeave={ () => setIsHovered(false) }>
                        <a style={{display: displayButton}} className={styles["moreInfoLink"]} href={moreInfoLink}>Get more info</a>
                </button>
            </div>
        </div>
    )
}

export default DetailsPage