import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import supplements from './supplements';
import App from './App';
import Shoping from './components/Shoping';

function Routs() {
    const [items, setItems] = useState(supplements);

    const findSupplement = id => {
        return items.find(supplement => {
            return supplement.id === id
        });
    }


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <App />} />
                <Route
                    exact path='/shoping/:id'
                    render={(routeProps) => <Shoping items={items} stuff={findSupplement(routeProps.match.params.id)} />} />
            </Switch>

        </BrowserRouter>
    )

}


export default Routs;