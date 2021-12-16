import {genRespType, instance} from "./api";
import {IProduct} from "../type/typeProductApi";
import {IProductFull} from "../types/product";
import {TechniqueDatType} from "../components/main/mainComponents/productsAdd/ProductsAdd";

export const productAPI = {
    getProductByID(id: string) {
        return instance.get<genRespType<IProduct>>(`/product?id=${id}`)
            .then(response => response.data)
    },
    getProductsByFilter(filter: string) {
        return instance.get<genRespType<IProduct[]>>(`/product/filter?filter=${filter}`)
            .then(response => response.data)
    },
    getProductsByType(filter: string) {
        return instance.get<genRespType<IProductFull[]>>(`/product/type?filter=${filter}`)
            .then(response => response.data)
    },
    getProductsByList(listProductsID: string[]) {
        return instance.post<genRespType<IProduct[]>>('/products', {
            listProductsId: listProductsID,
        }).then(response => response.data)
    },
    addProductsByTech(listProducts: TechniqueDatType[], type:string) {
        return instance.post<genRespType<any>>('/addProductsTech', {
            data: listProducts, type
        }).then(response => response.data)
    },
    changedProductById(data:IProductFull) {
        return instance.post<genRespType<any>>('/changeProduct', {
            data:data
        }).then(response => response.data)
    },

}
