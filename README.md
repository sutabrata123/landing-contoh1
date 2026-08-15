# Indoinvite Landing Page

Proyek ini adalah hasil pengerjaan tes teknis untuk posisi magang di Indoinvite. Aplikasi ini berupa *landing page* responsif yang dibangun menggunakan React dan Vite, serta mengintegrasikan API eksternal untuk menampilkan galeri template secara dinamis.

## Fitur Utama

- **Desain Responsif:** Tata letak yang beradaptasi dengan sempurna di perangkat seluler (HP) maupun *desktop*, memastikan pengalaman pengguna yang konsisten.
- **Integrasi API Dinamis:** Mengambil data produk dari *public API* (`api.escuelajs.co`) untuk mengisi bagian Galeri secara *real-time*.
- **Filter Kategori Interaktif:** Pengguna dapat menyaring desain template di Galeri berdasarkan kategori spesifik menggunakan *React State*.
- **Error Handling Gambar:** Implementasi *fallback* otomatis ke gambar *placeholder* jika API mengirimkan tautan gambar yang rusak atau tidak valid.
- **Arsitektur Komponen Bersih:** Pemisahan *smart component* (logika) dan *dumb component* (UI) untuk menjaga *clean code*.

## Teknologi yang Digunakan

- **React (Vite):** *Framework* utama untuk membangun antarmuka pengguna yang cepat dan modern.
- **Tailwind CSS v4:** *Utility-first CSS framework* untuk penataan gaya yang efisien dan sesuai dengan referensi desain.
- **JavaScript (ES6+):** Digunakan untuk logika utama aplikasi, pemrosesan antarmuka, dan pemanggilan antarmuka pemrograman aplikasi (API).

## Cara Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer Anda:

1. Kloning repositori ini (atau unduh file ZIP-nya):
   ```bash
   git clone [https://github.com/sutabrata123/landing-contoh1.git]

2. Masuk Ke directory Proyek:
   cd landing-contoh1

3. instal semua dependensu:
   npm install

4. Jalankan server pengembangan lokal:
   npm run dev

5. Buka http://localhost:5173 di browser Anda untuk berinteraksi dengan aplikasi

noted:
📂 Struktur Direktori Utama
Komponen utama dipecah menjadi beberapa file tunggal untuk kemudahan pemeliharaan:

Hero.jsx: Menyajikan pesan sambutan utama dan statistik.

Features.jsx: Menjabarkan nilai jual utama layanan (Template, Editor, RSVP).

Gallery.jsx & ProductCard.jsx: Menangani pengambilan API, logika filter, dan pencetakan kartu produk.

Pricing.jsx: Menampilkan daftar paket harga secara komparatif.

Navbar.jsx, CTA.jsx & Footer.jsx: Komponen navigasi dan penutup halaman.