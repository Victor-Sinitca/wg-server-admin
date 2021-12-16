import React, {FC, useState} from "react";
import {AddProduct} from "./AddProduct";

type TypeProps={

}
export const AddProductContainer:FC<TypeProps>=({})=>{
    const [isTech, setIsTech]= useState(true)
    return <div>
        <button onClick={()=>setIsTech((state)=> !state)}>выбрать технику</button>
        <AddProduct isTech={isTech}/>
    </div>
}