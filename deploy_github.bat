@echo off
title Deploy to GitHub - GolfVerse
echo ========================================================
echo          DEPLOY PROYEK KE GITHUB REPOSITORY
echo          Repository: solusilokal/GolfVerse
echo ========================================================
echo.

echo [1/3] Melakukan build aset produksi (npm run build)...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo [ERROR] Build gagal. Silakan periksa pesan error di atas.
    pause
    exit /b 1
)
echo [OK] Build berhasil.
echo.

echo [2/3] Menyiapkan commit git...
git add .
git commit -m "feat: complete GolfVerse mini website for deployment" 2>nul
echo [OK] Git commit siap.
echo.

echo [3/3] Mengupload (Push) ke GitHub: https://github.com/solusilokal/GolfVerse ...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUKSES] Proyek berhasil di-deploy ke GitHub!
    echo Repository: https://github.com/solusilokal/GolfVerse
    echo ========================================================
) else (
    echo.
    echo [INFO] Jika push gagal karena izin akses, pastikan akun GitHub Anda memiliki akses write ke repository solusilokal/GolfVerse.
)
echo.
pause
