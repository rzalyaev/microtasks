import React from "react";
import styles from "./FilterMethod.module.css";
import {FilterType, MoneyType} from "../../App";
import {Button} from "../Button/Button";

type MoneyPropsType = {
    money: MoneyType[]
    onClickFilterHandler: (buttonName: FilterType) => void
}

export const FilterMethod = (props: MoneyPropsType) => {
    return(
        <div className={styles.filterMethod}>
            <h1>Filter Method</h1>
            <table>
                <caption>Money</caption>
                {props.money.map((item, index) => {
                    return(
                        <tr key={index}>
                            <th scope="col">{item.banknote}</th>
                            <th scope="col">{item.value}</th>
                            <th scope="col">{item.number}</th>
                        </tr>
                    )
                })}
            </table>
            <Button name={'all'} onClickFilterHandler={props.onClickFilterHandler}/>
            <Button name={'dollar'} onClickFilterHandler={props.onClickFilterHandler}/>
            <Button name={'ruble'} onClickFilterHandler={props.onClickFilterHandler}/>
        </div>
    )
}