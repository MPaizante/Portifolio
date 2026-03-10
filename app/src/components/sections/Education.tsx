import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, School, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationItems = [
  {
    institution: 'Universidade Federal Fluminense (UFF)',
    course: 'Sistemas de Computação',
    period: '2023.1 - Atual',
    status: 'Cursando',
    icon: GraduationCap,
    current: true,
  },
  {
    institution: 'Universidade Federal Fluminense (UFF)',
    course: 'Física',
    period: '2019.1 - 2022.2',
    status: 'Incompleto',
    icon: BookOpen,
    current: false,
  },
  {
    institution: 'Colégio Estadual Walter Orlandini',
    course: 'Ensino Médio Regular',
    period: 'Até 2017',
    status: 'Concluído',
    icon: School,
    current: false,
  },
  {
    institution: 'Senai',
    course: 'Web Designer',
    period: 'Até 2014',
    status: 'Concluído',
    icon: Award,
    current: false,
  },
];

const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário (leitura)' },
  { name: 'Espanhol', level: 'Intermediário (leitura)' },
];

export const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

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

      // Timeline line animation
      const timelineLine = timelineRef.current?.querySelector('.timeline-line');
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      // Timeline items animation
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      if (items) {
        items.forEach((item, index) => {
          const node = item.querySelector('.timeline-node');
          const content = item.querySelector('.timeline-content');
          const isLeft = index % 2 === 0;

          gsap.fromTo(
            node,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              delay: 0.3 + index * 0.2,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
              },
            }
          );

          gsap.fromTo(
            content,
            { x: isLeft ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              delay: 0.4 + index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
              },
            }
          );
        });
      }

      // Languages animation
      const langItems = languagesRef.current?.querySelectorAll('.language-item');
      if (langItems) {
        gsap.fromTo(
          langItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: languagesRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#667eea]/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Formação <span className="gradient-text">Acadêmica</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Minha trajetória educacional e qualificações
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#667eea] via-[#764ba2] to-transparent origin-top timeline-line" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div
                  key={item.course}
                  className={`timeline-item relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="timeline-node relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-[#0f0f0f] border-2 border-[#667eea] flex items-center justify-center">
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-[#667eea] animate-ping opacity-30" />
                    )}
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.current ? 'bg-[#667eea]' : 'bg-gray-500'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`timeline-content flex-1 bg-[#0f0f0f] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300 ${
                      index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                    } md:w-[calc(50%-2rem)]`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-[#667eea]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-white mb-1">
                          {item.institution}
                        </h3>
                        <p className="text-[#667eea] text-sm mb-1">
                          {item.course}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{item.period}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full ${
                              item.current
                                ? 'bg-[#667eea]/20 text-[#667eea]'
                                : item.status === 'Concluído'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-gray-500/20 text-gray-400'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div ref={languagesRef}>
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              Idiomas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="language-item flex items-center gap-3 bg-[#0f0f0f] border border-white/5 rounded-xl px-5 py-3 hover:border-[#667eea]/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#667eea]">
                      {lang.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{lang.name}</p>
                    <p className="text-xs text-gray-500">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
