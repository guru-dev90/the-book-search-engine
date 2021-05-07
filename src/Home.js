import React from "react"

import styles from "./styles/Home.module.css"

import Logo from "./components/Logo"
import Form from "./components/Form"

function Home(props){    

    return(
        
        <div className={styles["homeContainer"]}>
            
                <Logo logosize="logoImgBig" />
                <h1 className={styles["rainbowTitle"]}>The Book Search Engine</h1>
            
            <div className={styles["formContainer"]}>
                <Form formsize={"formLarge"}/>
            </div>
        </div>
        
    )
}

export default Home

