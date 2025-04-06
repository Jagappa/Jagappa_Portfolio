
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
    <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-20">
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
            <div className="text-sm md:text-base text-gray-300">
              <p>
                "Fresh Java Full Stack Developer skilled in Java, Spring, React, HTML, CSS, and JavaScript. 
                Passionate about building modern web applications and eager to grow in the tech industry."
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Jagappa" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Github
              </a>
              <a href="/resume.pdf" download className="btn-primary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/d1848f5d-7eda-423d-8c47-a807ffed902d.png" 
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
