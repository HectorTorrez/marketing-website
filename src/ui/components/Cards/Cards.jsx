import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../products/components/ProductContext/UserContext'
import { Link } from 'react-router-dom'
import { getProducts } from '../../../products/data/'
import { Aside } from '../Aside'
import './Cards.css'
import { Loading } from '../Loading'
import { Categories } from '../Categories'
import { Search } from '../Form/Form'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'

export const Cards = () => {
  // const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(() => {

  },)

  const { products, setProducts } = useContext(UserContext)

  const checkProductInCart = (id) => {
    return shoppingCart.some(item => item.id === id)
  }

  const onCart = (id) => {

    const findProduct = products.find(product => product.id === id)

    if (findProduct) {
      setTotal(total + findProduct.price)
      setShoppingCart([...shoppingCart, findProduct])
    }

  }

  const onDelete = (id, price) => {
    const deleteProduct = shoppingCart.filter(shopping => shopping.id !== id)
    // const priceProduct = shoppingCart.filter(shopping => shopping.id === id)

    setShoppingCart(deleteProduct)
    setTotal(total - price)

  }
  useEffect(() => {
    setResult(products)
  }, [products])

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const data = await getProducts(selectedCategory)
    //   setProducts(data)
    //   setIsLoading(false)
    // }
    // fetchProducts()

    getProducts(selectedCategory, setProducts)
    setResult(products)
  }, [selectedCategory])



  useEffect(() => {
    const results = !input ? products : products.filter(dato => dato.title.toLowerCase().includes(input.toLowerCase()))
    setResult(results)
    setIsLoading(false)
  }, [])



  return (
    <>
      <Search setResult={setResult} setIsLoading={setIsLoading} products={products} />

      {
        isLoading && <Loading />
      }
      <Categories setSelectedCategory={setSelectedCategory} />

      <section className='main-card'>

        {

          result.map((product) => {

            const isProductInCart = checkProductInCart(product.id)
            return (
              <section className='main-card--section' key={product.id}>
                <header className='card-body' >
                  <h3>{product.title}</h3>
                  <figure className='card-body--img'>
                    <img src={product.thumbnail} alt={product.title} />
                  </figure>
                  <footer className='card-body--description'>
                    <div className='card-description--more'>
                      <div className='card-description--price'>
                        <p>$<span>{product.price}</span></p>
                        <p>{product.description}</p>
                      </div>
                      <div className='card-section--button'>
                        <Link className='card-more--button' to={`cards/${product.id}`} >
                          See more
                        </Link>

                        <button
                          className={`${isProductInCart ? 'btn-delete' : 'card-add--button'} `}
                          onClick={() => {
                            isProductInCart ? onDelete(product.id, product.price) : onCart(product.id)
                          }
                          }
                        >
                          {isProductInCart ? 'Delete' : 'Add'}
                          {
                            isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                          }
                        </button>
                      </div>
                    </div>
                  </footer>
                </header>
              </section>
            )
          })
        }
      </section>

      <Aside shoppingCart={shoppingCart} onDelete={onDelete} setShoppingCart={setShoppingCart} total={total} setTotal={setTotal} />
    </>
  )
}