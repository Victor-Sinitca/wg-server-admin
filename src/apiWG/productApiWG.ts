import {genRespType, instance} from "./apiWG";




export type ProductType = {
    tank_id: string,
    name: string,
    short_name:string,
    description: string,
    nation: string,
    type: string,
    tier: number,
    is_wheeled:boolean,
    images: {
        big_icon: string,
        contour_icon: string,
        small_icon: string
    },
}


type DataType={
    [key:string]:DataType1
}
type DataType1={
    [key:string]:ProductType
}

export const productApiWG = {
    getProductsTech(limit:string, page:string){
        return instance.get<DataType>(`https://api.worldoftanks.ru/wot/encyclopedia/vehicles/?application_id=7e52e1d7641fd33d809e4104e369ecf2&limit=${limit}&fields=description%2C+tank_id%2Cname%2Cnation%2Ctype%2Ctier%2Cimages%2Cis_wheeled%2Cshort_name&page_no=${page}`, {},)
            .then(response => response.data.data)
    },
    getProductsProv(limit:string, page:string){
        return instance.get<any>(`https://api.worldoftanks.ru/wot/encyclopedia/provisions/?application_id=7e52e1d7641fd33d809e4104e369ecf2&limit=${limit}&page_no=${page}`, {},)
            .then(response => response.data.data)
    },
}
