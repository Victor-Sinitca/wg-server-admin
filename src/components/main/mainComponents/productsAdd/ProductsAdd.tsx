import React from "react";
import {productApiWG} from "../../../../apiWG/productApiWG";
import {productAPI} from "../../../../apiBack/productApi";
import {TCountry, TTechnique, TTier} from "../../../../type/typeProductApi";

function getRandom(max: number) {
    return Math.floor(Math.random() * max * 100) / 100;
}

function getRandom1(max: number) {
    return Math.floor(Math.random() * max);
}

type PriseType = {
    value: string,
    currency: string,
    discount: string,
}

interface ProductDataType {
    name: string;
    description: string;
    price: {
        basic: {
            cost: string;
            currency: string;
        };
        actual: {
            cost: string;
            discountType: "" | "percent" | "fixedValue"
        };
    };
    images: {
        span_1x1: string;
        span_2x1: string;
    };
}


export interface TechniqueDatType extends ProductDataType {
    filter: {
        nation: TCountry;
        type: TTechnique;
        tier: TTier;
        is_wheeled: boolean
    };
}
export const ProductsAdd =()=>{
    const addTechProductWG = async () => {
        const data = await productApiWG.getProductsTech("100", "4")
        const dataArray = []
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                const product = data[i]
                const price = {
                    value: "" + getRandom(100),
                    currency: "$",
                } as PriseType
                const newProduct = {
                    name: product.name,
                    description: product.description,
                    price: {
                        basic: {
                            cost: price.value,
                            currency: "$",
                        },
                        actual: {
                            cost: price.value,
                            discountType: "",
                        },
                    },
                    filter: {
                        nation: product.nation,
                        type: product.type,
                        tier: "" + product.tier,
                        is_wheeled: product.is_wheeled
                    },
                    images: {
                        span_1x1: product.images.big_icon,
                        span_2x1: product.images.big_icon,
                    }
                } as TechniqueDatType
                dataArray.push(newProduct)
            }
        }
        const addDataTech = await productAPI.addProductsByTech(dataArray,"Technique")
        console.log(addDataTech)
    }


    const addProvisionsProductWG = async () => {
        const data = await productApiWG.getProductsProv("100", "4")
        const array=[]
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                array.push(data[i])
            }}
        const filterDataArray =[] as Array<any>
        function rec(data:Array<any>) {
            if(data[0])filterDataArray.push(data[0])
            const newData= data.filter((value, index) => (index>1 && data[0].name !== value.name))
            if(newData && newData.length>0){
                rec(newData)
            }
        }
        rec(array)

        const dataArray = [] as Array<any>
        filterDataArray.forEach(product => {
            const price = {
                value: "" + getRandom(20),
                currency: "$",
            } as PriseType
            const newProduct = {
                name: product.name,
                description: product.description,
                price: {
                    basic: {
                        cost: price.value,
                        currency: "$",
                    },
                    actual: {
                        cost: price.value,
                        discountType: "",
                    },
                },
                images: {
                    span_1x1: product.image,
                    span_2x1: product.image,
                }
            } as TechniqueDatType
            dataArray.push(newProduct)
        })

       /* for (let i in data) {
            if (data.hasOwnProperty(i)) {
                const product = data[i]
                const price = {
                    value: "" + getRandom(20),
                    currency: "$",
                } as PriseType
                const newProduct = {
                    name: product.name,
                    description: product.description,
                    price: {
                        basic: {
                            cost: price.value,
                            currency: "$",
                        },
                        actual: {
                            cost: price.value,
                            discountType: "",
                        },
                    },
                    images: {
                        span_1x1: product.image,
                        span_2x1: product.image,
                    }
                } as TechniqueDatType
                dataArray.push(newProduct)
            }
        }*/



        const addDataTech = await productAPI.addProductsByTech(dataArray,"Provisions")
        /*console.log(dataArray)
        console.log(filterDataArray)*/
    }
    return  <div className="container">
        <div className="product" style={{padding:40}}>
            <button onClick={addTechProductWG}>addTechToDB</button>
        </div>
        <div className="product" style={{padding:40}}>
            <button onClick={addProvisionsProductWG}>addProvisionsToDB</button>
        </div>
    </div>
}
