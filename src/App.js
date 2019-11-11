import React, {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome} from 'react-icons/fa'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Default from './pages/Default';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <> {/* navbar, sidebar, cart, footer */}
                <Switch>
                    <Route exact path="/"
                        component={HomePage}/>
                    <Route exact path="/about"
                        component={AboutPage}/>
                    <Route exact path="/contact"
                        component={ContactPage}/>
                    <Route exact path="/products"
                        component={ProductsPage}/>
                    <Route exact path="/cart"
                        component={CartPage}/>
                    <Route exact path="/product/:id"
                        component={SingleProductPage}/>
                    <Route component={Default}/>

                </Switch>
            </>
        );
    }
}
export default App;
