'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <div>
      </div>
      <button
        onClick={
          () => unstable_retry()
        }
      >
        Try again
      </button>
    </div>
  )
}