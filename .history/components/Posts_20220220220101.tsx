import Link from 'next/link'
import { Post } from '../typings'
import { sanityClient, urlFor } from '../sanity'
export default function Posts() {
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

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
