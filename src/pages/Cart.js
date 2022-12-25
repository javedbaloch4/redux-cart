import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"

export default function Cart() {
  const products = useSelector((state) => state.cart)
  const ffff = useDispatch()

  return (
    <>
      <h3>Cart</h3>
      <div className="cardWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => ffff(remove(product.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
