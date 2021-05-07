import React, {useState} from "react"
import {Link} from "react-router-dom"

import errorImage from "./images/errorImage.jpg"

import styles from "./styles/ErrorPage.module.css"

function ErrorPage(props){

    const [isHovered, setIsHovered] = useState(false) 

    return(
        
        <div className={styles["errorPageGlobalContainer"]}>
            <div className={styles["errorPageContainer"]}>
            
                <div className={styles["imageContainer"]}>
                    <img 
                        src={errorImage} 
                        alt={"404: Page not found"}
                        className={styles["errImg"]}
                    >
                    </img>
                </div>

                <div className={styles["buttonContainer"]}>
                    <Link 
                        to="/" 
                        style={ isHovered ? { background: "linear-gradient(to bottom, #bc3315 5%, #d0451b 100%)" } : null }
                        onMouseEnter={ () => setIsHovered(true) } 
                        onMouseLeave={ () => setIsHovered(false) }
                        className={styles["backToHomePageButton"]}
                    >
                        Back to Home Page
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default ErrorPage