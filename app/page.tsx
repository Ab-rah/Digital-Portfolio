'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Download, Circle } from "lucide-react";

export default function MinimalPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Custom cursor and scroll reveal
  useEffect(() => {
    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Scroll progress logic
    const handleScroll = () => {
      // Navbar threshold logic
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
      
      // Calculate total page scroll percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);



    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans antialiased text-black bg-white select-none">
      <div className="noise-bg"></div>
      
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gray-900 z-[60] transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-500">
        <div className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b pointer-events-none
          ${isNavbarScrolled ? 'opacity-100 bg-white/90 backdrop-blur-md border-gray-200 shadow-sm' : 'opacity-0 bg-transparent border-transparent'}`}></div>
        <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isNavbarScrolled ? 'py-4 md:py-6' : 'py-8 md:py-10'}`}>
          <div className="flex items-center pointer-events-auto">
            <Link href="/" className="font-sans text-lg md:text-xl tracking-[0.05em] uppercase font-normal text-black hover:opacity-70 transition-opacity">
              Abdhul.
            </Link>
          </div>
          <div className="flex items-center gap-8 md:gap-12 pointer-events-auto">
            <a href="#about" className="inline-block text-sm font-sans uppercase tracking-widest text-black hover:text-gray-400 transition-colors">About</a>
            <a href="#work" className="inline-block text-sm font-sans uppercase tracking-widest text-black hover:text-gray-400 transition-colors">Work</a>
            <a href="#contact" className="inline-block text-sm font-sans uppercase tracking-widest text-black hover:text-gray-400 transition-colors hidden md:block">Contact</a>
          </div>
        </div>
      </nav>

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-white">
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start justify-center pt-32 pb-16">
            <h1 className="font-serif text-[8.5vw] md:text-[5.5vw] leading-[0.9] -tracking-[0.03em] text-black cursor-default mt-12 delay-100 reveal active">
              <span className="block md:whitespace-nowrap overflow-hidden">
                <span className="inline-block transform transition-transform duration-1000 translate-y-0 opacity-100">I'm Abdhul, practicing engineering</span>
                <span className="text-[#a3a3a3] inline-block transform transition-transform duration-1000 delay-200 translate-y-0 opacity-100"> since 2020.</span>
              </span>
              <span className="block mt-1 md:mt-4 overflow-hidden">
                <span className="inline-block transform transition-transform duration-1000 delay-300 translate-y-0 opacity-100">Architecting thoughtful</span>
                <span className="text-[#a3a3a3] inline-block transform transition-transform duration-1000 delay-500 translate-y-0 opacity-100"> solutions.</span>
              </span>
            </h1>
          </div>
          
          <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 reveal delay-300 active">
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[11px] font-sans text-gray-500 uppercase tracking-widest text-center md:text-left mb-4 md:mb-0 hidden md:block">
                Currently building Next.js apps & RPA Bots.
              </p>
              <div className="flex gap-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans text-gray-500 uppercase tracking-widest hover:text-black transition-colors flex items-center gap-1 group">
                  LinkedIn
                  <ArrowRight size={12} className="transform group-hover:-rotate-45 transition-transform" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans text-gray-500 uppercase tracking-widest hover:text-black transition-colors flex items-center gap-1 group">
                  GitHub
                  <ArrowRight size={12} className="transform group-hover:-rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About & Experience Section */}
        <section id="about" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="w-full h-px bg-gray-200 mb-20 reveal"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-sans font-semibold text-5xl md:text-6xl leading-[0.9] text-black reveal">About</h2>
              </div>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="flex flex-col gap-8 reveal delay-100">
                <p className="font-sans text-2xl md:text-3xl font-light leading-relaxed text-black">
                  I approach software engineering with a focus on architecture and long-term maintainability. My expertise bridges the gap between complex backend logic and seamless user experiences.
                </p>
                <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-gray-500">
                  Whether it's designing highly available web services, integrating RPA workflows, or crafting intuitive frontends using React and Next.js, my goal is to deliver solutions that drive business value without compromising on code quality.
                </p>
              </div>
              
              <div className="w-full h-px bg-gray-200 my-4 reveal"></div>
              
              {/* Experience Accordion */}
              <div className="flex flex-col">
                <div className="mb-12 text-sm font-sans uppercase tracking-widest text-gray-400 reveal">Experience</div>
                
                {/* Role 1 */}
                <div className="border-b border-gray-200 py-8 cursor-pointer group reveal" onClick={() => toggleAccordion(0)}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-sans font-medium text-black mb-1 group-hover:text-gray-500 transition-colors">Full-Stack Developer</h3>
                      <p className="font-sans text-lg text-gray-500">Enterprise Solutions Inc.</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="hidden md:block font-sans text-sm text-gray-400 uppercase tracking-widest">2022 — Present</span>
                      <button className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 text-black ${openAccordion === 0 ? 'rotate-180' : ''}`}>
                        <ChevronDown />
                      </button>
                    </div>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openAccordion === 0 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="pt-6 pb-2">
                        <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-3xl">
                          Leading development of scalable web applications using Next.js and Node.js. Architecting cloud-native solutions and overseeing the integration of automated CI/CD pipelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="border-b border-gray-200 py-8 cursor-pointer group reveal" onClick={() => toggleAccordion(1)}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-sans font-medium text-black mb-1 group-hover:text-gray-500 transition-colors">RPA Engineer</h3>
                      <p className="font-sans text-lg text-gray-500">Automation Labs</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="hidden md:block font-sans text-sm text-gray-400 uppercase tracking-widest">2020 — 2022</span>
                      <button className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 text-black ${openAccordion === 1 ? 'rotate-180' : ''}`}>
                        <ChevronDown />
                      </button>
                    </div>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openAccordion === 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="pt-6 pb-2">
                        <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-3xl">
                          Designed and implemented complex automation workflows replacing hundreds of hours of manual labor per month. Specialized in Python and enterprise RPA tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end pt-8 reveal">
                <a href="javascript:void(0)" className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-widest uppercase hover:text-gray-500 transition-colors text-black pb-1 border-b border-black hover:border-gray-500">
                  <Download size={16} /> Download Full CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="work" className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto bg-[#fafafa] rounded-3xl mb-24">
          <div className="flex justify-between items-end mb-16 reveal">
            <h2 className="font-sans font-semibold text-5xl md:text-6xl text-black tracking-tight">Selected Works</h2>
            <span className="font-sans text-2xl md:text-4xl text-gray-300 font-light">20'–24'</span>
          </div>
          
          <div className="flex flex-col gap-12 md:gap-[80px]">
            {/* Project 1 */}
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()} className="group cursor-pointer reveal block w-full">
              <div className="relative w-full h-[50vh] md:h-[70vh] bg-gray-200 rounded-xl overflow-hidden mb-6">
                {/* Project Image */}
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute top-6 left-6 bg-white px-4 py-2 flex items-center gap-2 rounded-full border border-gray-100 shadow-sm">
                  <Circle size={8} className="fill-black text-black animate-pulse" />
                  <span className="text-black text-xs font-semibold tracking-wide uppercase">Live</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-sans font-medium mb-3 text-black group-hover:text-gray-500 transition-colors duration-300">Financial Dashboard Architecture</h3>
                  <p className="text-gray-500 font-sans text-lg font-light max-w-2xl leading-relaxed">
                    A comprehensive full-stack Next.js application designed to handle high-frequency data updates for thousands of concurrent users.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 border-b border-black pb-1 group-hover:border-gray-500 group-hover:text-gray-500 transition-all">
                  <span className="text-xs font-semibold uppercase tracking-widest text-black group-hover:text-gray-500 transition-colors">View Case Study</span>
                  <ArrowRight size={14} className="transform -rotate-45" />
                </div>
              </div>
            </a>

            {/* Grid for Smaller Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[40px]">
              {/* Project 2 */}
              <a href="javascript:void(0)" onClick={(e) => e.preventDefault()} className="group cursor-pointer reveal block">
                <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" alt="Document Processing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-medium mb-2 text-black group-hover:text-gray-500 transition-colors duration-300">Intelligent Document Processing</h3>
                  <p className="text-gray-500 font-sans font-light leading-relaxed mb-6">
                    RPA bot utilizing OCR and machine learning to extract and process over 10k invoices monthly.
                  </p>
                  <div className="inline-flex items-center gap-2 border-b border-black pb-1 group-hover:border-gray-500 transition-all">
                    <span className="text-xs font-semibold uppercase tracking-widest text-black group-hover:text-gray-500">View Project</span>
                    <ArrowRight size={14} className="transform -rotate-45 text-black group-hover:text-gray-500" />
                  </div>
                </div>
              </a>

              {/* Project 3 */}
              <a href="javascript:void(0)" onClick={(e) => e.preventDefault()} className="group cursor-pointer reveal block delay-100">
                <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop" alt="Serverless Auth" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-medium mb-2 text-black group-hover:text-gray-500 transition-colors duration-300">Serverless Auth Microservice</h3>
                  <p className="text-gray-500 font-sans font-light leading-relaxed mb-6">
                    A highly scalable authentication service built on AWS Lambda, providing seamless JWT verification.
                  </p>
                  <div className="inline-flex items-center gap-2 border-b border-black pb-1 group-hover:border-gray-500 transition-all">
                    <span className="text-xs font-semibold uppercase tracking-widest text-black group-hover:text-gray-500">View Project</span>
                    <ArrowRight size={14} className="transform -rotate-45 text-black group-hover:text-gray-500" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal">
            <h2 className="font-sans font-semibold text-5xl md:text-6xl text-black leading-tight">Engineering<br/>Philosophy</h2>
            <div className="flex flex-col items-start md:items-end mt-8 md:mt-0">
              <p className="font-sans text-xl text-gray-500 max-w-md md:text-right leading-relaxed font-light">
                Guiding principles that shape architecture, code quality, and technical decisions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal delay-100">
            {[
              { num: '01', title: 'Scalability', desc: 'Designing systems that grow seamlessly with traffic and data without demanding complete rewrites.' },
              { num: '02', title: 'Simplicity', desc: 'Avoiding over-engineering. Clear, self-documenting code is always superior to "clever" one-liners.' },
              { num: '03', title: 'Security First', desc: 'Implementing zero-trust models and assuming the environment is inherently hostile from day one.' },
              { num: '04', title: 'Performance', desc: 'Optimizing the critical rendering path and backend query latency for exceptional user experiences.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col h-full bg-white p-6 border border-gray-100 hover:border-gray-300 transition-colors rounded-xl group cursor-default">
                <span className="font-mono text-xs text-gray-400 mb-12">{item.num}</span>
                <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-sans font-medium text-2xl text-black mb-4">{item.title}</h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-12 pt-32 pb-12 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
          <div className="flex flex-col items-start mb-24 md:mb-32">
            <div className="flex flex-col items-start gap-2 mb-16 reveal">
              <h2 className="font-sans font-semibold text-5xl md:text-7xl leading-tight text-white/50">Ready to build?</h2>
              <a href="mailto:hello@example.com" className="group flex items-center gap-6 pb-2 border-b-2 border-transparent hover:border-white transition-all w-fit pr-8">
                <h2 className="font-sans font-semibold text-5xl md:text-7xl leading-tight text-white whitespace-nowrap">Let's talk.</h2>
                <div className="transform group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  <ArrowRight size={48} className="text-white hidden md:block" />
                  <ArrowRight size={32} className="text-white md:hidden" />
                </div>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 md:gap-16 reveal delay-100">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">Socials</p>
                <a href="#" className="font-sans text-lg text-white hover:text-gray-400 transition-colors">LinkedIn</a>
                <a href="#" className="font-sans text-lg text-white hover:text-gray-400 transition-colors">GitHub</a>
                <a href="#" className="font-sans text-lg text-white hover:text-gray-400 transition-colors">Twitter</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">Location</p>
                <p className="font-sans text-lg text-white">Available for remote worldwide.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-white/40 text-sm font-sans reveal delay-200">
            <p>Built with Next.js & Tailwind</p>
            <p className="mt-4 md:mt-0">© {new Date().getFullYear()} Abdhul Rahim</p>
          </div>
        </div>
      </footer>
    </div>
  );
}