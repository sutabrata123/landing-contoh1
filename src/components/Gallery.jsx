import { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';

const CACHE_KEY = 'indoinvite_products_cache';

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(8)].map((_, index) => (
      <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
        <div className="w-full aspect-[4/3] bg-gray-200"></div>
        <div className="p-5 flex flex-col gap-4 mt-2">
          <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
          <div className="flex justify-between items-center pt-4">
            <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/5"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Gallery = () => {
  // 1. Lazy Initialization: Baca cache langsung saat state pertama kali dibuat
  const [products, setProducts] = useState(() => {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    return cachedData ? JSON.parse(cachedData) : [];
  });

  const [isLoading, setIsLoading] = useState(() => {
    // Jika data sudah ada di cache, tidak perlu tampilkan loading
    return sessionStorage.getItem(CACHE_KEY) ? false : true; 
  });

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  
  const [activeCategory, setActiveCategory] = useState('Semua');
  const limit = 8;

  // 2. Fungsi fetch sekarang MURNI menangani jaringan (Asynchronous seutuhnya)
  const fetchProducts = useCallback(async (currentOffset = 0) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const baseUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${baseUrl}?offset=${currentOffset}&limit=${limit}`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error('Gagal mengambil data dari server');
      
      const data = await response.json();
      
      if (data.length === 0 || data.length < limit) {
        setHasMore(false);
      }
      
      if (currentOffset === 0) {
        setProducts(data);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
      } else {
        setProducts(prev => [...prev, ...data]);
      }

    } catch (error) {
      setIsError(true);
      if (error.name === 'AbortError') {
        setErrorMessage('Koneksi terlalu lambat (Timeout). Silakan coba lagi.');
      } else {
        setErrorMessage('Gagal terhubung ke peladen. Periksa koneksi Anda.');
      }
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  }, []);

  // 3. Effect hanya memanggil API jika data (cache) benar-benar kosong
  useEffect(() => {
    if (products.length === 0) {
      const fetchInitialProducts = setTimeout(() => {
        fetchProducts(0);
      }, 0);

      return () => clearTimeout(fetchInitialProducts);
    }
  }, [fetchProducts, products.length]);

  const handleLoadMore = () => {
    setIsFetchingMore(true);
    setIsError(false);
    const nextOffset = offset + limit;
    setOffset(nextOffset);
    fetchProducts(nextOffset);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setIsError(false);
    fetchProducts(offset);
  };

  const categories = ['Semua', ...new Set(products.map(item => item.category?.name).filter(Boolean))];
  const filteredProducts = activeCategory === 'Semua' 
    ? products 
    : products.filter(item => item.category?.name === activeCategory);

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

        {isLoading && <SkeletonLoader />}

        {isError && (
          <div className="text-center py-16 bg-red-50 rounded-2xl flex flex-col items-center gap-4 border border-red-100">
            <p className="text-red-600 font-medium">{errorMessage}</p>
            <button 
              onClick={handleRetry}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="flex flex-col gap-10">
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
            
            {hasMore && activeCategory === 'Semua' && (
              <div className="flex justify-center mt-4">
                <button 
                  onClick={handleLoadMore}
                  disabled={isFetchingMore}
                  className="bg-white border-2 border-[#6B2346] text-[#6B2346] hover:bg-[#6B2346] hover:text-white px-8 py-3 rounded-full text-sm font-bold transition-colors disabled:opacity-50"
                >
                  {isFetchingMore ? 'Memuat...' : 'Muat Lebih Banyak'}
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;