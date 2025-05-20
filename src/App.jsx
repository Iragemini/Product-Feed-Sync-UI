import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { useProductSearch } from './hooks/useProductSearch';

export default function App() {
  const [query, setQuery] = useState('');
  const [shouldSearch, setShouldSearch] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const { products, loading, error } = useProductSearch(query, shouldSearch);

  useEffect(() => {
    if (shouldSearch) {
      setShouldSearch(false);
      setHasSearched(true);
    }
  }, [shouldSearch]);

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Product Search</h1>

      <div className='flex gap-2 mb-6'>
        <input
          type='text'
          placeholder='Search by title...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='flex-1 p-2 border border-gray-300 rounded'
        />
        <button
          onClick={() => setShouldSearch(true)}
          className='px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700'
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className='text-red-600'>{error}</p>}
      {hasSearched && !loading && !error && products.length === 0 && <p>No products found.</p>}

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
