
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover-scale border border-amber-100 flex flex-col h-full">
      <div className="relative pt-[100%] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          HOT
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
          {product.title}
        </h3>
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs text-gray-500 ml-1 font-medium">{product.rating}</span>
        </div>
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-sunshine-main">
              NT${product.price}
            </span>
            <span className="text-xs text-gray-400 line-through">
              NT${product.originalPrice}
            </span>
          </div>
          <button className="w-full bg-sunshine-main hover:bg-amber-600 text-white font-bold py-2 rounded-lg transition-colors text-sm">
            查看詳情
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
