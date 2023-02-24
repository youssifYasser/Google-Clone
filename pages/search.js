import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import Response from '../dummy_response'

const Search = ({ searchResults }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <main>
        <Header />
        <SearchResults searchResults={searchResults} />
      </main>
    </>
  )
}

export default Search

export const getServerSideProps = async (context) => {
  const useDummyData = false
  const startIndex = context.query.start || '0'

  const searchData = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json())

  return {
    props: {
      searchResults: searchData,
    },
  }
}
