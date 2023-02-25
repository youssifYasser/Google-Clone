import { Squares2X2Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import profileImg from '../public/profile.jpg'
const Header = () => {
  return (
    <header className='p-3 w-full'>
      <div className='flex space-x-2 sm:space-x-4 items-center justify-end text-sm text-gray-700 dark:text-[#9aa0a6]'>
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
