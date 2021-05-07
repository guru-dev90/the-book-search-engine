import React, {useState} from "react"

import { Switch, Route, Link } from "react-router-dom"

import styles from "./styles/Result.module.css"

import Header from "./components/Header"
import ResultList from "./components/ResultList"
import DetailsPage from "./components/DetailsPage"
import ErrorPage from "./ErrorPage"
import Footer from "./components/Footer"

function Result(props){

    const [bookNameState, setBookNameState] = useState("")
    const [isError, setIsError] = useState(false)

    return(
        <>
            <Switch>
                <Route exact path="/results">
                    {isError ? <ErrorPage />
                             :
                                <>
                                    <Header />
                                    <p className={styles["breadCrumb"]}>
                                        <Link to="/">Home</Link>{" >> Results"}
                                    </p>
                                    <ResultList setIsError={setIsError} />
                                    <Footer />
                                </>
                    }
                </Route>
                <Route exact path="/results/:id">
                    {isError ? <ErrorPage />
                             :
                                <>
                                    <Header />
                                    <p className={styles["breadCrumb"]}>
                                        <Link to="/">Home</Link> {" >> "} <Link to="/results">Results</Link>{` >> ${bookNameState}`}
                                    </p>
                                    <DetailsPage setIsError={setIsError} setBookNameState={setBookNameState}/>
                                    <Footer />
                                </>
                    }
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </>
    )
}

export default Result