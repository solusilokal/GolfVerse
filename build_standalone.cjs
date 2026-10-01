const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

console.log('[1/3] Memulai bundling JavaScript...');
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty',
    '.webp': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.svg': 'dataurl'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('✓ Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

console.log('[2/3] Membaca stylesheet CSS dari dist/assets/...');
let cssContent = '';
if (fs.existsSync('dist/assets')) {
  const distAssets = fs.readdirSync('dist/assets');
  const cssFile = distAssets.find(f => f.endsWith('.css'));
  if (cssFile) {
    cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
    console.log('✓ CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');
  }
}

if (!cssContent) {
  console.warn('[Peringatan] CSS dari dist/assets tidak ditemukan. Pastikan sudah menjalankan "npm run build".');
}

// Convert favicon to base64 Data URI for standalone preview
let faviconDataUri = './favicon.png';
if (fs.existsSync('public/favicon.png')) {
  const faviconBuffer = fs.readFileSync('public/favicon.png');
  faviconDataUri = `data:image/png;base64,${faviconBuffer.toString('base64')}`;
}

console.log('[3/3] Menyusun file standalone.html...');
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#064e3b" />

    <title>GolfVerse - Pengalaman Golf Premium di Ujung Jari Anda</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="GolfVerse - Pengalaman Golf Premium di Ujung Jari Anda" />
    <meta name="description" content="Nikmati padang golf 18-hole berstandar internasional dengan pemandangan alam memukau. Destinasi sempurna bagi pegolf amatir maupun profesional di GolfVerse." />
    <meta name="keywords" content="golf, padang golf, golfverse, tee time, driving range, caddy, green fee, palangka raya" />
    <meta name="author" content="GolfVerse" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://solusilokal.github.io/GolfVerse/" />
    <meta property="og:site_name" content="GolfVerse" />
    <meta property="og:title" content="GolfVerse - Pengalaman Golf Premium di Ujung Jari Anda" />
    <meta property="og:description" content="Nikmati padang golf 18-hole berstandar internasional dengan pemandangan alam memukau di GolfVerse. Reservasi Tee Time mudah via WhatsApp." />
    <meta property="og:image" content="./og-image.png" />
    <meta property="og:image:secure_url" content="./og-image.png" />
    <meta property="og:image:type" content="image/png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/GolfVerse/" />
    <meta name="twitter:title" content="GolfVerse - Pengalaman Golf Premium di Ujung Jari Anda" />
    <meta name="twitter:description" content="Nikmati padang golf 18-hole berstandar internasional dengan pemandangan alam memukau di GolfVerse." />
    <meta name="twitter:image" content="./og-image.png" />

    <link rel="image_src" href="./og-image.png" />

    <!-- Favicon with inline base64 for instant file:// preview support -->
    <link rel="icon" type="image/png" href="${faviconDataUri}" />
    <link rel="shortcut icon" href="${faviconDataUri}" />
    <link rel="apple-touch-icon" href="${faviconDataUri}" />

    <!-- Google Fonts: Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#f4f7f6]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('✓ standalone.html berhasil dibuat! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
