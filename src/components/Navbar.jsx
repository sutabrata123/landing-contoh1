const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="/image.png" 
              alt="Indoinvite Logo" 
              className="h-6 md:h-8 w-auto object-contain" 
            />
          </div>

          {/* Menu Teks dan Tombol CTA dibungkus dalam satu kontainer flex agar merapat ke kanan */}
          <div className="flex items-center gap-8">
            
            <div className="hidden md:flex space-x-8">
              <a href="#fitur" className="text-gray-500 hover:text-[#6B2346] transition-colors text-sm font-medium">
                Fitur
              </a>
              <a href="#template" className="text-gray-500 hover:text-[#6B2346] transition-colors text-sm font-medium">
                Template
              </a>
              <a href="#harga" className="text-gray-500 hover:text-[#6B2346] transition-colors text-sm font-medium">
                Harga
              </a>
            </div>

            <a 
              href="#" 
              className="bg-[#6B2346] hover:bg-[#531a35] text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors"
            >
              Buat Undangan
            </a>
            
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;