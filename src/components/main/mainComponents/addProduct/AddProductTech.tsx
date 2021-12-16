import React, {FC} from "react";
import {Form, Formik, Field} from "formik";
import {IProductData, TDiscount, TFilter} from "../../../../types/product";
import {productAPI} from "../../../../apiBack/productApi";
import {TCountry, TTechnique, TTier} from "../../../../type/typeProductApi";
import s from "./AddProductStyle.module.css";

type AddProductType = {
    isTech: boolean
}

interface IFilter {
    filter: {
        Technique: boolean,
        Premium: boolean,
        Gold: boolean,
        Provisions: boolean,
    },
    priority: number,
    span: number;
    type: TFilter | "",
}

interface IProduct {
    name: string,
    description: string,
    price: {
        basic: {
            cost: string,
        },
        actual: {
            cost: string,
            discountType: TDiscount,
        },
    },
    images: {
        span_1x1: string,
        span_2x1: string,
    },
}


interface IInitialValues {
    filterModel: IFilter,
    data: IProduct
}


interface IInitialTechValues {
    filterModel: IFilter,
    data: IProduct & {
        filter: {
            nation: TCountry;
            type: TTechnique;
            tier: TTier;
        }
    };
}

const country = [
    'china',
    'czech',
    'france',
    'germany',
    'italy',
    'japan',
    'poland',
    'sweden',
    'uk',
    'usa',
    'ussr',]

const tier = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const technique = ['AT-SPG', 'heavyTank', 'lightTank', 'mediumTank', 'SPG'];


export const AddProductTech: FC<{}> = ({}) => {
    const initialTechValues: IInitialTechValues = {
        filterModel: {
            filter: {
                Gold: false,
                Premium: false,
                Provisions: false,
                Technique: true
            },
            priority: 0,
            span: 1,
            type: "Technique",
        },
        data: {
            name: "Какая-то техника",
            description: "Тут будет описание",
            filter: {
                nation: "ussr",
                tier: "1",
                type: "lightTank",
            },
            price: {
                basic: {
                    cost: "10",
                },
                actual: {
                    cost: "10",
                    discountType: "",
                },
            },
            images: {
                span_1x1: "111",
                span_2x1: "111",
            },
        }
    };
    const nationSelect = country.map((c) => <option key={c} value={c}>{c}</option>)
    const tierSelect = tier.map((c) => <option key={c} value={c}>{c}</option>)
    const techniqueSelect = technique.map((c) => <option key={c} value={c}>{c}</option>)

    return <div>
        <Formik
            initialValues={initialTechValues}
            onSubmit={async (values, actions) => {
                const data = {...values} as any
                const filter = []
                for (let i in values.filterModel.filter) {
                    if (values.filterModel.filter.hasOwnProperty(i)
                        // @ts-ignore
                        && values.filterModel.filter[i]) {
                        filter.push(i)
                    }
                }
                // @ts-ignore
                data.filterModel.filter = filter
                console.log(data)
                await productAPI.addOneProduct(data)
                actions.resetForm()
                actions.setSubmitting(false);
            }}
        >
            <Form className={s.formStyle}>
                <div>
                    <div>
                        <label htmlFor="type">Тип продукта</label>
                        <Field as="select" id="type" name="filterModel.type">
                            <option value="Technique">Technique</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="priority">Приоритет</label>
                        <Field as="input" type="number" id="priority" name="filterModel.priority"/>
                    </div>
                    <div>
                        <label htmlFor="span">Размер</label>
                        <Field as="select" id="span" name="filterModel.span">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="Gold">Gold</label>
                        <Field type="checkbox" id="Gold" name="filterModel.filter.Gold"/>
                        <label htmlFor="Premium">Premium</label>
                        <Field type="checkbox" id="Premium" name="filterModel.filter.Premium"/>
                        <label htmlFor="Provisions">Provisions</label>
                        <Field type="checkbox" id="Provisions" name="filterModel.filter.Provisions"/>
                        <label htmlFor="Technique">Technique</label>
                        <Field type="checkbox" id="Technique" name="filterModel.filter.Technique"/>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="nation">Страна</label>
                        <Field as="select" id="nation" name="data.filter.nation">
                            {nationSelect}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="tier">Уровень</label>
                        <Field as="select" id="tier" name="data.filter.tier">
                            {tierSelect}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="type">Тип</label>
                        <Field as="select" id="type" name="data.filter.type">
                            {techniqueSelect}
                        </Field>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="firstName">Имя</label>
                        <Field id="firstName" name="data.name" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Описание</label>
                        <Field id="firstName" name="data.description" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Базовая цена</label>
                        <Field id="firstName" name="data.price.basic.cost" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Актульная цена</label>
                        <Field id="firstName" name="data.price.actual.cost" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Тип скидки</label>
                        <Field id="firstName" name="data.price.actual.discountType" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">картинка 1</label>
                        <Field id="firstName" name="data.images.span_1x1" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">картинка 2</label>
                        <Field id="firstName" name="data.images.span_2x1" placeholder="First Name"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </Form>
        </Formik>
    </div>
}
