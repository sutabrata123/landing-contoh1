import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8');
        
        if (!response.ok) throw new Error('Gagal mengambil data');
        
        const data = await response.json();
        setProducts(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['Semua', ...new Set(products.map(item => item.category.name))];

  const filteredProducts = activeCategory === 'Semua' 
    ? products 
    : products.filter(item => item.category.name === activeCategory);

  return (
    <section id="template" className="bg-[#FFFBF7] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="text-[#c19b6c] text-xs font-bold tracking-widest uppercase mb-2">
              Galeri Template
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Pilih desain favoritmu
            </h2>
          </div>
          
          {!isLoading && !isError && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border border-transparent ${
                    activeCategory === category
                      ? 'bg-[#6B2346] text-white'
                      : 'bg-white text-gray-600 hover:border-[#6B2346] hover:text-[#6B2346] shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2346]"></div>
          </div>
        )}

        {isError && (
          <div className="text-center py-20 bg-red-50 rounded-xl">
            <p className="text-red-600 font-medium">Gagal memuat data dari server. Silakan coba muat ulang halaman.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                templateName={product.title}
                price={product.price}
                imageUrl={product.images[0]}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;