export default function Hero() {
  return (
    // overflow-hidden untuk mencegah elemen keluar batas, pt-20 untuk jarak dari header
    <section className="relative bg-slate-50 overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="text-center md:text-left z-10">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6">
            ✨ PLATFORM UNDANGAN #1 DI BALI
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
            Sebarkan Momen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
              Bahagiamu
            </span> Dengan Elegan.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Buat undangan digital pernikahan, metatah, hingga otonan hanya dalam 5 menit. Mudah, praktis, dan tanpa batas revisi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition shadow-lg hover:shadow-amber-600/30">
              Lihat Katalog Tema
            </button>
            <button className="px-8 py-4 bg-white text-slate-800 font-bold rounded-full border border-gray-200 hover:border-amber-600 hover:text-amber-600 transition shadow-sm">
              Cara Kerja
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Gambar Estetik */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-md z-10">
          {/* Efek bayangan warna di belakang gambar */}
          <div className="absolute top-0 -inset-4 bg-gradient-to-r from-amber-200 to-rose-200 opacity-50 blur-2xl rounded-full"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" 
            alt="Ilustrasi Undangan Pernikahan" 
            className="relative rounded-2xl shadow-2xl border-4 border-white object-cover h-[500px] w-full"
          />
        </div>
        
      </div>
    </section>
  );
}