import type { NextPage } from 'next'
import Hero from '@components/Hero'
import Products from '@components/Products'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Products />
    </>
  )
}

export default Home
