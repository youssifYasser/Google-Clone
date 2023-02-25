import { useTheme } from 'next-themes'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/HomeHeader'

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <Header currentTheme={currentTheme} />
      <Body currentTheme={currentTheme} />
      <Footer />
    </main>
  )
}
