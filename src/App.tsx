import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CartSidebar } from './components/CartSidebar';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductFilters } from './components/ProductFilters';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { useProducts } from './hooks/useProducts';
import { Product } from './types';

function AppContent() {
  const {
    products: filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    availableBrands
  } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showProductSection, setShowProductSection] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setShowProductSection(true);
    // Scroll to products section
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const sortedProducts = React.useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sorted.sort((a, b) => b.id.localeCompare(a.id));
      default:
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartOpen={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      {!showProductSection && <Hero />}
      {!showProductSection && <CategoryGrid onCategorySelect={handleCategorySelect} />}
      {!showProductSection && <FeaturedProducts onProductClick={handleProductClick} />}

      {(showProductSection || searchQuery || selectedCategory) && (
        <section id="products-section" className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              <FilterSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedBrands={selectedBrands}
                onBrandChange={setSelectedBrands}
                availableBrands={availableBrands}
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
              />
              
              <div className="flex-1 lg:ml-8">
                <ProductFilters
                  productsCount={sortedProducts.length}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  onFilterToggle={() => setIsFilterOpen(true)}
                />
                
                <div className="mt-6">
                  <ProductGrid
                    products={sortedProducts}
                    onProductClick={handleProductClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;