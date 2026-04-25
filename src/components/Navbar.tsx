import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { useLang } from '../i18n/useLang';
import { translations, t } from '../i18n/translations';

const PHONE = '50686684823';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useLang();

  const navLinks = [
    { label: t(translations.nav.tours, lang),    href: '#tours' },
    { label: t(translations.nav.faq, lang),      href: '#faq' },
    { label: t(translations.nav.contacto, lang), href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  return (
    <nav
      id="navbar"
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16"
      style={{ transition: 'all 0.5s ease' }}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6 rounded-full transition-all duration-500 ${
          scrolled ? 'liquid-glass-strong shadow-xl' : ''
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Jireh Adventure Home">
          <img
            src="https://res.cloudinary.com/dkwvaxxdw/image/upload/f_auto,q_auto,w_80/v1777091156/ChatGPT_Image_24_abr_2026_22_24_53_v7edc4.png"
            alt="Jireh Adventure Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-full"
            loading="eager"
          />
          <span className="font-heading font-[800] text-xl tracking-widest uppercase hidden sm:inline">
            <span className="text-[#0B3D5E]">JIREH </span>
            <span className="text-[#1A9E75]">ADVENTURE</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-body font-medium tracking-wide text-[#0B3D5E]/60 hover:text-[#0B3D5E] transition-colors px-3 py-1.5 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Lang Toggle + CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-body font-semibold tracking-wide text-[#0B3D5E]/70 hover:text-[#0B3D5E] transition-colors cursor-pointer border border-[#0B3D5E]/10 hover:border-[#0B3D5E]/20"
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>

          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(t(translations.whatsapp.message, lang))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A9E75] text-white rounded-full px-4 py-2 font-body font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:bg-[#158a65] transition-colors"
          >
            {t(translations.nav.cta, lang)}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#0B3D5E] p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-4 liquid-glass-strong rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-body font-medium text-[#0B3D5E]/70 hover:text-[#0B3D5E] transition-colors py-2.5 px-4 rounded-xl hover:bg-white/40"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
