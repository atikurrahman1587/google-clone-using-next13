export default async function WebSearchPage({searchParams}) {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
    const data = await response.json();
    const results = data.items;
  return (
    <>
        {results && results.map(result => <h1 key={result.cacheId}>{result.title}</h1>)}
    </>
  )
}
