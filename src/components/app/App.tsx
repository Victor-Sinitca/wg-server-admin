import React from 'react'
import './App.css'

import {productApiWG} from "../../apiWG/productApiWG";
import {productAPI} from "../../apiBack/productApi";
import {TCountry, TTechnique, TTier} from "../../type/typeProductApi";
import {NavPanel} from "../navPanel/NavPanel";
import {Header} from "../header/Header";
import {Main} from "../main/Main";





function App() {


    return (
        <div className="app">
            <Header/>
            <NavPanel/>
            <Main/>
        </div>
    )
}

export default App
