import Link from 'next/link'
import { Post } from '../typings'

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div>
            <h1>I m a post</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Posts
