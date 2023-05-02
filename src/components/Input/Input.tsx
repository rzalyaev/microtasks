import React, {useState} from "react";
import styles from "./Input.module.css";
import {InputContent} from "./InputContent/InputContent";
import {InputButton} from "./InputButton/InputButton";

export const Input = () => {
    const [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [messageText, setMessageText] = useState<string>('');

    const addMessage = (newMessageText: string) => {
        const newMessage = {message: newMessageText}
        setMessages([newMessage, ...messages])
    }

    const onClickAddMessageHandler = () => {
        addMessage(messageText);
        setMessageText('');
    }

    return(
        <div className={styles.messages}>
            <InputContent messageText={messageText} setMessageText={setMessageText}/>
            <InputButton name={'+'} callback={onClickAddMessageHandler}/>
            <div>
                {messages.map((m, id) => {
                    return(
                        <div key={id}>{m.message}</div>
                    )
                })}
            </div>
        </div>
    )
}