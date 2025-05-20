import { useState, useEffect } from "react";
import { ExternalLink, Star, Code, Users, GitBranch } from "lucide-react";

export default function ProjectBanner() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation when user scrolls to this section
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Project data
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js and Stripe integration for payments.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: { stars: 124, forks: 38, issues: 5 },
      image: "/api/placeholder/400/260"
    },
    {
      title: "AI Content Assistant",
      description: "An AI-powered application that helps content creators generate ideas and outlines.",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
      stats: { stars: 211, forks: 54, issues: 3 },
      image: "/api/placeholder/400/260"
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with advanced analytics and visualizations.",
      tags: ["Vue.js", "Chart.js", "Firebase", "Websockets"],
      stats: { stars: 87, forks: 21, issues: 2 },
      image: "/api/placeholder/400/260"
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-indigo-950 to-purple-950 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left gradient circle */}
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        
        {/* Right gradient circle */}
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Section container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/10 mx-auto">
            <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-purple-400">Featured Projects</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover my most recent work showcasing my skills in frontend and backend development, 
            with a focus on performance, accessibility, and clean code.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-xl h-full">
                <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-xl overflow-hidden p-6 h-full flex flex-col">
                  {/* Project image */}
                  <div className="rounded-lg overflow-hidden mb-6 relative group">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white/30 transition-all duration-300">
                        View Project <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Project content */}
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 rounded-md text-xs text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="flex items-center gap-1">
                        <Star size={16} />
                        <span className="text-xs">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch size={16} />
                        <span className="text-xs">{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code size={16} />
                        <span className="text-xs">{project.stats.issues}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 border-2 border-indigo-900"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-indigo-900"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-indigo-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View all" button */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium 
                            shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 
                            transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}