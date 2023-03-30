import { useEffect, useState } from 'react'
import './Form.css'

export const Search = ({ products, setResult, setIsLoading }) => {

  const [input, setInput] = useState("")


  // const onSubmit = (event) => {
  //   event.preventDefault()
  // }



  const handleDown = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }

  const onClick = () => {
    const results = !input ? products : products.filter(dato => dato.title.toLowerCase().includes(input.toLowerCase()))
    setResult(results)
    setIsLoading(false)
    setInput(results)
    setInput("")
  }
  return (
    // <form className="search--form"
    /* onSubmit={onSubmit}> */
    <div className='search--form'>
      <input
        className="search--input"
        type="text"
        onChange={(event) => (
          setInput(event.target.value)
        )}
        onKeyDown={handleDown}
        value={input}
      />
      <button
        onClick={onClick}
        className="search--button">Search</button>
    </div>
    // </form>
  )
}