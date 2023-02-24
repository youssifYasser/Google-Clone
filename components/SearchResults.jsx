import PaginationButtons from './PaginationButtons'
import SearchResult from './SearchResult'

const SearchResults = ({ searchResults }) => {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='mb-5 mt-3 text-gray-600 text-sm'>
        About {searchResults.searchInformation?.formattedTotalResults} results (
        {searchResults.searchInformation?.formattedSearchTime} seconds)
      </p>

      {searchResults.items?.map((result) => (
        <SearchResult key={result.link} result={result} />
      ))}

      <PaginationButtons />
    </div>
  )
}

export default SearchResults
