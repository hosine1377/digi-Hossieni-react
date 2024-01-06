import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CartButton() {
  return (
    <div>
      <Link to="/cart">
        <button className=" relative flex justify-center items-center border-gray-300 border rounded-md p-3">
          <FaShoppingCart />
          <span className=" absolute w-4 h-4 bg-violet-700 rounded-full top-0 right-0 text-xs text-white dark:bg-violet-700 dark:text-white">
            0
          </span>
        </button>
      </Link>
    </div>
  )
}

export default CartButton
