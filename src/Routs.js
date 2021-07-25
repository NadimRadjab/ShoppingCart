import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';

function Routs() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <App />} />
            </Switch>

        </BrowserRouter>
    )

}


export default Routs;