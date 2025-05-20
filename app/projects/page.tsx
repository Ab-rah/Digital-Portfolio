const projects = [
    {
      title: "Portfolio Website",
      description: "Built with Next.js and Bootstrap",
      link: "https://your-portfolio.com"
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack store using React and Django",
      link: "https://myecommerce.com"
    },
    {
      title: "Weather App",
      description: "React app using OpenWeatherMap API",
      link: "https://myweatherapp.com"
    }
  ];
  
  export default function Projects() {
    return (
      <div className="container py-5">
        <h1 className="mb-4">My Projects</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }