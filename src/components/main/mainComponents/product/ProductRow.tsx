import React, {ChangeEvent, FC, useState} from "react";
import s from "./Product.module.css"
import {IProduct, IProductFull} from "../../../../types/product";

type GoldRowType = {
    product: IProductFull
    setChanged:()=>void
    isSelect:boolean
    hasBenHanged:boolean
    sendNewProductData:()=>Promise<any>
}

export const ProductRow: FC<GoldRowType> = ({product,setChanged,isSelect,
                                                hasBenHanged,sendNewProductData}) => {
    const filterMap = product.filter.map((f,index) => <div key={f}> {f} </div>)
    const activeStyle=isSelect? {
        backgroundColor:"#a3d4a3"
    }:{}

    return  <tr onClick={setChanged} style={activeStyle} className={`${s.rowContainer}`}>
            <td><span>{product.type}</span></td>
            <td><span>{product.name}</span></td>
            <td><span>{filterMap}</span></td>
            <td><span>{product.priority}</span></td>
            <td><span>{product.span}</span></td>
            <td><span>{product.data.price.basic.cost}</span></td>
            <td><span>{product.data.price.actual.cost}</span></td>
            <td><span>{product.data.price.actual.discountType}</span></td>
            <td>
                {hasBenHanged? <button onClick={sendNewProductData}>изменить</button> : "actual"}
            </td>
        </tr>
}
