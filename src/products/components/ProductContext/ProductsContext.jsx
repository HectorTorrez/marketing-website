import { useState } from "react"
import { UserContext } from "./UserContext"


export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <UserContext.Provider value={{ products, setProducts }}>
      {children}
    </UserContext.Provider>
  )
}