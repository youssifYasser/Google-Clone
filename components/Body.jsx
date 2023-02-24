import Image from 'next/image'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MicrophoneIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

const Body = () => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    const searchTerm = searchInput.trim()
    if (!searchTerm) return

    router.push(`/search?term=${searchTerm.replaceAll(' ', '+')}`)
  }

  return (
    <form className='flex flex-col items-center mt-32 flex-grow w-4/5'>
      <Image
        src='/google_logo.webp'
        width={280}
        height={100}
        className='object-cover  '
        alt='google logo'
      />
      <div className='flex px-5 py-3 mt-5 w-full border border-gray-300 items-center max-w-md sm:max-w-xl  hover:shadow-md focus-within:shadow-md rounded-full'>
        <MagnifyingGlassIcon className='h-5 mr-3 text-gray-500' />
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          className='focus:outline-none flex-grow'
        />
        {searchInput ? (
          <XMarkIcon
            className='h-6 sm:h-7 text-gray-500 transition-transform duration-100 ease-out hover:scale-110 cursor-pointer'
            onClick={() => setSearchInput('')}
          />
        ) : (
          <MicrophoneIcon className='h-5 text-blue-500' />
        )}
      </div>

      <div className='mt-8 flex flex-col w-1/2 gap-4 justify-center sm:flex-row'>
        <button onClick={handleSearch} className='btn'>
          google search
        </button>
        <button onClick={handleSearch} className='btn'>
          i&apos;m feeling lucky
        </button>
      </div>
    </form>
  )
}

export default Body
