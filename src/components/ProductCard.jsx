const ProductCard = ({ templateName, price, imageUrl }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={templateName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Menggunakan layanan placeholder online agar dijamin selalu muncul saat gambar API rusak
            e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=Gambar+Rusak'; 
          }}
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate" title={templateName}>
          {templateName}
        </h3>
        <div className="flex justify-between items-center mt-auto pt-4">
          <span className="font-bold text-gray-700">Rp {price}K</span>
          
          <button className="text-sm font-semibold text-[#6B2346] hover:text-[#531a35] flex items-center gap-1 transition-colors">
            Pratinjau 
            <span aria-hidden="true" className="text-[#c19b6c]">&rarr;</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;