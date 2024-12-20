import Link from 'next/link';

/* eslint-disable react/no-unescaped-entities */
const SearchResult = ({ results, term, closeSearchResult }) => {
  return (
    <div className='absolute left-0 top-12 z-[990] w-full rounded-md bg-white p-4 shadow'>
      <p className='!text-lg'>
        Showing result for
        <span className='font-semibold'>"{term}":</span>
      </p>
      <ul
        role='list'
        className='divide-y divide-gray-100 [&>*]:py-2'>
        {results.map((result) => (
          <li key={result.i}>
            <Link
              href={`/docs/${result.id}`}
              className='transition-all hover:text-emerald-600'
              onClick={(e) => closeSearchResult(e)}>
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
