import React from "react"
import {Link} from "react-router-dom"

import styles from "../styles/Header.module.css"

import Logo from "./Logo"
import Form from "./Form"

function Header() {

    return (
      <header className={styles["header"]}>
        <div className={styles["linkTitleContainer"]}>
          <Link to="/"><Logo logosize={"logoImgSmall"}/></Link>
          <h1 className={styles["rainbowTitle"]}>The Book Search Engine</h1>
        </div>
        <div className={styles["formContainer"]}>
          <Form formsize={"formSmall"}/>
        </div>
      </header>
    )
}

export default Header