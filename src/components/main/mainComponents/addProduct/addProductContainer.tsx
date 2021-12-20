import React, {FC, useState} from "react";
import {AddProduct} from "./AddProduct";
import {AddProductTech} from "./AddProductTech";

type TypeProps={

}
export const AddProductContainer:FC<TypeProps>=({})=>{
    const [isTech, setIsTech]= useState(true)
    return <div>
        <button onClick={()=>setIsTech((state)=> !state)}>Сменить тип продукта</button>
        {isTech?<AddProduct /> :<AddProductTech/> }
    </div>
}
