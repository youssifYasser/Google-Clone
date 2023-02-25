import HeaderOption from './HeaderOption'
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  PlayCircleIcon,
  MapIcon,
  NewspaperIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

const HeaderOptions = () => {
  return (
    <div className='flex justify-around items-start w-full text-gray-700 dark:text-[#9aa0a6] text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] border-gray-300 dark:border-[#3b3b3b] '>
      <div className='flex space-x-6'>
        <HeaderOption Icon={MagnifyingGlassIcon} title='all' selected />
        <HeaderOption Icon={PhotoIcon} title='images' />
        <HeaderOption Icon={PlayCircleIcon} title='videos' />
        <HeaderOption Icon={NewspaperIcon} title='news' />
        <HeaderOption Icon={MapIcon} title='maps' />
        <HeaderOption Icon={EllipsisVerticalIcon} title='more' />
      </div>

      <div className='flex space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
