const Projects = () => {
  const projects = [
    {
      title: "Fire Fencing Management System",
      image: "/lovable-uploads/fence.png",
      description: "The main objective of this project is to provide information about stock details and management of 'Fencing Wires' in a website. It keeps track of all stocks, sales and purchases to make the business more profitable.",
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      link: "https://github.com/Jagappa/wire-fencing-project" // replace with actual URL
    },
    {
      title: "Job Portfolio",
      image: "/lovable-uploads/portfolio.png",
      description: "A portfolio object that holds various pieces of information about a person, showcasing skills, achievements, work samples, projects, certifications, and other relevant professional data.",
      tags: ["TypeScript", "CSS", "JavaScript"],
      link: "https://github.com/Jagappa/Jagappa_Portfolio" // replace with actual URL
    },
    {
      title: "Test Yantra Website Clone",
      image: "/lovable-uploads/project03.png",
      description: "Built the front-end of a professional IT consulting website similar to Test Yantra, using React to practice and enhance React.js skills. Created a dynamic and responsive user interface mirroring a corporate website.",
      tags: ["React", "Tailwind CSS"],
      link: "https://github.com/Jagappa/Test_Yantra_webiste_clone" // replace with actual URL
    },
    {
      title: "City Wise Crime Rate Prediction",
      image: "/lovable-uploads/Crime.png",
      description: "CrimeSight is an intelligent crime analytics platform designed to predict, visualize, and analyze cyber crime trends across cities using historical data and advanced machine learning models.",
      tags: ["TypeScript", "Tailwind CSS", "Machine Learning", "Node.js"],
      link: "https://github.com/Jagappa/City_wise_crime_prediction" // replace with actual URL
    },
    {
      title: "Employee Management System.",
      image: "/lovable-uploads/employee.png",
      description: "The Employee Management System is a full-stack CRUD web application designed to manage employee records efficiently. The frontend is built using React.js with React Router DOM for smooth navigation between components like Dashboard, Add Employee, Update Employee, and a 404 page for unmatched routes. The backend is powered by Spring Boot REST APIs connected to a MySQL database to handle data persistence",
      tags: ["JavaScript", "Tailwind CSS", "SpringBoot", "Node.js" ,"MYSQL","React Router DOM"],
      link: "https://github.com/Jagappa/Java-FullStack-Employee-Management-Project" // replace with actual URL
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-portfolio-card/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-portfolio-card rounded-lg overflow-hidden shadow-lg card-hover hover:shadow-xl transition-shadow duration-300"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
