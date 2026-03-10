import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: 'Frontend',
    color: '#667eea',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Angular', level: 70 },
      { name: 'Vue', level: 65 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    name: 'Backend',
    color: '#764ba2',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    name: 'Ferramentas',
    color: '#a855f7',
    skills: [
      { name: 'Git/GitHub', level: 80 },
      { name: 'Jest', level: 60 },
      { name: 'Figma', level: 65 },
      { name: 'Linux', level: 70 },
      { name: 'Windows', level: 85 },
      { name: 'Photoshop', level: 60 },
      { name: 'Excel', level: 75 },
    ],
  },
  {
    name: 'Complementares',
    color: '#ec4899',
    skills: [
      { name: 'Pacote Office', level: 80 },
      { name: 'Modelagem de Dados', level: 70 },
      { name: 'Otimização de Consultas', level: 65 },
      { name: 'Metodologias Ágeis', level: 75 },
    ],
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      // Categories animation
      const categories = categoriesRef.current?.querySelectorAll('.skill-category');
      if (categories) {
        categories.forEach((category, catIndex) => {
          const skills = category.querySelectorAll('.skill-item');
          const progressBars = category.querySelectorAll('.progress-bar');

          gsap.fromTo(
            category,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: catIndex * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: category,
                start: 'top 80%',
              },
            }
          );

          gsap.fromTo(
            skills,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: category,
                start: 'top 75%',
              },
            }
          );

          progressBars.forEach((bar) => {
            const level = parseInt(bar.getAttribute('data-level') || '0');
            gsap.fromTo(
              bar,
              { width: '0%' },
              {
                width: `${level}%`,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: bar,
                  start: 'top 85%',
                },
              }
            );
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#667eea]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino e utilizo no desenvolvimento
              de projetos
            </p>
          </div>

          {/* Skills Grid */}
          <div
            ref={categoriesRef}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="skill-category bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-medium"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="progress-bar h-full rounded-full transition-all duration-1000"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                            width: '0%',
                          }}
                          data-level={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Outras habilidades</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'TypeScript',
                'Tailwind CSS',
                'REST APIs',
                'JWT',
                'Docker',
                'MongoDB',
                'Express',
                'Scrum',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#0f0f0f] border border-white/10 rounded-full text-sm text-gray-400 hover:border-[#667eea]/30 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
