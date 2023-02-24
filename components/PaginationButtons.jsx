import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PaginationButtons = () => {
  const router = useRouter()

  const pageIndex = Number(router.query.start) || 0

  return (
    <div className='flex justify-around max-w-lg mb-10 text-blue-700'>
      {pageIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${pageIndex - 10}`}
        >
          <div className='flex flex-col items-center flex-grow cursor-pointer hover:underline'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${pageIndex + 10}`}>
        <div className='flex flex-col items-center flex-grow cursor-pointer hover:underline'>
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
