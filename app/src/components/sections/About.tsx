import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  User,
  MapPin,
  GraduationCap,
  Building,
  Clock,
  Briefcase,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const infoCards = [
  { icon: User, label: 'Idade', value: '27 anos' },
  { icon: MapPin, label: 'Localização', value: 'São Gonçalo, RJ' },
  { icon: GraduationCap, label: 'Formação', value: 'Sistemas de Computação' },
  { icon: Building, label: 'Instituição', value: 'UFF' },
  { icon: Clock, label: 'Período', value: 'Noturno' },
  { icon: Briefcase, label: 'Cargo Atual', value: 'DataQuality' },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Text animations
      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.35,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.info-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, rotateY: 90 },
          {
            opacity: 1,
            rotateY: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#667eea]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#764ba2]/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Text */}
            <div>
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8"
              >
                Sobre <span className="gradient-text">Mim</span>
              </h2>

              <p
                ref={text1Ref}
                className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6"
              >
                Sou um jovem de 27 anos, motivado e dedicado em me desenvolver e
                progredir como profissional e pessoa. Tenho um grande interesse
                por tecnologia e estou sempre em busca de aprender e dominar
                novas ferramentas e técnicas.
              </p>

              <p
                ref={text2Ref}
                className="text-gray-400 text-base leading-relaxed"
              >
                Atualmente curso Sistemas de Computação na UFF, onde mergulho no
                mundo do desenvolvimento de software e busco constantemente
                aprimorar minhas habilidades técnicas.
              </p>
            </div>

            {/* Right Column - Info Cards */}
            <div
              ref={cardsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              style={{ perspective: '600px' }}
            >
              {infoCards.map((card, index) => (
                <div
                  key={card.label}
                  className="info-card group relative bg-[#0f0f0f] border border-white/5 rounded-xl p-5 hover:border-[#667eea]/30 transition-all duration-300 card-hover"
                  style={{
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <card.icon
                      size={20}
                      className="text-[#667eea]"
                    />
                  </div>

                  {/* Label */}
                  <p className="text-xs text-gray-500 mb-1">{card.label}</p>

                  {/* Value */}
                  <p className="text-sm font-semibold text-white">{card.value}</p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
