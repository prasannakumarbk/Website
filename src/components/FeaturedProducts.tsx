import React from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          </div>
          <p className="text-lg text-gray-600">Handpicked electronics for your next project</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};