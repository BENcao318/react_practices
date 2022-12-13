import moment from 'moment'
import React from 'react'
import styles from './Post.module.css'

export const Post = ({ post }) => {
  return (
    <a href={post?.url} target="__blank" style={{ textDecoration: 'none' }}>
      <div className={styles.postContainer}>
        <p>
          ID: <span>{post?.id}</span>{' '}
        </p>
        <h1>{post?.title}</h1>
        <p>{moment(post?.time).format('Do MMM YYYY hh:mm a')}</p>
        <p>
          Posted by: <span>{post?.by}</span>{' '}
        </p>
      </div>
    </a>
  )
}
