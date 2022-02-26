import Link from 'next/link'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

function Posts({ posts }: Props) {
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
