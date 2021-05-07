import React from "react"

import styles from "../styles/Footer.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(){

    const linkedInIcon = <FontAwesomeIcon style={{color: "white", fontSize: "25px"}} icon={faLinkedin} />

    return(
        <div className={styles["footerContainer"]}>
            <div className={styles["text"]}>
                <p>Copyright © 2021 Umberto Giacomini</p>
                <div className={styles["iconContainer"]}>
                    <a className={styles["linkedinLink"]} href="https://it.linkedin.com/in/umberto-giacomini-86758590">{linkedInIcon}</a>
                </div>
            </div>
        </div>
    )
}

export default Footer