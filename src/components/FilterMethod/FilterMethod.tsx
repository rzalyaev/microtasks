import React, {useState} from "react";
import styles from "./FilterMethod.module.css";
import {FilterType} from "../../App";
import {Button} from "../Button/Button";

export type MoneyType = {
    banknote: string,
    value: number,
    number: string
}

export const FilterMethod = () => {
    const [money, setMoney] = useState<MoneyType[]>([
        { banknote: 'dollar', value: 100, number: ' a1234567890' },
        { banknote: 'dollar', value: 50, number: ' z1234567890' },
        { banknote: 'ruble', value: 100, number: ' w1234567890' },
        { banknote: 'dollar', value: 100, number: ' e1234567890' },
        { banknote: 'dollar', value: 50, number: ' c1234567890' },
        { banknote: 'ruble', value: 100, number: ' r1234567890' },
        { banknote: 'dollar', value: 50, number: ' x1234567890' },
        { banknote: 'ruble', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
    }

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName);
    }

    return(
        <div className={styles.filterMethod}>
            <h1>Filter Method</h1>
            <table>
                <caption>Money</caption>
                {currentMoney.map((item, index) => {
                    return(
                        <tr key={index}>
                            <th scope="col">{item.banknote}</th>
                            <th scope="col">{item.value}</th>
                            <th scope="col">{item.number}</th>
                        </tr>
                    )
                })}
            </table>
            <Button name={'all'} onClickFilterHandler={onClickFilterHandler}/>
            <Button name={'dollar'} onClickFilterHandler={onClickFilterHandler}/>
            <Button name={'ruble'} onClickFilterHandler={onClickFilterHandler}/>
        </div>
    )
}