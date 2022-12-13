import React from 'react'
import { JobFeed } from '../Components/JobFeed'

export const JobFeedPage = () => {
  return (
    <div>
      <a href="/" className="font-bold">
        Home
      </a>
      <JobFeed />
    </div>
  )
}
