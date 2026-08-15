const CTA = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
      <div className="bg-[#6B2346] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        
        {/* Dekorasi Latar Belakang  */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c19b6c] opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Siap membuat momenmu <br className="hidden md:block" /> tak terlupakan?
          </h2>
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Bergabung dengan ribuan pasangan dan keluarga yang mempercayakan momen mereka pada Indoinvite.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#c19b6c] hover:bg-[#a8865d] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Buat Undangan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;