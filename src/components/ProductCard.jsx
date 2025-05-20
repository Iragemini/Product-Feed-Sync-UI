import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className='border p-4 rounded shadow-sm bg-white'>
      <img src={product.image_link} alt={product.title} className='w-full h-40 object-cover mb-4' />
      <h2 className='text-lg font-semibold'>{product.title}</h2>
      <p className='text-gray-600'>
        {product.price} {product.currency}
      </p>
      <p
        className={`mt-1 ${
          product.availability === 'in stock' ? 'text-green-600' : 'text-red-500'
        }`}
      >
        {product.availability}
      </p>
      <a
        href={product.link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 underline text-sm'
      >
        Go shopping!
      </a>
    </div>
  );
}
