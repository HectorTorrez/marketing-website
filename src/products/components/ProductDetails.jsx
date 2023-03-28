// import { useMemo } from "react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCardById } from "../helpers/getCardById"
import './ProductDetails.css'


export const ProductDetails = () => {
  const [descriptionProduct, setDescriptionProduct] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()




  const item = getCardById(id)
  console.log(item)





  const onNavigateBack = () => {
    navigate(-1)
  }
  // if (!descriptionProduct) return null
  return (

    <div>hola</div>

    // <section className='product-section' key={descriptionProduct.id}>
    //   <header className='product-body' >
    //     <h3>{descriptionProduct.title}</h3>
    //     <figure className='produc-body--img'>
    //       <img src={descriptionProduct.image} alt={descriptionProduct.title} />
    //     </figure>
    //     <footer className='product-body--description'>
    //       <div className='product-description--more'>
    //         <p>{descriptionProduct.description}</p>
    //         <button
    //           className="product--button"
    //           onClick={onNavigateBack}
    //         >
    //           Back...
    //         </button>
    //       </div>
    //     </footer>
    //   </header>
    // </section>



  )
}