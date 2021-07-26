import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import supplements from './supplements';
import NavBar from './components/NavBar';
import App from './App';
import Shoping from './components/Shoping';

function Routs() {
    const [supplement, setSupplement] = useState(supplements);

    const findSupplement = id => {
        return supplement.find(suppm => {
            return suppm.id === id
        });
    }


    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <App />} />
                <Route
                    exact path='/shoping/:id'
                    render={(routeProps) => <Shoping supplement={supplement} findSupplement={findSupplement(routeProps.match.params.id)} />} />
            </Switch>

        </BrowserRouter>
    )

}


export default Routs;