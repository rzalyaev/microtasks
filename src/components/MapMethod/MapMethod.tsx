import React from "react";
import styles from "./MapMethod.module.css";

export const MapMethod = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return(
        <div className={styles.mapMethod}>
            <h1>Map Method</h1>
            <table>
                <caption>Car models</caption>
                {topCars.map((auto, id) => {
                    return(
                        <tr key={id}>
                            <th scope="col">{auto.manufacturer}</th>
                            <th scope="col">{auto.model}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}