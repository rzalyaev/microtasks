import React, {ChangeEvent} from "react";
import styles from "./InputContent.module.css";

type PropsType = {
    messageText: string
    setMessageText: (value: string) => void
}

export const InputContent = (props: PropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessageText(event.currentTarget.value);
    }

    return <input type="text" value={props.messageText} onChange={onChangeInputHandler}/>
}