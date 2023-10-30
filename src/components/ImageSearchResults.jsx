import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({results}) {
  return (
    <div className="pb-44 sm:pb-24 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 space-x-4">
            {results.items.map((result) => (
                <div className="mb-8" key={result.link}>
                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img src={result.link} alt="result.title" className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"/>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
                            <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
        <div className="ml-16">
            <PaginationButtons/>
        </div>
    </div>
  )
}
