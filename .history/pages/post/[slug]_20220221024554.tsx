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

export const getStaticPaths = async () => {}
