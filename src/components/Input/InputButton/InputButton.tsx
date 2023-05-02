import React from "react";
import styles from "./InputButton.module.css";

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const InputButton = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callback();
    }

    return(
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}