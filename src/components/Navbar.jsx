const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* Placeholder logo icon, bisa diganti gambar nanti */}
            <div className="w-6 h-6 bg-[#6B2346] rounded-sm"></div>
            <span className="text-xl font-bold text-gray-800">
              indoinvite
            </span>
          </div>

          {/* Desktop Menu - Disembunyikan di layar kecil (mobile) */}
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

          {/* Tombol CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="#" 
              className="bg-[#6B2346] hover:bg-[#531a35] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Buat Undangan
            </a>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-[#6B2346] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;