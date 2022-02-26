import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'

function Post() {
  return (
    <main>
      <Header />
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
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
}
