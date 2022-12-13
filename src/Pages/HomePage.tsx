import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="text-xl font-bold max-w-screen-2xl text-center">
      <div className="font-bold text-2xl">Home</div>
      <a href="/jobfeed" className="block">
        JobFeed
      </a>
      <a href="/selectallcheckboxes" className="block">
        Select All Checkboxes
      </a>
      <a href="/useoutsideclick" className="block">
        useOusideClick Custom Hook
      </a>
    </div>
  )
}
