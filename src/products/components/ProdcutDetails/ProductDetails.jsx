// import { useMemo } from "react"
import { useContext, useEffect, useMemo, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCardById } from "../../helpers/getCardById"

import { UserContext } from "../ProductContext/UserContext"
import './ProductDetails.css'


export const ProductDetails = () => {
  const [product, setProduct] = useState([])

  const { id } = useParams()
  const { products } = useContext(UserContext)
  const navigate = useNavigate()
  console.log(id)

  // useMemo(() => (
  //   getCardById(id, products), [id],
  //   setProduct(item)
  // ))

  const data = useMemo(() => getCardById(id, products), [id])

  useEffect(() => {
    const item = data
    setProduct(item)
    console.log(item)

  }, [])








  const onNavigateBack = () => {
    navigate(-1)
  }
  // if (!product) return null


  if (!data) {
    return <Navigate to="/" />
  }
  return (
    <>
      {
        product && (
          <section className='product-section' key={product.id}>
            <header className='product-body' >
              <h3>{product.title}</h3>
              <figure className='produc-body--img'>
                <img src={product.thumbnail} alt={product.title} />
              </figure>
              <footer className='product-body--description'>
                <div className='product-description--more'>
                  <p>${product.price}</p>
                  <p>{product.description}</p>
                  <button
                    className="product--button"
                    onClick={onNavigateBack}
                  >
                    Back...
                  </button>
                </div>
              </footer>
            </header>
          </section>
        )
      }



    </>

  )
}