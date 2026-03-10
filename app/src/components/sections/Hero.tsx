import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Particles } from '../ui-custom/Particles';
import foto from "../Image/WhatsApp Image 2025-09-27 at 17.07.00.jpeg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Name animation - letter by letter
      if (nameRef.current) {
        const letters = nameRef.current.querySelectorAll('.letter');
        tl.fromTo(
          letters,
          { y: 100, opacity: 0, rotateX: 90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.05 },
          0.2
        );
      }

      // Title animation
      tl.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        0.6
      );

      // Description animation
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.8
      );

      // Bio animation
      tl.fromTo(
        bioRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 0.6 },
        1
      );

      // Buttons animation
      tl.fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
        1.2
      );

      // Stats animation
      tl.fromTo(
        statsRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        1.4
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        { rotateY: 30, scale: 0.8, opacity: 0 },
        { rotateY: 0, scale: 1, opacity: 1, duration: 1 },
        0.4
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameLetters = 'Matheus Paizante'.split('');

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#667eea]/10 via-transparent to-[#764ba2]/10 animate-gradient" />
      </div>

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Name */}
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold mb-3"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {nameLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`letter inline-block ${
                    letter === ' ' ? 'w-3' : ''
                  }`}
                  style={{
                    color: index < 8 ? '#667eea' : '#764ba2',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            {/* Title */}
            <p
              ref={titleRef}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2"
            >
              Desenvolvedor{' '}
              <span className="gradient-text">Full Stack</span>
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="text-gray-400 text-base sm:text-lg mb-6"
            >
              27 anos • São Gonçalo, RJ
            </p>

            {/* Bio */}
            <p
              ref={bioRef}
              className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transformando ideias em código e código em soluções. Apaixonado
              por tecnologia, sempre em busca de novos desafios e aprendizados
              constantes.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-gradient px-8 py-3.5 rounded-full text-base font-semibold text-white flex items-center justify-center gap-2"
              >
                Ver Projetos
                <ArrowDown size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3.5 rounded-full text-base font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Entre em Contato
              </button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex justify-center lg:justify-start gap-8 sm:gap-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  3+
                </div>
                <div className="text-sm text-gray-400 mt-1">Anos de Estudo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  15+
                </div>
                <div className="text-sm text-gray-400 mt-1">Tecnologias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  100%
                </div>
                <div className="text-sm text-gray-400 mt-1">Dedicado</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              ref={imageRef}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full blur-3xl opacity-30 animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    {/* Placeholder for Profile Image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center">
                        <img 
                          src={foto} 
                          alt="Perfil"
                          className="w-full h-full object-cover"
                        />
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-2 -right-2 bg-[#0f0f0f] border border-[#667eea]/30 rounded-full px-3 py-1.5 text-xs font-medium text-[#667eea] animate-float">
                  React
                </div>
                <div
                  className="absolute -bottom-2 -left-2 bg-[#0f0f0f] border border-[#764ba2]/30 rounded-full px-3 py-1.5 text-xs font-medium text-[#764ba2] animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  Node.js
                </div>
                <div
                  className="absolute top-1/2 -right-6 bg-[#0f0f0f] border border-white/20 rounded-full px-3 py-1.5 text-xs font-medium text-white animate-float"
                  style={{ animationDelay: '2s' }}
                >
                  Full Stack
                </div>
              </div>

              {/* Social Links */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
                <a
                  href="https://github.com/MPaizante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/matheus-p-174a35112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:matheus_paizante@hotmail.com"
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2 cursor-pointer hover:border-white/40 transition-colors"
          onClick={() => scrollToSection('#about')}
        >
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
