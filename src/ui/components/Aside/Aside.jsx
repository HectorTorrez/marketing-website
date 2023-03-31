import { useId, useState } from 'react'
import { CartItem } from '../CartItem/CartItem'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Aside.css'

export const Aside = ({ shoppingCart, onDelete, setShoppingCart, total, setTotal }) => {

  const cartCheckboxId = useId()

  const handleClear = () => {
    setShoppingCart([])
    setTotal(0)
  }



  return (


    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className="cart">

        {
          shoppingCart && (
            <button
              className='cart-button--clear'
              onClick={handleClear}
            >
              Clear
              <ClearCartIcon />
            </button>
          )
        }

        <p className='cart-total'>Total ${total}</p>
        <ul>
          {shoppingCart.map((cart) => (
            <CartItem
              key={cart.id}
              {...cart}
              onDelete={() => onDelete(cart.id, cart.price)}
            />
          ))}
        </ul>

      </aside>
    </>
  )
}