import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useOusideClick } from '../Hooks/useOusideClick'

export const UseOutsideClickPage = () => {
  const boxRef = useRef()
  // useOutsideClick
  useOusideClick(boxRef, () => toast('Clicked outside'))

  return (
    <div>
      <a href="/" className="font-bold">
        Home
      </a>
      <Toaster />
      <div className="container">
        <button
          type="button"
          ref={boxRef}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Click Outside To Show The Toasts
        </button>
      </div>
    </div>
  )
}
