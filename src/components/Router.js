import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useParams } from "react-router-dom";
import HomeComponent from './HomeComponent'
import TablaMultiplicar from './TablaMultiplicar'
import NotFoundComponent from './NotFoundComponent'
import CollatzComponent from './CollatzComponent';
import MenuComponent from './MenuComponent';

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement () {
        let { minumero} = useParams();

        return (<TablaMultiplicar numero={minumero}/>)
    }

    function CollatzElement () {
        let {collatzNum} = useParams();

        return (<CollatzComponent numero={collatzNum}/>)
    }

    return (
        <BrowserRouter>
            <MenuComponent/>
            <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/collatz/:collatzNum' element={<CollatzElement/>}/>
                <Route path='/tabla/:minumero'element={<TablaMultiplicarElement/>}/>
                <Route path='*'element={<NotFoundComponent/>}/>
            </Routes>
        </BrowserRouter>
      
    )
  }
}
