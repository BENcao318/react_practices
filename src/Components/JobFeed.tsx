import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import styles from './Post.module.css'

interface IPost {
  by: string
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
}

export const JobFeed = () => {
  const HACKERNEWS_POSTID_API =
    'https://hacker-news.firebaseio.com/v0/jobstories.json'
  const [posts, setPosts] = useState([] as any)
  const [pageNumber, setPageNumber] = useState(0)
  const [perPage, setPerPage] = useState(6)

  useEffect(() => {
    fetchAllJobIDs()
  }, [pageNumber])

  const fetchAllJobIDs = async () => {
    const response = await axios.get(HACKERNEWS_POSTID_API)
    const postIDs = response.data.splice(pageNumber * perPage, perPage)

    fetchAllMetaData(postIDs)
  }

  const fetchAllMetaData = (postIDs: [Number]) => {
    postIDs.forEach((postId: Number, idx) => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
        .then((res) => {
          setPosts((posts: any) => [...posts, res.data])
        })
        .catch((err) => console.log(err))
    })
  }

  return (
    <div className="text-center p-7">
      <h1 className="text-2xl font-medium">Hackernews Jobs</h1>
      <p className="font-light text-center p-7">
        React the problem statement to start writing your code.
      </p>
      <div className={styles.allPostsContainer}>
        {posts.map((singlePost: any) => (
          <Post post={singlePost} key={singlePost.id} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className={styles.button}
        >
          Load More
        </button>
      </div>
    </div>
  )
}
