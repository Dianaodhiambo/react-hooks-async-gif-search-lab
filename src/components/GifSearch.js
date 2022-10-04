import React, { useState } from "react";

function GifSearch({onSearchFormSubmit}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchFormSubmit(inputValue)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>What would you like to search for?</label>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}
export default GifSearch;