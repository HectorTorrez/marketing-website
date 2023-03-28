import './Form.css'

export const Search = ({ input, setInput }) => {

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const onChange = ({ target }) => {
    setInput(target.value)
  }
  return (
    <form className="search--form"
      onSubmit={onSubmit}>
      <input
        className="search--input"
        type="text"
        onChange={onChange}
        value={input}
      />
      <button className="search--button">Search</button>
    </form>
  )
}