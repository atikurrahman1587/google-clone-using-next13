import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({searchParams}) {
    const startIndex = searchParams.start || 1;
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    const results = data.items;
  return (
    <>
        {!results && (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">No Result found</h1>
                <p className="text-lg">Try searching for something else or go back to the homepage <Link className="text-blue-500" href={"/"}>HOME</Link></p>
            </div>
        )}
        {results && <ImageSearchResults results={data} />}
    </>
  )
}
