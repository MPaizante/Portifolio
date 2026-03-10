import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'matheus_paizante@hotmail.com',
    href: 'mailto:matheus_paizante@hotmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (21) 97528-1815',
    href: 'tel:+5521975281815',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Gonçalo, RJ - Brasil',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/matheus-p-174a35112',
    href: 'https://linkedin.com/in/matheus-p-174a35112',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/MPaizante',
    href: 'https://github.com/MPaizante',
  },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

      // Contact info items animation
      const infoItems = infoRef.current?.querySelectorAll('.contact-item');
      if (infoItems) {
        gsap.fromTo(
          infoItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 75%',
            },
          }
        );

        const inputs = formRef.current.querySelectorAll('.form-field');
        gsap.fromTo(
          inputs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado pelo contato. Responderei em breve!',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#667eea]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Vamos Trabalhar <span className="gradient-text">Juntos?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Entre em contato para oportunidades, colaborações ou apenas para
              trocar ideias
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div ref={infoRef} className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/5 rounded-xl hover:border-[#667eea]/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon size={22} className="text-[#667eea]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-white truncate group-hover:text-[#667eea] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-white/5 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20 flex items-center justify-center">
                        <item.icon size={22} className="text-[#667eea]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-white truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-field space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#667eea] focus:ring-[#667eea]/20"
                  />
                </div>

                <div className="form-field space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#667eea] focus:ring-[#667eea]/20"
                  />
                </div>

                <div className="form-field space-y-2 sm:col-span-2">
                  <Label htmlFor="subject" className="text-gray-300">
                    Assunto
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#667eea] focus:ring-[#667eea]/20"
                  />
                </div>

                <div className="form-field space-y-2 sm:col-span-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#667eea] focus:ring-[#667eea]/20 resize-none"
                  />
                </div>

                <div className="form-field sm:col-span-2">
                  <Button
                    type="submit"
                    className="w-full btn-gradient py-6 text-base font-semibold"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
