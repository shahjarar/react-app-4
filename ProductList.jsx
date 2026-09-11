```jsx
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/CartSlice'

function ProductList() {
  const dispatch = useDispatch()

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 80000,
    },
    {
      id: 2,
      name: 'Mobile Phone',
      price: 40000,
    },
    {
      id: 3,
      name: 'Headphones',
      price: 5000,
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 3000,
    },
  ]

  return (
    <div className="product-list">
      <h1>Products</h1>

      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>

          <p>Price: Rs. {product.price}</p>

          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
```
