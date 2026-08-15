const Pricing = () => {
  return (
    <section id="harga" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      <div className="text-center mb-16">
        <span className="text-[#c19b6c] text-xs font-bold tracking-widest uppercase mb-4 block">
          Paket Harga
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
          Harga transparan, tanpa biaya <br className="hidden md:block" /> tersembunyi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        
        {/* Paket Basic */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">Gratis</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">Untuk mencoba fitur dasar</p>
          <ul className="space-y-4 mb-8 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> 1 undangan aktif</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> 10 template dasar</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> RSVP sederhana</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Sub-domain indoinvite</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-[#6B2346] hover:text-[#6B2346] transition-colors">
            Pilih Paket
          </button>
        </div>

        {/* Paket Premium  */}
        <div className="bg-[#6B2346] rounded-3xl p-8 border border-[#531a35] shadow-xl relative transform md:-translate-y-4">
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="bg-[#c19b6c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Paling Populer
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">Rp 149K</span>
            <span className="text-[#e2b785] text-sm ml-2">/acara</span>
          </div>
          <p className="text-sm text-gray-300 mb-6">Tampil elegan dan lengkap</p>
          <ul className="space-y-4 mb-8 text-sm text-white">
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Undangan tanpa batas</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> 300+ template premium</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> RSVP + galeri foto</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Custom domain</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Musik & animasi</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-[#c19b6c] text-white font-medium hover:bg-[#a8865d] transition-colors">
            Pilih Paket
          </button>
        </div>

        {/* Paket Business  */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">Rp 349K</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">Untuk agensi & WO</p>
          <ul className="space-y-4 mb-8 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Semua fitur Premium</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Manajemen tamu lanjutan</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Analitik kehadiran</li>
            <li className="flex items-center gap-2"><span className="text-[#c19b6c]">✓</span> Dukungan prioritas</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-[#6B2346] hover:text-[#6B2346] transition-colors">
            Pilih Paket
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;