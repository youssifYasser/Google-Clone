const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center justify-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 dark:hover:text-blue-600 dark:hover:border-blue-600 pb-4 cursor-pointer ${
        selected &&
        'text-blue-500 border-blue-500 dark:text-blue-600 dark:border-blue-600'
      }`}
    >
      <Icon className='h-4' />
      <p className='hidden capitalize sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption
