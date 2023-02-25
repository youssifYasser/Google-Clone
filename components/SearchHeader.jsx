import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import profileImg from '../public/profile.jpg'
import HeaderOptions from './HeaderOptions'

const Header = () => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState(router.query.term)

  const handleSearch = (e) => {
    e.preventDefault()

    const searchTerm = searchInput.trim()
    if (!searchTerm) return

    router.push(`/search?term=${searchTerm.replaceAll(' ', '+')}`)
  }

  return (
    <header className='sticky top-0 bg-white border-b-[1px] border-gray-300 shadow-md'>
      <div className='grid grid-cols-3 gap-y-3 grid-flow-row-dense  sm:flex items-center w-full p-4 sm:p-6'>
        <Image
          src='/google_logo.webp'
          alt='google logo'
          width={120}
          height={40}
          onClick={() => router.push('/')}
          className='object-cover cursor-pointer col-span-2 place-self-end'
        />

        <form className='col-span-3 place-self-auto flex flex-grow items-center rounded-full border border-gray-300 hover:shadow-md focus-within:shadow-md px-6 py-3 mx-3 sm:ml-10 sm:mr-5 max-w-2xl group'>
          <MagnifyingGlassIcon className='hidden group-focus-within:inline-flex h-6 mr-3 text-gray-500' />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type='text'
            className='text-sm sm:text-base sm:py-[2.5px] flex-grow w-full focus:outline-none'
          />
          <XMarkIcon
            className={`${
              searchInput ? 'inline-flex' : 'hidden'
            } h-6 sm:h-7 text-gray-500 mr-1 sm:mr-3 transition-transform duration-100 ease-out hover:scale-110 cursor-pointer`}
            onClick={() => setSearchInput('')}
          />
          <MicrophoneIcon
            className={`hidden sm:inline-flex h-6 text-blue-500 ${
              searchInput && 'pl-4 border-l-2 border-gray-300'
            } mr-3`}
          />
          <button type='submit' onClick={handleSearch}>
            <MagnifyingGlassIcon
              className={`h-5 sm:h-6 pl-1 ${
                searchInput && 'border-l-2 border-gray-300'
              } sm:border-none text-blue-500`}
            />
          </button>
        </form>

        <Image
          src={profileImg}
          alt='profile pic'
          className='h-10 w-10 ml-auto rounded-full cursor-pointer transition-transform duration-150 ease-out hover:scale-110'
        />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default Header
