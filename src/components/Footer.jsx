const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center cursor-pointer">
          <img 
            src="/image.png" 
            alt="Indoinvite Logo" 
            className="h-6 w-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-300" 
          />
        </div>

        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Indoinvite. Semua hak dilindungi.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;