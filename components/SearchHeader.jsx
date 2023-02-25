import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import profileImg from '../public/profile.jpg'
import HeaderOptions from './HeaderOptions'
import { useTheme } from 'next-themes'

const Header = ({ currentTheme }) => {
  const { setTheme } = useTheme()
  const router = useRouter()
  const [searchInput, setSearchInput] = useState(router.query.term)

  const handleSearch = (e) => {
    e.preventDefault()

    const searchTerm = searchInput.trim()
    if (!searchTerm) return

    router.push(`/search?term=${searchTerm.replaceAll(' ', '+')}`)
  }

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-[#121212] shadow-md dark:shadow-[#1a1a1a]'>
      <div className='grid grid-cols-3 gap-y-3 grid-flow-row-dense sm:flex sm:items-center w-full p-4 sm:p-6'>
        <Image
          src={
            currentTheme === 'dark'
              ? '/google_logo_dark.png'
              : '/google_logo.webp'
          }
          alt='google logo'
          width={120}
          height={40}
          onClick={() => router.push('/')}
          className='object-cover cursor-pointer col-span-1 col-start-2 place-self-center'
        />

        <form className='col-span-3 flex flex-grow items-center rounded-full border border-gray-300 dark:border-[#3b3b3b] hover:shadow-md focus-within:shadow-md dark:shadow-[#1a1a1a] px-6 py-3 mx-3 sm:ml-10 sm:mr-5 max-w-2xl group'>
          <MagnifyingGlassIcon className='hidden group-focus-within:inline-flex h-6 mr-3 text-gray-500 dark:text-gray-400' />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type='text'
            placeholder='Search...'
            className='text-sm sm:text-base  flex-grow w-full focus:outline-none bg-transparent dark:text-[#9aa0a6]'
          />
          <XMarkIcon
            className={`${
              searchInput ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } h-5 text-gray-500 dark:text-gray-400 mr-1 sm:mr-3 transition-transform duration-100 ease-out hover:scale-110 cursor-pointer`}
            onClick={() => setSearchInput('')}
          />
          <MicrophoneIcon
            className={`hidden sm:inline-flex h-5 text-blue-500 dark:text-blue-600 pl-4 ${
              searchInput && ' border-l-2 border-gray-300'
            } mr-3`}
          />
          <button type='submit' onClick={handleSearch}>
            <MagnifyingGlassIcon
              className={`h-5  pl-1 ${
                searchInput && 'border-l-2 border-gray-300'
              } sm:border-none text-blue-500 dark:text-blue-600`}
            />
          </button>
        </form>

        <button
          type='button'
          className='col-start-1 col-span-1 place-self-start sm:ml-auto hover:bg-gray-100 text-gray-700 dark:text-inherit dark:hover:bg-black rounded-md border-2 border-[#3b3b3b] p-1 sm:p-2 transition-all duration-150 group'
          onClick={() =>
            currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          {currentTheme === 'dark' ? (
            <SunIcon className='h-7 sm:h-8 group-active:scale-90 transition-all duration-150' />
          ) : (
            <MoonIcon className='h-7 sm:h-8 group-active:scale-90 transition-all duration-150' />
          )}
        </button>

        <Image
          src={profileImg}
          alt='profile pic'
          className='h-10 w-10 sm:ml-5 rounded-full cursor-pointer transition-transform duration-150 ease-out hover:scale-110 col-span-1 place-self-end sm:place-self-auto'
        />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default Header
