import React, {useState} from "react"
import { StateProvider } from "./context/Context"
import { Switch, Route } from "react-router-dom"

import styles from "./styles/App.module.css"

import Home from "./Home"
import Result from "./Result"
import ErrorPage from "./ErrorPage"


function App() {

  const [booksArray, setBooksArray] = useState(null)

  //console.log(booksArray)

  return (
    <StateProvider values={{booksArray,setBooksArray}}>
      <Switch>
        <Route exact path="/">
          <div className={styles["home-container"]}>
            <Home />
          </div>
        </Route>
        <Route path="/results">
          <Result />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </StateProvider>
  );
}

export default App
