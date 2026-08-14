export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Kolom 1: Info Brand */}
          <div className="md:col-span-2">
             <span className="text-2xl font-serif font-bold text-amber-700 tracking-wide mb-4 block">
              Indo<span className="text-slate-800">Invite.</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Solusi undangan digital masa kini. Lebih cepat, lebih hemat, dan peduli lingkungan. Berbasis di Bali, melayani seluruh Indonesia.
            </p>
          </div>
          
          {/* Kolom 2: Link Cepat */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-amber-600 transition">Undangan Pernikahan</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Undangan Metatah</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Sistem Titip Kado</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>WhatsApp: 0812-XXXX-XXXX</li>
              <li>Email: halo@indoinvite.com</li>
              <li>Tabanan, Bali</li>
            </ul>
          </div>
        </div>

        {/* Garis bawah & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; 2026 IndoInvite. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-600">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-amber-600">Kebijakan Privasi</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}