// import Navbar from "@/components/Navbar";

//  async function getServerSideProps() {
//   const result = await fetch('https://catfact.ninja/breeds');
//   return result.json();
// }

// export default async function Home() {
//   const data = await getServerSideProps();
//   return (
//     <>
//       <div className="container mt-5">
//         <h1 className="text-3xl font-bold underline">Welcome to SYMBOL MASTER</h1>
//         <h2>{data.data[0]?.breed}</h2>
//         <p className="lead">
//           {/* Hi, I'm Abdhul Rahim Sheikh M , a web developer passionate about building responsive and dynamic web apps. */}
//           {/* SYMBOL MASTER */}
//         </p>
//       </div>
//     </>
//   );
// }
'use client'
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import ProjectBanner from "@/components/MyProjects";
import AboutMe from "@/components/Aboutme";

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation trigger on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right gradient circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        
        {/* Bottom left gradient circle */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hello ! Im</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                Abdhul Rahim Sheikh M
              </span>
            </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-xs font-medium text-cyan-400">Full-Stack & RPA Automation Developer</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Crafting</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
                Digital Experiences
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-white/70 text-lg mb-8 max-w-lg">
            I build efficient, scalable, and intelligent web applications and automation systems that solve real-world challenges. Passionate about how things work under the hood, I specialize in creating custom RPA bots, optimizing backend processes, and delivering robust digital solutions with a strong focus on performance and maintainability.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2
                              shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 
                              transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400">
                View Projects
                <ArrowRight size={18} />
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/10 px-6 py-3 rounded-full font-medium
                              hover:bg-white/20 transition-all duration-300">
                Contact Me
              </button>
            </div>
            
            {/* Social links */}
            <div className="mt-12">
              <p className="text-white/50 text-sm mb-3">Find me on</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual element */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Main feature image/element */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 transform rotate-6 scale-105"></div>
              
              {/* Main content card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-xl">
                <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-xl overflow-hidden p-6">
                  {/* Card header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white/50">portfolio.js</div>
                  </div>
                  
                  {/* Code snippet with syntax highlighting */}
                  <div className="text-sm font-mono">
                    <div className="text-cyan-400">{`function `}<span className="text-purple-400">Portfolio</span>{`() {`}</div>
                    <div className="ml-4 text-white/70">{`const `}<span className="text-cyan-300">skills</span>{` = [`}</div>
                    <div className="ml-8 text-green-300">
                      <div>{`'React.js',`}</div>
                      <div>{`'Next.js',`}</div>
                      <div>{`'Tailwind CSS',`}</div>
                      <div>{`'TypeScript',`}</div>
                      <div>{`'Node.js'`}</div>
                    </div>
                    <div className="ml-4 text-white/70">{`];`}</div>
                    <div className="ml-4 text-white/70 mt-4">{`return (`}</div>
                    <div className="ml-8 text-purple-300">{`<`}<span className="text-yellow-300">div</span>{` `}<span className="text-cyan-300">className</span>{`="`}<span className="text-green-300">portfolio</span>{`">`}</div>
                    <div className="ml-12 text-purple-300">{`<`}<span className="text-yellow-300">h1</span>{`>My Projects</`}<span className="text-yellow-300">h1</span>{`>`}</div>
                    <div className="ml-12 text-purple-300">{`{`}<span className="text-white/70">skills.map(skill =&gt; (</span>{`}`}</div>
                    <div className="ml-16 text-purple-300"><span className="blink-cursor">|</span></div>
                    <div className="ml-4 text-white/70 mt-4">{`);`}</div>
                    <div className="text-cyan-400">{`}`}</div>
                  </div>
                  
                  {/* Animated cursor */}
                  <style jsx>{`
                    .blink-cursor {
                      animation: blink 1s step-end infinite;
                    }
                    @keyframes blink {
                      from, to { opacity: 1; }
                      50% { opacity: 0; }
                    }
                  `}</style>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -left-8 w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-lg transform rotate-12 animate-float-slow">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-4 w-20 h-20 rounded-lg bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg transform -rotate-12 animate-float">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} className="text-white/50" />
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,32,0,48C0,80,50,106,100,117Z" 
            className="fill-indigo-950/80"
          ></path>
        </svg>
      </div>

      <ProjectBanner />
      <AboutMe />
      
      {/* Custom CSS for grid background */}
      
    </div>
  );
}