import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/cartSlice"
import { Items } from "./Items"
import { fetchProducts, STATUSES } from "../store/productSlice"

export default function Products() {
  const items = useSelector((state) => state.cart)
  const { data: products, status } = useSelector((state) => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (status === STATUSES.LOADING) {
    return <h2>LOADING......</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>SOMETHING WENT WRONG....</h2>
  }

  return (
    <>
      <h2>Status : {status}</h2>
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button
                className="btn"
                onClick={() =>
                  dispatch(
                    add({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      qty: 1,
                    })
                  )
                }
              >
                Add to cart
              </button>
            </div>
          )
        })}
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <Items item={item} />
        ))}
      </div>
    </>
  )
}
