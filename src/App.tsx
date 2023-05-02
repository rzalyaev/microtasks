import React from 'react';
import './App.css';
import {MapMethod} from "./components/MapMethod/MapMethod";
import {FilterMethod} from "./components/FilterMethod/FilterMethod";
import {Input} from "./components/Input/Input";



export type FilterType = 'all' | 'dollar' | 'ruble'

function App() {
    return (
    <div className="App">
        <MapMethod/>
        <FilterMethod/>
        <Input/>
    </div>
  );
}

export default App;
