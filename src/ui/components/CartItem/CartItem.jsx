import { RemoveFromCartIcon } from '../Icons/Icons'
import './CartItem.css'

export const CartItem = ({ thumbnail, title, price, onDelete }) => {



  return (
    <li className='cartt'>
      <img
        src={thumbnail}
        alt={title}
      />
      <div className='cartt-info'>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <button
          onClick={onDelete}
        >
          Delete
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>

  )
}