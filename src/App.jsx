// 1. Import komponen yang sudah kita buat tadi
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    // Kita bungkus semua komponen dengan div utama
    <div className="min-h-screen font-sans bg-gray-100">
      
      {/* 2. Panggil komponennya seperti menulis tag HTML biasa */}
      <Header />
      
      <main>
        <Hero />
        {/* Nanti kamu bisa tambah komponen lain di sini, misal: <Fitur /> */}
      </main>
      
      <Footer />
      
    </div>
  );
}