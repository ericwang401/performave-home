import type { NextPage } from 'next'
import Hero from '@components/Hero'
import Products from '@components/Products'
import Features from '@components/Features'
import SupportUs from '@components/SupportUs'
import SocialMedia from '@components/SocialMedia'
import Footer from '@components/Footer'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Performave</title>
      </Head>
      <Hero />
      <Features />
      <Products />
      <SupportUs />
      <SocialMedia />
      <Footer />
    </>
  )
}

export default Home
