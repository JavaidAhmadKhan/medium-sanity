import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'


interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  )
}
