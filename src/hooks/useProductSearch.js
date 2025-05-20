import { useState, useEffect } from 'react';

export function useProductSearch(query, shouldSearch) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!shouldSearch || !query) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const encodedTitle = encodeURIComponent(query);
        const response = await fetch(`${API_URL}/products/search?title=${encodedTitle}`);

        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [shouldSearch, API_URL]);

  return { products, loading, error };
}
