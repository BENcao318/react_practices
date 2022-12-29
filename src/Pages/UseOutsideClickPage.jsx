import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useOusideClick } from '../Hooks/useOusideClick'

export const UseOutsideClickPage = () => {
  const boxRef = useRef()
  // useOutsideClick
  useOusideClick(boxRef, () => toast('Clicked outside'))
  // page for useRef
  return (
    <div>
      <a href="/" className="font-bold">
        Homepa
      </a>
      <Toaster />
      <div className="container">
        <button
          type="button"
          ref={boxRef}
          className="inline-block px-6 py-3 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-3 active:bg-blue-800 active:shadow-lg"
        >
          Click Outside Area To Show The Toasts
        </button>
      </div>
    </div>
  )
}
