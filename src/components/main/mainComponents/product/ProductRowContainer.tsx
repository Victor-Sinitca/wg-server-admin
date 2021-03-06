import React, {ChangeEvent, ChangeEventHandler, FC, useEffect, useState} from "react";
import s from "./Product.module.css"
import {IProduct, IProductData, IProductFull, ITechniqueData, TDiscount, TFilter} from "../../../../types/product";
import {ProductRow} from "./ProductRow";
import {productAPI} from "../../../../apiBack/productApi";
import {TCountry, TTechnique, TTier} from "../../../../type/typeProductApi";

type GoldRowType = {
    product: IProductFull
    handlerChangedProduct: (oneProduct: IProductFull) => void
}

const handlerSetChangedState = (product: IProductFull, chProduct: IProductFull,) => {
    return JSON.stringify(product) !== JSON.stringify(chProduct)
}
export const ProductRowContainer: FC<GoldRowType> = ({product, handlerChangedProduct}) => {
    const [chProduct, setChProduct] = useState(product)
    const [isChanged, setIsChanged] = useState(false)
    const [hasBenHanged, setHasBenHanged] = useState(false)

    const handlerSetIsActive = () => {
        setIsChanged((value) => {
            return !value
        })
    }
    const changeSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setChProduct((state) => {
            return {...state, span: +e.target.value}
        })
    }
    const changeDiscount = (e: ChangeEvent<HTMLSelectElement>) => {
        setChProduct((state) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    price: {
                        ...state.data.price,
                        actual: {...state.data.price.actual, discountType: e.target.value as TDiscount}
                    }
                }
            }
        })
    }
    const changePriority = (e: ChangeEvent<HTMLInputElement>) => {
        setChProduct((state) => {
            return {...state, priority: +e.target.value}
        })
    }
    const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, description: e.target.value}}
        })
    }

    const changeNationTech = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, filter: {...state.data.filter, nation: e.target.value as TCountry}}}
        })
    }
    const changeTypeTech = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, filter: {...state.data.filter, type: e.target.value as TTechnique}}}
        })
    }
    const changeTierTech = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, filter: {...state.data.filter, tier: e.target.value as TTier}}}
        })
    }


    const changeImg1x1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, images: {...state.data.images, span_1x1: e.target.value}}}
        })
    }
    const changeImg1x2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChProduct((state) => {
            return {...state, data: {...state.data, images: {...state.data.images, span_2x1: e.target.value}}}
        })
    }
    const changeBasicPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setChProduct((state) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    price: {...state.data.price, basic: {...state.data.price.basic, cost: e.target.value}}
                }
            }
        })
    }
    const changeActualPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setChProduct((state) => {
            return {
                ...state,
                data: {
                    ...state.data,
                    price: {...state.data.price, actual: {...state.data.price.actual, cost: e.target.value}}
                }
            }
        })
    }
    const changeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChProduct((state) => {
            return {
                ...state,
                name: e.target.value,
                data: {...state.data, name: e.target.value},
            }
        })
    }
    const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterName = e.currentTarget.defaultValue as TFilter
        if (e.currentTarget.checked) {
            setChProduct((state) => {
                return {
                    ...state, filter: [...state.filter, filterName]
                }
            })
        } else {
            setChProduct((state) => {
                return {
                    ...state, filter: [...state.filter.filter((value => value !== filterName))]
                }
            })
        }
    }

    const nameChanged = chProduct.name !== product.name
    const priorityChanged = chProduct.priority !== product.priority
    const spanChanged = chProduct.span !== product.span
    const discountTypeChanged = chProduct.data.price.actual.discountType !== product.data.price.actual.discountType

    const basicCostChanged = chProduct.data.price.basic.cost !== product.data.price.basic.cost
    const costChanged = chProduct.data.price.actual.cost !== product.data.price.actual.cost
    const filterChanged = JSON.stringify(chProduct.filter) !== JSON.stringify(product.filter)
    const descriptionChanged = chProduct.data.description !== product.data.description
    const filterTechNationChanged = chProduct.data.filter?.nation !== product.data.filter?.nation
    const filterTechTypeChanged = chProduct.data.filter?.type !== product.data.filter?.type
    const filterTechTierChanged = chProduct.data.filter?.tier !== product.data.filter?.tier
    const span_1x1Changed = chProduct.data.images.span_1x1 !== product.data.images.span_1x1
    const span_2x1Changed = chProduct.data.images.span_2x1 !== product.data.images.span_2x1


    const sendNewProductData = async () => {
        const productData = await productAPI.changedProductById(chProduct)
        if (productData) {
            handlerChangedProduct(productData.data)
        }
    }

    const deleteProduct = async ()=>{
        await productAPI.deleteProductByID(chProduct.data.id)
    }

    useEffect(() => {
        setHasBenHanged(handlerSetChangedState(chProduct, product))
    }, [chProduct, product])

    return <>
        <ProductRow product={product} setChanged={handlerSetIsActive} isSelect={isChanged}
                    hasBenHanged={hasBenHanged} sendNewProductData={sendNewProductData}/>
        {isChanged &&
        <tr>
            <td colSpan={9}>
                <div className={s.changeProductContainer}>
                    <div className={s.firstContainer}>
                        <div className={`${s.nameProduct} ${nameChanged ? s.isSelect : ""}`}>
                            <label>????????????????:</label>
                            <textarea placeholder={"????????????????"} value={chProduct.name} onChange={changeName}/>
                            {hasBenHanged ? <button onClick={() => setChProduct(product)}>resetAll</button> : ""}
                        </div>
                        <div>
                            <div className={priorityChanged ? s.isSelect : ""}>
                                <label>??????????????????:</label>
                                <input type={"number"} min={0} max={100} value={chProduct.priority}
                                       onChange={changePriority}/>
                            </div>
                            <div className={spanChanged ? s.isSelect : ""}>
                                <label htmlFor="size">????????????:</label>
                                <select id="size" name="size" value={chProduct.span}
                                        onChange={changeSize}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className={discountTypeChanged ? s.isSelect : ""}>
                            <label htmlFor="typeDiscount">?????? ????????????</label>
                            <select id="typeDiscount" name="discountType"
                                    value={chProduct.data.price.actual.discountType}
                                    onChange={changeDiscount}>
                                <option value="percent">??????????????</option>
                                <option value="fixed">??????????????????????</option>
                                <option value="">??????</option>
                            </select>
                        </div>
                        <div className={basicCostChanged ? s.isSelect : ""}>
                            <label htmlFor="basicPrice">?????????????? ????????</label>
                            <input value={chProduct.data.price.basic.cost} onChange={changeBasicPrice}/>
                        </div>
                        <div className={costChanged ? s.isSelect : ""}>
                            <label htmlFor="actualPrice">???????????????????? ????????</label>
                            <input value={chProduct.data.price.actual.cost} onChange={changeActualPrice}/>
                        </div>
                    </div>
                    <div className={filterChanged ? s.isSelect : ""}>
                        <label htmlFor="actualPrice">????????????</label>
                        <div>
                            <div>
                                <label>??????????????</label>
                                <input type={"checkbox"} value={"Technique"}
                                       checked={chProduct.filter.includes("Technique")} onChange={changeFilter}/>
                            </div>
                            <div>
                                <label>??????????</label>
                                <input type={"checkbox"} value={"Gold"} checked={chProduct.filter.includes("Gold")}
                                       onChange={changeFilter}/>
                            </div>
                            <div>
                                <label>??????????????</label>
                                <input type={"checkbox"} value={"Premium"}
                                       checked={chProduct.filter.includes("Premium")} onChange={changeFilter}/>
                            </div>
                            <div>
                                <label>????????????????????</label>
                                <input type={"checkbox"} value={"Provisions"}
                                       checked={chProduct.filter.includes("Provisions")} onChange={changeFilter}/>
                            </div>
                        </div>
                    </div>
                    {chProduct.data.filter && <div className={s.filterTechContainer}>
                        <div className={filterTechNationChanged ? s.isSelect : ""}>
                            <label htmlFor="nation">??????????</label>
                            <select id="nation" name="nation"
                                    value={chProduct.data.filter.nation}
                                    onChange={changeNationTech}>
                                <option value="china">??????????</option>
                                <option value="czech">??????????</option>
                                <option value="france">??????????????</option>
                                <option value="germany">????????????????</option>
                                <option value="italy">????????????</option>
                                <option value="japan">????????????</option>
                                <option value="poland">????????????</option>
                                <option value="sweden">????????????</option>
                                <option value="uk">????????????</option>
                                <option value="usa">??????????????</option>
                                <option value="ussr">????????</option>
                            </select>
                        </div>
                        <div className={filterTechTypeChanged ? s.isSelect : ""}>
                            <label htmlFor="typeTech">??????</label>
                            <select id="typeTech" name="type"
                                    value={chProduct.data.filter.type}
                                    onChange={changeTypeTech}>
                                <option value="AT-SPG">????</option>
                                <option value="heavyTank">????</option>
                                <option value="lightTank">????</option>
                                <option value="mediumTank">????</option>
                                <option value="SPG">????????</option>
                            </select>
                        </div>
                        <div className={filterTechTierChanged ? s.isSelect : ""}>
                            <label id="tierTech">??????????????</label>
                            <select id="tierTech" name="tier"
                                    value={chProduct.data.filter.tier}
                                    onChange={changeTierTech}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>


                    </div>}
                    <div className={s.descriptionContainer}>
                        <div className={`${s.imgContainer} ${descriptionChanged ? s.isSelect : ""}`}>
                            <label>????????????????</label>
                            <textarea className={s.descriptionStyl} value={chProduct.data.description}
                                      onChange={changeDescription}/>
                        </div>
                        <div className={s.imgContainer}>
                            <label>?????????????????????? 1*1</label>
                            <textarea className={span_1x1Changed ? s.isSelect : ""}
                                      value={chProduct.data.images.span_1x1} onChange={changeImg1x1}/>
                            <label>?????????????????????? 1*2</label>
                            <textarea className={span_2x1Changed ? s.isSelect : ""}
                                      value={chProduct.data.images.span_2x1} onChange={changeImg1x2}/>
                        </div>
                    </div>
                    <div>
                        <button onClick={deleteProduct}>!!!!?????????????? ??????????????!!!</button>
                    </div>
                </div>
            </td>
        </tr>
        }
    </>
}

