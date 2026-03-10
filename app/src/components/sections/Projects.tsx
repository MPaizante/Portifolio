import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Folder } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Portfolio Pessoal',
    description:
      'Meu site portfolio com design moderno, animações suaves e experiência do usuário aprimorada. Desenvolvido com as mais recentes tecnologias frontend.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/MPaizante',
    demo: 'https://projetos-one-gray.vercel.app/',
    featured: true,
  },
  {
    title: 'Sistema de Gestão',
    description:
      'CRUD completo para gerenciamento de dados com autenticação de usuários, dashboard interativo e relatórios em tempo real.',
    technologies: ['Node.js', 'MySQL', 'React', 'Express'],
    github: 'https://github.com/MPaizante',
    demo: null,
    featured: true,
  },
  {
    title: 'Landing Page',
    description:
      'Página de conversão com design responsivo, otimizada para SEO e performance. Inclui formulários de captura e integração com analytics.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/MPaizante',
    demo: 'https://projetos-one-gray.vercel.app/',
    featured: false,
  },
  {
    title: 'API REST',
    description:
      'Backend completo com autenticação JWT, validação de dados, documentação Swagger e testes automatizados.',
    technologies: ['Node.js', 'Express', 'JWT', 'Jest'],
    github: 'https://github.com/MPaizante',
    demo: null,
    featured: false,
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#764ba2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#667eea]/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes e projetos pessoais
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            style={{ perspective: '1200px' }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className={`project-card group relative bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#667eea]/30 transition-all duration-500 ${
                  project.featured ? 'md:row-span-1' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>

                  {/* Folder Icon */}
                  <div className="relative z-10">
                    <Folder
                      size={64}
                      className="text-[#667eea]/50 group-hover:text-[#667eea] transition-colors duration-300"
                    />
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-xs font-medium text-white">
                      Destaque
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#667eea] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:border-[#667eea]/30 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#667eea] hover:text-[#764ba2] transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/MPaizante"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:border-[#667eea]/50 hover:bg-[#667eea]/10 transition-all duration-300"
            >
              <Github size={18} />
              <span>Ver mais no GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
