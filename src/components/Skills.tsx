import { HTMLIcon, CSSIcon, JavaScriptIcon, ReactIcon, NodeIcon, SpringBootIcon, TypeScriptIcon } from './SkillIcons';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML', 
      icon: <HTMLIcon />,
      color: 'bg-orange-500' 
    },
    { 
      name: 'CSS', 
      icon: <CSSIcon />,
      color: 'bg-blue-500' 
    },
    { 
      name: 'JavaScript', 
      icon: <JavaScriptIcon />,
      color: 'bg-yellow-400' 
    },
    { 
      name: 'React JS', 
      icon: <ReactIcon />,
      color: 'bg-cyan-400' 
    },
    
    { 
      name: 'Node.js', 
      icon: <NodeIcon />,
      color: 'bg-green-600' 
    },
    {
      name: 'Spring Boot',
      icon: <SpringBootIcon />,
      color: 'bg-lime-600'
    },
    {
      name: 'TypeScript',
      icon: <TypeScriptIcon />,
      color: 'bg-blue-500' 
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-portfolio-accent">About My Skills</h3>
          <p className="text-gray-300">
            I’m a Java Full Stack Developer with experience in building dynamic and scalable web applications.
            I work with modern technologies including <span className="font-medium text-white">Java, Spring Boot, React JS", TypeScript, Node.js, HTML, CSS, and JavaScript</span>.
            <br /><br />
            <span className="font-medium text-white">Frontend:</span> Skilled in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React JS",TypeScript.
            <br />
            <span className="font-medium text-white">Backend:</span> Proficient in Java and Spring Boot for developing secure and scalable server-side applications.
            <br />
            <span className="font-medium text-white">Programming & DSA:</span> Strong foundation in Java with good problem-solving skills using Data Structures and Algorithms.
            <br />
            <span className="font-medium text-white">Tools & Platforms:</span> Experienced with Git, GitHub, Postman, and modern IDEs like IntelliJ and VS Code.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-portfolio-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 card-hover"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${skill.color} p-3`}>
                {skill.icon}
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
