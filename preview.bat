@echo off
title GolfVerse Preview Launcher
echo ===================================================
echo        GolfVerse - Mini Website Preview
echo ===================================================
echo.
echo Pilih mode preview:
echo [1] Buka langsung di Browser (Paling Cepat / Standalone)
echo [2] Jalankan Vite Dev Server (npm run dev / Hot Reload)
echo.
set "choice=1"
set /p choice="Pilihan Anda (1/2, default: 1): "

if "%choice%"=="2" (
    where node >nul 2>nul
    if %errorlevel% equ 0 (
        echo [INFO] Menjalankan Vite Dev Server...
        call npm.cmd run dev
    ) else (
        echo [WARNING] Node.js tidak terdeteksi di PATH. Membuka versi Standalone...
        start "" "standalone.html"
    )
) else (
    echo [INFO] Membuka website di browser default Anda...
    if exist "standalone.html" (
        start "" "standalone.html"
    ) else (
        start "" "dist/index.html"
    )
)
