```jsx
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload

      const existingItem = state.items.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice =
          existingItem.quantity * existingItem.price
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        })
      }

      state.totalQuantity += 1
      state.totalAmount += product.price
    },

    removeFromCart: (state, action) => {
      const id = action.payload

      const existingItem = state.items.find(
        (item) => item.id === id
      )

      if (!existingItem) return

      state.totalQuantity -= existingItem.quantity
      state.totalAmount -= existingItem.totalPrice

      state.items = state.items.filter(
        (item) => item.id !== id
      )
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload

      const existingItem = state.items.find(
        (item) => item.id === id
      )

      if (!existingItem) return

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== id
        )
      } else {
        existingItem.quantity -= 1
        existingItem.totalPrice =
          existingItem.quantity * existingItem.price
      }

      state.totalQuantity -= 1
      state.totalAmount -= existingItem.price
    },

    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
```
