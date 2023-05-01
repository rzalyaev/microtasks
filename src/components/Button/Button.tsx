import React from "react";
import styles from "./Button.module.css";
import {FilterType} from "../../App";

type NameType = FilterType;

type ButtonPropsType = {
    name: NameType
    onClickFilterHandler: (buttonName: FilterType) => void
}

export const Button = (props: ButtonPropsType) => {
    return(
        <button className={styles.button} onClick={() => {props.onClickFilterHandler(props.name)}}>{props.name}</button>
    )
}