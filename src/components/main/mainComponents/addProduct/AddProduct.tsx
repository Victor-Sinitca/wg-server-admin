import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import {TDiscount, TFilter} from "../../../../types/product";
import {productAPI} from "../../../../apiBack/productApi";
import s from "./AddProductStyle.module.css"


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

export const AddProduct: FC<{}> = ({}) => {
    const initialTechValues: IInitialValues = {
        filterModel: {
            filter: {
                Gold: false,
                Premium: true,
                Provisions: false,
                Technique: false
            },
            priority: 0,
            span: 1,
            type: "Premium",
        },
        data: {
            name: "Какой-то продукт",
            description: "Тут будет описание",
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
                span_1x1: "1111111",
                span_2x1: "2222222",
            },
        }
    };
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
                            <option value="Premium">Premium</option>
                            <option value="Gold">Gold</option>
                            <option value="Provisions">Provisions</option>
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
                        <label htmlFor="firstName">Имя</label>
                        <Field as="textarea"  id="firstName" name="data.name" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">Описание</label>
                        <Field as="textarea" id="firstName" name="data.description" placeholder="First Name"/>
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
                        <label htmlFor="discountType">Тип скидки</label>
                        <Field as="select" id="discountType" name="data.price.actual.discountType">
                            <option value="percent">процент</option>
                            <option value="fixed">фиксировано</option>
                            <option value="">нет</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="firstName">картинка 1</label>
                        <Field as="textarea"  id="firstName" name="data.images.span_1x1" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="firstName">картинка 2</label>
                        <Field as="textarea"  id="firstName" name="data.images.span_2x1" placeholder="First Name"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </Form>
        </Formik>
    </div>
}
