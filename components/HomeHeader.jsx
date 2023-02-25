import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import profileImg from '../public/profile.jpg'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
const Header = ({ currentTheme }) => {
  const { setTheme } = useTheme()
  return (
    <header className='p-3 w-full flex items-center justify-between'>
      <button
        type='button'
        className='hover:bg-gray-100 text-gray-700 dark:text-inherit dark:hover:bg-black rounded-full border-2 border-[#3b3b3b] p-1 sm:p-2 transition-all duration-150 group'
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

      <div className='flex space-x-2 sm:space-x-4 items-center  text-sm text-gray-700 dark:text-[#9aa0a6]'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <Squares2X2Icon className='h-10 w-10 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2' />
        <Image
          src={profileImg}
          alt='profile pic'
          className='h-9 w-9 rounded-full cursor-pointer transition-transform duration-150 ease-out hover:scale-110'
        />
      </div>
    </header>
  )
}

export default Header
