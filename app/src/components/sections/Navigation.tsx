import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 glass border-b border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="relative group"
            >
              <span className="text-2xl font-bold gradient-text">MP</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-gray-300 hover:text-white animated-underline transition-colors duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="/cv-matheus-paizante.pdf"
                download
                className="btn-gradient px-5 py-2.5 rounded-full text-sm font-medium text-white flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-lg text-gray-300 hover:text-white py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a
              href="/cv-matheus-paizante.pdf"
              download
              className="btn-gradient px-5 py-3 rounded-full text-sm font-medium text-white flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
