import React from 'react'

function Backdrop({ show, setShow }) {
  return (
    <div
      className=" fixed top-0 left-0 w-screen h-screen bg-gray-600 z-[100] opacity-50 dark:bg-gray-800"
      onClick={() => setShow(false)}
    ></div>
  )
}

export default Backdrop
