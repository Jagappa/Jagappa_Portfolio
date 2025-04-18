
const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About</h2>
        
        <div className="bg-portfolio-card rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto card-hover">
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <img 
                src="/lovable-uploads/Aboutphoto.jpg" 
                alt="Jagappa profile" 
                className="w-48 h-48 md:w-full md:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">I am Jagappa</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  Hi, I'm Jagappa, a passionate and dedicated student currently pursuing my Master's in Computer Applications (MCA) 
                  with a specialization in Artificial Intelligence (AI) and Machine Learning (ML). My academic journey has equipped 
                  me with a strong foundation in programming, problem-solving, and data-driven decision-making.
                </p>
                <p>
                  I have developed a keen interest in Java development and am actively seeking opportunities to apply my skills 
                  in real-world projects. With a solid understanding of Java programming, algorithms, and object-oriented design 
                  principles, I am eager to contribute to dynamic development teams and work on innovative solutions..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
