import Link from 'next/link'

const SearchResult = ({ result }) => {
  return (
    <div className='max-w-xl mb-8'>
      <div className='group flex flex-col'>
        <Link href={result.link} className='text-sm text-gray-700'>
          {result.formattedUrl}
        </Link>
        <Link href={result.link}>
          <h2 className='text-lg sm:text-xl text-blue-800 truncate font-medium group-hover:underline'>
            {result.title}
          </h2>
        </Link>
      </div>

      <p
        className='text-sm text-gray-700 line-clamp-2'
        dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}
      ></p>
    </div>
  )
}

export default SearchResult
