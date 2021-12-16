export type TCountry =
    | 'china'
    | 'czech'
    | 'france'
    | 'germany'
    | 'italy'
    | 'japan'
    | 'poland'
    | 'sweden'
    | 'uk'
    | 'usa'
    | 'ussr';

export type TTechnique = 'AT-SPG' | 'heavyTank' | 'lightTank' | 'mediumTank' | 'SPG';

export type TTier = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

export type TFilter = 'Technique' | 'Premium' | 'Gold' | 'Provisions';

export interface IProductData {
    id: string;
    name: string;
    description: string;
    price: {
        basic: {
            cost: string;
            currency: string;
        };
        actual: {
            cost: string;
            currency: string;
        };
    };
    images: {
        span_1x1: string;
        span_2x1: string;
    };
}

export interface ITechniqueData extends IProductData {
    filter: {
        country: TCountry;
        type: TTechnique;
        tier: TTier;

    };
}

export interface IProduct {
    type: TFilter;
    span: number;
    data: ITechniqueData | IProductData;
}
