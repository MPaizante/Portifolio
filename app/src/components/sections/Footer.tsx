import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/matheus-p-174a35112', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/MPaizante', label: 'GitHub' },
  { icon: Mail, href: 'mailto:matheus_paizante@hotmail.com', label: 'Email' },
];

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll('.footer-item');
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 overflow-hidden border-t border-white/5"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-black" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="footer-item mb-4">
            <span className="text-4xl font-bold gradient-text">MP</span>
          </div>

          {/* Tagline */}
          <p className="footer-item text-gray-400 text-base mb-8">
            Transformando código em soluções
          </p>

          {/* Quick Links */}
          <nav className="footer-item flex flex-wrap justify-center gap-6 mb-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-gray-500 hover:text-white animated-underline transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="footer-item flex gap-4 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#667eea]/50 hover:bg-[#667eea]/10 transition-all duration-300 hover:scale-110"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="footer-item w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Copyright */}
          <div className="footer-item flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Matheus Paizante.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Feito com <Heart size={14} className="text-red-500 fill-red-500" /> e
              muito código
            </span>
          </div>

          {/* Tech Stack */}
          <p className="footer-item mt-4 text-xs text-gray-600">
            Desenvolvido com React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
