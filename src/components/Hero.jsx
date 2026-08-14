const Hero = () => {
  return (
    <section className="bg-[#FFFBF7] py-12 md:py-20">
      {/* Warna krem/coklat muda ditambahkan pada background section di atas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Kolom Kiri: Teks dan Tombol */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            
            {/* Label kecil di atas judul */}
            <span className="text-[#c19b6c] text-xs font-bold tracking-widest uppercase">
              Undangan Digital Premium
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-serif">
              Rayakan momen <br className="hidden lg:block" />
              berharga dengan <br className="hidden lg:block" />
              undangan yang berkesan
            </h1>
            
            <p className="text-sm md:text-base text-gray-600 max-w-md leading-relaxed">
              Buat undangan pernikahan, ulang tahun, dan acara spesial dalam hitungan menit. Ratusan template elegan, RSVP otomatis, dan galeri foto dalam satu tautan.
            </p>
            
            {/* Grup Tombol CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a 
                href="#" 
                className="bg-[#6B2346] hover:bg-[#531a35] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Mulai Gratis
              </a>
              <a 
                href="#template" 
                className="text-gray-900 hover:text-[#6B2346] text-sm font-medium flex items-center gap-2 transition-colors"
              >
                Lihat Template <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            
            {/* Angka Statistik */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-8 pt-8 border-t border-gray-200/60">
              <div>
                <h3 className="text-2xl font-bold text-[#6B2346]">120K+</h3>
                <p className="text-xs text-gray-500 mt-1">Undangan dibuat</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B2346]">300+</h3>
                <p className="text-xs text-gray-500 mt-1">Template desain</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B2346]">4.9/5</h3>
                <p className="text-xs text-gray-500 mt-1">Rating pengguna</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar/Ilustrasi */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-center items-center h-[350px] md:h-[500px]">
              <img 
                src="/hero img.jpg" 
                alt="Aplikasi Indoinvite" 
                className="max-h-full object-contain rounded-xl shadow-sm hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;