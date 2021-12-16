import React from "react";
import {Route, Routes} from "react-router-dom";
import {Product} from "./mainComponents/product/Product";
import {ProductsAdd} from "./mainComponents/productsAdd/ProductsAdd";


export const Main = () => {
    return <div>
        <Routes>
            <Route path='/gold' element={<Product filter={"Gold"}/>}/>
            <Route path='/premium' element={<Product filter={"Premium"}/>}/>
            <Route path='/provisions' element={<Product filter={"Provisions"}/>}/>
            <Route path='/tech' element={<Product filter={"Technique"}/>}/>
            <Route path='/productsAdd' element={<ProductsAdd/>}/>
        </Routes>
    </div>

}
