import React from 'react';
import { categories } from '../data/products';
import { Cpu, HardDrive, Smartphone, Thermometer, Wrench, Battery } from 'lucide-react';

interface CategoryGridProps {
  onCategorySelect: (categorySlug: string) => void;
}

const categoryIcons = {
  'processors': Cpu,
  'memory': HardDrive,
  'dev-boards': Smartphone,
  'sensors': Thermometer,
  'components': Wrench,
  'power': Battery
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Find the perfect components for your projects</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons];
            
            return (
              <div
                key={category.id}
                onClick={() => onCategorySelect(category.slug)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} products
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};