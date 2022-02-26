import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text'

import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
  post: Post
}

function Post({ post }: Props) {
  console.assert(post)
  return (
    <main>
      <Header />
      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            className=""
            content={post.body}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),

              li: ({ children }: any) => (
                <ul>
                  <li className="ml-4 list-disc">{children}</li>
                </ul>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-400 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />
      
      <form className="mx-w-2xl my-10 mx-auto mb-10 flex flex-col p-5">
        <h3 className="text-sm text-yellow-500">Enjoyed the article?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below</h4>
        <hr className="mt-2 py-3" />
        <label>
          <span>Name</span>
          <input placeholder="Javaid Khan" type="text"></input>
        </label>
        <label>
          <span>Email</span>
          <input placeholder="your@email.com" type="email"></input>
        </label>
        <label>
          <span>Comment</span>
          <textarea placeholder="Javaid Khan" rows={8} />
        </label>
      </form>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
        current
        }
    }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
    name,
    image
  },
  'comments':*[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true],
  description,
  mainImage,
  slug,
  body
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      revalidate: 60, // after 60 seconds, till update the old cache version
    },
  }
}
