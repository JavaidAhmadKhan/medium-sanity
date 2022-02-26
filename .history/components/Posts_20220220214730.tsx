import {Post} from '../typings'

interface Props {
  posts: [Post]
}

function Posts({posts}: Props) {
  return (
    <div>
      {posts.map(post => (

      ))}
    </div>
  )
}

export default Posts
