import React from "react"
import PropTypes from 'prop-types'

import styles from "../styles/Logo.module.css"

import logoImage from "../images/book-stack-page-logo.svg"

function Logo({logosize}){
    return(
        <img src={logoImage} alt="The books search engine logo" className={styles[logosize]}/>
    )
}

Logo.propTypes = {
    logosize: PropTypes.oneOf(["logoImgBig", "logoImgSmall"]).isRequired
}

export default Logo