const Features = () => {
  return (
    <section id="fitur" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      
      {/* Judul Bagian */}
      <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
        <span className="text-[#c19b6c] text-xs font-bold tracking-widest uppercase mb-4">
          Kenapa Indoinvite
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
          Semua yang Anda butuhkan <br className="hidden md:block" />
          untuk momen sempurna
        </h2>
      </div>

      {/* Grid 3 Kolom dengan Card Pembungkus */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Fitur 1 */}
        <div className="flex flex-col items-start text-left p-8 bg-[#FAF6F0] rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Template Elegan</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Ratusan desain yang dikurasi oleh desainer profesional untuk setiap jenis acara.
          </p>
        </div>

        {/* Fitur 2 */}
        <div className="flex flex-col items-start text-left p-8 bg-[#FAF6F0] rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Editor Mudah</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Sesuaikan teks, warna, dan foto tanpa perlu keahlian desain apa pun.
          </p>
        </div>

        {/* Fitur 3 */}
        <div className="flex flex-col items-start text-left p-8 bg-[#FAF6F0] rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">RSVP Otomatis</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Kelola konfirmasi kehadiran tamu secara real-time dalam satu dasbor.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;