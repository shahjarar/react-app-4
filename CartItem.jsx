```jsx
import { useDispatch } from 'react-redux'
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from './redux/CartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>

      <p>Price: Rs. {item.price}</p>

      <p>Quantity: {item.quantity}</p>

      <p>Total: Rs. {item.totalPrice}</p>

      <div>
        <button
          type="button"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>

        <button
          type="button"
          onClick={() => dispatch(addToCart(item))}
        >
          +
        </button>

        <button
          type="button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
```
