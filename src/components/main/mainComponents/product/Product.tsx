import React, {FC, useEffect, useState} from "react";
import s from "./Product.module.css"
import {ProductHeader} from "./ProductHeader";
import {ProductRowContainer} from "./ProductRowContainer";
import {productAPI} from "../../../../apiBack/productApi";
import {IProductFull, TFilter} from "../../../../types/product";

type ProductType={
    filter:TFilter
}
export const Product:FC<ProductType> = ({filter}) => {
    const [products, setProducts] = useState<IProductFull[] | null>(null)

    const handlerChangedProduct=(oneProduct:IProductFull)=>{
        setProducts((state)=>{
            if(state){
                const newState= [...state]
                newState.forEach((value, index) => {
                    if(value.data.id === oneProduct.data.id){
                        newState[index] = {...oneProduct}
                    }
                })
                return newState
            }else return  null
        })
    }



    const productMap = products?.map((p) => <ProductRowContainer key={p.data.id} product={p} handlerChangedProduct={handlerChangedProduct}/>)


    useEffect(() => {
        async function fetchMyProductData() {
            try {
                const productData = await productAPI.getProductsByType(filter)
                setProducts(productData.data)
            } catch (e) {
                console.log(`fetchMyProductData error: ${e}`)
            }
        }

        fetchMyProductData()
    }, [filter])


    return<div className={s.productContainer}>
        <table className={s.tableStyle}>
            <caption>{filter}</caption>
            <thead className={s.tableHead}><ProductHeader/></thead>
            <tbody className={s.tableBody}>{productMap}</tbody>
        </table>
    </div>
}
