import React, {useState} from "react";
import './filter.css';



const Filter = () => {

    const [state, setFilterState] = useState();

    const onFilterChange = (e) => {
        const text = e.target.value;
        setFilterState({text});
        console.log(text)
    }


    return (
        <input placeholder="Поиск" onChange={onFilterChange} className='filter'/>
    )
}


export default Filter;