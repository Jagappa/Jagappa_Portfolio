
const Projects = () => {
  const projects = [
    {
      title: "Fire Fencing Management System",
      image: "/lovable-uploads/1491b9a8-e4fa-4baa-a239-638dca3502ab.png",
      description: "The main objective of this project is to provide information about stock details and management of 'Fencing Wires' in a website. It keeps track of all stocks, sales and purchases to make the business more profitable.",
      tags: ["Java", "Spring", "React"]
    },
    {
      title: "Job Portfolio",
      image: "/lovable-uploads/18244777-ce23-4345-8c3c-1ee2be528de7.png",
      description: "A portfolio object that holds various pieces of information about a person, showcasing skills, achievements, work samples, projects, certifications, and other relevant professional data.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Test Yantra Website Clone",
      image: "/lovable-uploads/71626990-4ed2-4a7c-9900-32a765106193.png",
      description: "Built the front-end of a professional IT consulting website similar to Test Yantra, using React to practice and enhance React.js skills. Created a dynamic and responsive user interface mirroring a corporate website.",
      tags: ["React", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-portfolio-card/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-portfolio-card rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-portfolio-accent/20 text-portfolio-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
