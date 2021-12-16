import React from "react";
import s from "./Product.module.css"


export const ProductHeader = () => {
    return <tr className={s.container}>
        <th>Тип</th>
        <th>Название</th>
        <th>Фильтр</th>
        <th>Приоритет</th>
        <th>Размер</th>
        <th>Базовая цена</th>
        <th>Цена</th>
        <th>Тип скидки</th>
        <th></th>
    </tr>
}
