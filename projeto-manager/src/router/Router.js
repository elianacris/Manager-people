import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import Header from '../layout/Header/Header'
const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/list'>
                    <DetailsPage />
                </Route>

            </Switch>
        </BrowserRouter >

    )
}
export default Router;