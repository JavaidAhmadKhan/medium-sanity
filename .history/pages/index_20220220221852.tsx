import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostsJav from '../components/PostsJav'

export default function Home() {
  return (
    <div className="mx mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <PostsJav/>
    </div>
  )
}
