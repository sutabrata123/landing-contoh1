export default function Header() {
  return (
    // sticky top-0 z-50: Membuat header selalu di atas saat di-scroll
    // bg-white/80 backdrop-blur-md: Efek kaca transparan (glassmorphism)
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      
      {/* max-w-6xl mx-auto: Membatasi lebar maksimal agar tidak terlalu melar di layar besar */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-amber-700 tracking-wide">
            Indo<span className="text-slate-800">Invite.</span>
          </span>
        </div>

        {/* Navigasi (Sembunyi di HP, tampil di layar medium ke atas) */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-gray-600">
            <li><a href="#beranda" className="hover:text-amber-600 transition">Beranda</a></li>
            <li><a href="#fitur" className="hover:text-amber-600 transition">Fitur</a></li>
            <li><a href="#tema" className="hover:text-amber-600 transition">Tema</a></li>
            <li><a href="#harga" className="hover:text-amber-600 transition">Harga</a></li>
          </ul>
        </nav>

        {/* Tombol Aksi */}
        <div className="flex gap-3">
          <button className="hidden md:block px-5 py-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition">
            Masuk
          </button>
          <button className="px-5 py-2 text-sm font-bold text-white bg-slate-800 rounded-full hover:bg-amber-600 transition-colors shadow-md">
            Buat Undangan
          </button>
        </div>
      </div>
    </header>
  );
}