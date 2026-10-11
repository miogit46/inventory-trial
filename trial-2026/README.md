# Toko Alat Musik — GitHub Pages

> **Peringatan privasi:** repositori dan situs ini disiapkan untuk publik. File `index.html` berisi katalog produk beserta harga dan jumlah stok. Siapa pun yang dapat membuka repositori atau situs dapat melihat data tersebut. Jangan unggah bila data ini tidak boleh dipublikasikan.

## Isi paket

- `index.html` — aplikasi.
- `manifest.webmanifest` — metadata aplikasi yang dapat dipasang.
- `service-worker.js` — cache offline dasar.
- `icon-192.png` dan `icon-512.png` — ikon pemasangan.

## Unggah versi baru tanpa mengganti aplikasi yang sudah ada

Repositori `miogit46/toko-musik-app` sudah ada dan bersifat **Public**. Berkas root yang sekarang dipakai aplikasi lama tidak perlu diganti: unggah paket ini ke subfolder baru bernama `trial-2026`.

1. Masuk ke akun GitHub, lalu buka <https://github.com/miogit46/toko-musik-app>. Jangan kirimkan kata sandi, kode verifikasi, atau token ke siapa pun.
2. Klik **Add file → Create new file**.
3. Pada nama file, ketik `trial-2026/README.md`. Isi singkat `PWA Toko Musik versi baru.` lalu klik **Commit changes**. Langkah ini membuat folder `trial-2026`.
4. Buka folder `trial-2026` yang baru dibuat.
5. Klik **Add file → Upload files**.
6. Buka folder `github-pages-toko-musik` di komputer dan unggah keenam berkasnya: `index.html`, `manifest.webmanifest`, `service-worker.js`, `icon-192.png`, `icon-512.png`, dan `README.md`. Unggah langsung ke folder `trial-2026`, jangan ke root repositori.
7. Masukkan pesan commit `Tambahkan PWA Toko Musik versi baru`, lalu klik **Commit changes**.
8. Buka tab **Settings → Pages**. Jika Pages belum aktif, pada **Build and deployment** pilih **Deploy from a branch**, lalu branch **main** dan folder **/(root)**; klik **Save**. Karena aplikasi berada dalam subfolder, halaman lama dan berkas root tetap tidak berubah.
9. Tunggu deployment selesai. Alamat PWA yang diharapkan adalah <https://miogit46.github.io/toko-musik-app/trial-2026/>.
10. Buka alamat tersebut di Chrome pada ponsel, lalu pilih **Instal aplikasi** atau **Tambahkan ke layar utama** dari menu browser.

## Memperbarui aplikasi

1. Ganti file `index.html` lokal dengan versi terbaru.
2. Pada repositori, pilih **Add file → Upload files** dan unggah file yang berubah dengan nama/path yang sama.
3. Pilih **Commit changes**. Setelah deployment selesai, muat ulang situs; mungkin perlu ditutup lalu dibuka kembali agar service worker menerima versi baru.

GitHub Pages menggunakan HTTPS, yang diperlukan untuk instalasi PWA dan service worker. Data produk disimpan di penyimpanan browser perangkat, bukan disinkronkan otomatis antarpengguna atau perangkat. Repo dan situs dapat dilihat publik; siapa pun dapat mengunduh file HTML yang memuat katalog, harga, dan stok.
