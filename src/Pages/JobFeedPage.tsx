import React from 'react'
import { JobFeed } from '../Components/JobFeed'

export const JobFeedPage = () => {
  return (
    <div>
      <a href="/" className="text-lg font-bold text-orange-600">
        Homepage for all the react practice pages
      </a>
      <JobFeed />
    </div>
  )
}
