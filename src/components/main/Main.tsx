import React from "react";
import {Route, Routes} from "react-router-dom";
import {Product} from "./mainComponents/product/Product";
import {ProductsAdd} from "./mainComponents/productsAdd/ProductsAdd";
import {AddProduct} from "./mainComponents/addProduct/AddProduct";
import {AddProductContainer} from "./mainComponents/addProduct/addProductContainer";


export const Main = () => {
    return <div>
        <Routes>
            <Route path='/gold' element={<Product filter={"Gold"}/>}/>
            <Route path='/premium' element={<Product filter={"Premium"}/>}/>
            <Route path='/provisions' element={<Product filter={"Provisions"}/>}/>
            <Route path='/tech' element={<Product filter={"Technique"}/>}/>
            <Route path='/productsAdd' element={<ProductsAdd/>}/>
            <Route path='/addProduct' element={<AddProductContainer/>}/>
        </Routes>
    </div>

}
