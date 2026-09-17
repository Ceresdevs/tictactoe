import { useState } from 'react'

export default function Square() {
    //value is set to null by default
    const [value, setValue] = useState(null)

    function handleClick() {
        //set value when clicked
        setValue('X');
    }
    return (
         <button className="square" onClick={handleClick} >{value}</button>
    )
}