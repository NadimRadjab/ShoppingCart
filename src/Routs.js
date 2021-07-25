import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import supplements from './supplements';
import App from './App';
import Shoping from './components/Shoping';

function Routs() {
    const [items, setItems] = useState(supplements);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <App />} />
                <Route exact path='/shoping/' render={() => <Shoping {...items[0]} />} />
            </Switch>

        </BrowserRouter>
    )

}


export default Routs;