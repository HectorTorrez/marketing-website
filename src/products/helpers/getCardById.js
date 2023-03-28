import { useContext } from "react"
import { UserContext } from "../components/ProductContext/UserContext"


export const getCardById = async (id) => {
  const { products } = useContext(UserContext)
  return products.find(product => product.id === id)


}

