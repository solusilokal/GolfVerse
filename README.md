# GolfVerse - Landing Page Preview

Mini website landing page untuk padang golf premium **GolfVerse** (Solusilokal.id).

## Cara Menjalankan Preview

### Cara 1: Menggunakan File Batch (Paling Cepat & Praktis)
Cukup klik dua kali (double click) salah satu file berikut:
- 👉 **`preview.bat`** : Menu interaktif (bisa buka versi Standalone langsung tanpa server, atau jalankan Dev Server)
- 👉 **`start_preview.bat`** : Langsung menjalankan Vite Dev Server (`npm run dev`)

Browser akan otomatis membuka `http://localhost:5173/` atau file preview.

---

### Cara 2: Buka Langsung File Standalone
Klik dua kali file:
- 👉 **`standalone.html`**

File ini berjalan 100% mandiri di peramban (Chrome, Edge, Firefox, Safari) tanpa perlu menjalankan server atau Node.js!

---

### Cara 3: Melalui Terminal / Command Prompt
Buka terminal di folder ini, lalu jalankan:
```bash
npm run dev
```
Buka URL yang ditampilkan ([http://localhost:5173/](http://localhost:5173/)) di browser Anda.

---

### Cara Membangun Versi Produksi (Build)
Untuk membuat file HTML/CSS/JS siap pakai (deployment):
```bash
npm run build
```
File hasil build akan berada di dalam folder `dist/`.

Untuk memperbarui file `standalone.html`:
```bash
npm run standalone
```

---

## Struktur File
- [`src/App.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/src/App.tsx) : Komponen utama landing page React.
- [`src/index.css`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/src/index.css) : Styling Tailwind CSS & custom styling (Outfit font, golf-gradient).
- [`golfverse_landing_page.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/golfverse_landing_page.tsx) : Kode sumber awal komponen landing page.
- [`standalone.html`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/standalone.html) : Versi single-file mandiri untuk preview offline/instan.
- [`preview.bat`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/preview.bat) : Skrip launcher preview interaktif.
- [`start_preview.bat`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20golf/start_preview.bat) : Skrip 1-klik untuk dev server.
