import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/HomeHeader'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <Header />
      <Body />
      <Footer />
    </main>
  )
}
