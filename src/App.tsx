import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Calendar,
  Star,
  Quote,
  Flag,
  Image,
  Trophy,
  Users,
  ChevronDown,
  Info,
  Map,
  Car,
  TreePine
} from 'lucide-react';
import profileImg from './assets/profile.png';
import heroImg from './assets/hero-bg.jpg';
import hole1 from './assets/hole-1.webp';
import hole2 from './assets/hole-2.webp';
import hole3 from './assets/hole-3.webp';
import hole4 from './assets/hole-4.webp';

const pageData = {
  name: "GolfVerse",
  phone: "6289529605601",
  address: "Jl. Hijau Lestari No.18, Palangka Raya, Kalteng.",
  title: "Pengalaman Golf Premium di Ujung Jari Anda",
  description: "Nikmati padang golf 18-hole berstandar internasional dengan pemandangan alam memukau. Destinasi sempurna bagi pegolf amatir maupun profesional untuk menyempurnakan ayunan Anda.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps?q=Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "GolfVerse menawarkan harmoni sempurna antara tantangan olahraga dan keindahan alam. Dirancang khusus untuk memberikan kenyamanan bermain dengan kualitas rumput setara turnamen dunia, GolfVerse menjadi oase bagi para pecinta golf.",
  history: "Berdiri sejak tahun 2015, GolfVerse bermula dari visi sekumpulan pegolf lokal yang memimpikan fasilitas berstandar internasional di jantung Kalimantan. Kini, area seluas 50 hektar ini telah berevolusi menjadi destinasi golf prestisius yang rutin menyelenggarakan turnamen tingkat nasional.",
  locationHighlights: [
    { title: "15 Menit", subtitle: "Dari Bandara", icon: Clock },
    { title: "Akses Utama", subtitle: "Jalur Strategis", icon: Car },
    { title: "Pemandangan", subtitle: "Hutan Tropis", icon: TreePine }
  ],
  catalogPhotos: [
    hole1,
    hole2,
    hole3,
    hole4,
  ],
  pricing: [
    { type: "Weekday (Senin - Jumat)", price: "Rp 750.000", incl: "Green Fee, Golf Cart & Caddy" },
    { type: "Weekend & Hari Libur", price: "Rp 1.250.000", incl: "Green Fee, Golf Cart & Caddy" },
    { type: "Driving Range", price: "Rp 150.000", incl: "Per 100 Bola" }
  ],
  faqs: [
    { q: "Apakah ada aturan berpakaian (Dress Code)?", a: "Ya. Pemain diwajibkan memakai kemeja/kaos berkerah, celana bahan/chinos, dan sepatu golf. Dilarang menggunakan celana jeans dan sandal." },
    { q: "Apakah disediakan penyewaan stik golf?", a: "Tentu. Kami menyediakan penyewaan stik golf full-set dengan berbagai merek terkemuka di Pro Shop kami." },
    { q: "Bisakah pemula bermain di sini?", a: "Sangat bisa. Kami memiliki area Driving Range untuk berlatih, serta akademi golf dengan instruktur profesional untuk pemula." }
  ],
  testimonials: [
    { name: "Budi Santoso", rating: 5, text: "Course-nya sangat menantang tapi menyenangkan. Rumput fairway dan green dirawat dengan sangat sempurna." },
    { name: "Andi Wijaya", rating: 5, text: "Pelayanan caddy sangat profesional dan sangat membantu membaca arah angin. Pasti akan kembali lagi." },
    { name: "Siti Rahma", rating: 4, text: "Clubhousenya nyaman sekali untuk bersantai setelah 18 hole. Makanannya enak dan fasilitas lokernya bersih." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; images: string[]; currentIndex: number }>({
    isOpen: false,
    images: [],
    currentIndex: 0
  });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const flight = formData.get('flight');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Reservasi%20${encodeURIComponent(pageData.name)},%20saya%20${encodeURIComponent(String(name || ''))}.%20Saya%20ingin%20booking%20Tee%20Time%20untuk%20tanggal%20${encodeURIComponent(String(date || ''))}%20waktu%20${encodeURIComponent(String(time || ''))}%20sebanyak%20${encodeURIComponent(String(flight || ''))}%20pax.%20Catatan:%20${encodeURIComponent(String(notes || ''))}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  const shareToFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  const shareToTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');

  return (
    <>
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-slate-900">
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/75 to-black/25"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-28 h-28 rounded-full p-2 bg-white shadow-2xl border-2 border-emerald-400/40 mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-lg">
              {pageData.name}
            </h1>
            <p className="text-emerald-50 font-light text-[15px] leading-relaxed mb-8 max-w-[95%] opacity-90">
              {pageData.title}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg> TikTok
                </a>
              </div>
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium w-full">
                <MapPin size={18} /> Lokasi
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#1e3a8a] text-white rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#172554] transition-all shadow-xl"
            >
              Booking The Time
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section className="pt-12 px-6 bg-white relative">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2.5 rounded-full flex-shrink-0 flex items-center justify-center">
                <Flag className="text-[#166534]" size={24} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 m-0 leading-none">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
              {pageData.about}
            </p>
          </div>
        </section>

        {/* Sejarah Perjalanan Section */}
        <section className="py-10 px-6 bg-slate-50 border-y border-slate-200">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="text-[#1e3a8a]" size={22} />
            <h2 className="text-xl font-bold text-slate-800">Sejarah Perjalanan</h2>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-0"></div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              {pageData.history}
            </p>
          </div>
        </section>

        {/* Katalog Lapangan Section */}
        <section className="pt-10 pb-6 bg-white">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Image className="text-[#166534]" size={22} />
              <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Katalog Lapangan</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8">Eksplorasi keindahan hole demi hole di GolfVerse.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalogPhotos.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.catalogPhotos, idx)}
                className="snap-center shrink-0 w-[260px] aspect-[4/5] rounded-[1.5rem] overflow-hidden cursor-pointer relative group shadow-lg"
              >
                <img src={img} alt={`Katalog Hole ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">Hole {idx + 1}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Green Fee & Harga Section */}
        <section className="py-10 px-6 bg-[#064e3b] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="mb-6 flex flex-col gap-1 relative z-10">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Green Fee & Harga</h2>
            <p className="text-emerald-200 text-sm">Tarif kompetitif untuk pengalaman tak tertandingi.</p>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {pageData.pricing.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                <h3 className="text-blue-200 font-bold text-sm mb-1">{item.type}</h3>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-extrabold text-white">{item.price}</span>
                  <span className="text-emerald-100 text-xs text-right max-w-[120px]">{item.incl}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lokasi & Akses Section */}
        <section className="py-10 px-6 bg-white border-b border-slate-200">
          <div className="mb-6 flex items-center gap-2">
            <Map className="text-[#1e3a8a]" size={22} />
            <h2 className="text-xl font-extrabold text-slate-800">Lokasi & Akses</h2>
          </div>
          
          {/* Highlight Cards Grid - Rapi, Simetris, & Berimbang */}
          <div className="grid grid-cols-3 gap-2.5 w-full mb-6">
            {pageData.locationHighlights.map((loc, idx) => {
              const IconComp = loc.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center p-3 bg-emerald-50/70 border border-emerald-100/90 rounded-2xl text-center transition-all hover:bg-emerald-100/60"
                >
                  <div className="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#166534] mb-2 border border-emerald-100">
                    <IconComp size={16} />
                  </div>
                  <span className="text-[12px] font-bold text-slate-800 leading-tight">{loc.title}</span>
                  <span className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{loc.subtitle}</span>
                </div>
              );
            })}
          </div>
          
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Alamat Lokasi</span>
              <p className="text-[13px] text-slate-700 font-medium leading-relaxed m-0">{pageData.address}</p>
            </div>
          </div>

          <a 
            href={pageData.links.maps} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-[#166534] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            Lihat Rute di Google Maps <ChevronRight size={16} />
          </a>
        </section>

        {/* FAQ Section */}
        <section className="py-10 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-6 flex items-center gap-2">
            <Info className="text-[#166534]" size={22} />
            <h2 className="text-xl font-extrabold text-slate-800">Tanya Jawab (FAQ)</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-[14px] text-slate-700 focus:outline-none"
                >
                  {faq.q}
                  <ChevronDown size={18} className={`text-slate-400 transition-transform ${activeFAQ === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFAQ === idx && (
                  <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 px-6 bg-white border-b border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#1e3a8a]" size={22} />
              <h2 className="text-xl font-extrabold text-slate-800">Apa Kata Pegolf</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-emerald-50/50 p-5 rounded-3xl border border-emerald-100 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#166534] flex items-center justify-center text-white font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="py-12 px-6 bg-slate-50">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-lg relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-100 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Reservasi Tee Time</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Pesan slot bermain Anda dengan mudah. Tim kami akan segera mengkonfirmasi ketersediaan via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 uppercase">Nama Lengkap</label>
                <input 
                  type="text" name="name" required placeholder="Cth: Budi Santoso"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[12px] font-bold text-slate-500 uppercase">Tanggal</label>
                  <input 
                    type="date" name="date" required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[12px] font-bold text-slate-500 uppercase">Waktu</label>
                  <select 
                    name="time" required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534] appearance-none"
                  >
                    <option value="">Pilih Sesi...</option>
                    <option value="Morning (06:00 - 10:00)">Pagi (06:00 - 10:00)</option>
                    <option value="Afternoon (11:00 - 15:00)">Siang (11:00 - 15:00)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 uppercase">Jumlah Pemain (Pax)</label>
                <select 
                  name="flight" required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534] appearance-none"
                >
                  <option value="">Pilih pax...</option>
                  <option value="1 Orang">1 Orang</option>
                  <option value="2 Orang">2 Orang</option>
                  <option value="3 Orang">3 Orang</option>
                  <option value="4 Orang (1 Flight)">4 Orang (1 Flight)</option>
                  <option value="Lebih dari 4 Orang">Lebih dari 4 Orang</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 uppercase">Catatan Tambahan</label>
                <textarea 
                  name="notes" rows={2} placeholder="Cth: Sewa 2 set stik golf, butuh buggy tambahan..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#166534] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#064e3b] transition-colors shadow-md"
              >
                Kirim Booking via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-800 text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8 mb-2">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] tracking-wide font-medium hover:text-slate-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* Sticky Mobile CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-3.5 bg-[#166534] backdrop-blur-xl border border-emerald-500/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(22,101,52,0.4)] hover:bg-[#064e3b] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Booking The Time</span>
            <div className="bg-[#1e3a8a] text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.images[lightbox.currentIndex]} alt="Lightbox View" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button 
                onClick={() => setShowShareModal(false)} 
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Close share modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border border-slate-200 mb-4 object-contain bg-white p-1" />
              <h4 className="text-slate-900 font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button 
                  onClick={copyToClipboard} 
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                  aria-label="Copy link"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button 
                  onClick={shareToTwitter} 
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="Share on X"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button 
                  onClick={shareToFacebook} 
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button 
                  onClick={shareToWhatsApp} 
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
