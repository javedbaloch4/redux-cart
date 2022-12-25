import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Navbar() {
  const items = useSelector((state) => state.cart)

  console.log(items)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>

      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>

        <span className="cartCount">Cart items: {items?.length}</span>
      </div>
    </div>
  )
}
