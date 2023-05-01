import React, {useState} from 'react';
import './App.css';
import {MapMethod} from "./components/MapMethod/MapMethod";
import {FilterMethod} from "./components/FilterMethod/FilterMethod";

export type MoneyType = {
    banknote: string,
    value: number,
    number: string
}

export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {
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

    return (
    <div className="App">
      <MapMethod/>
      <FilterMethod money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    </div>
  );
}

export default App;
