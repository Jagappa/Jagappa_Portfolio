import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Java Full Stack Developer', '&amp; Web Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="pt-24 md:py-28 pb-16 md:pb-60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-4 items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Hi,<br />I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-portfolio-accent">Jagappa</span><br />
                and I am a passionate<br />
                <span ref={typedRef} className="text-portfolio-accent"></span>
              </h4>
            </div>
            <br />

            <div className="text-sm md:text-base text-gray-300">
              <p>
                I’m a passionate Java Full Stack Developer with hands-on experience in building and deploying robust web applications using Java, Spring Boot, Hibernate, React.js, HTML, CSS, and JavaScript. I specialize in creating scalable backend systems and intuitive frontend interfaces, with a solid grasp of RESTful APIs, MVC architecture, and modern development practices.
                <br /><br />
                I thrive in collaborative environments, love learning new technologies, and enjoy solving real-world problems with clean, efficient code..
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Jagappa" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Github
              </a>
              <a href="/Resume.pdf" download className="btn-primary">
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/jagappa-m" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/bd.png" 
              alt="Developer illustration"
              className="w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
