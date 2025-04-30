
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-softgray">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative">
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ffa221f1-b1b5-4b5b-9276-8a4a4e28dbe1.png" 
              alt="Raghu Rama Rahul Ramaraju" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-highlight rounded-lg -z-10"></div>
        </div>
        
        {/* Content Column */}
        <div>
          <h3 className="section-title">About Me</h3>
          <p className="text-gray-600 mb-6">
            I'm a motivated Front-End Developer currently pursuing a Master's in Information Technology and Management at UT Dallas. I'm proficient in JavaScript, HTML, CSS, React, and Vue, specializing in building scalable, responsive web applications.
          </p>
          <p className="text-gray-600 mb-6">
            With expertise in front-end frameworks, API integration, cross-browser compatibility, and object-oriented programming, I bring a strong background in UI/UX design, data structures, algorithms, and SDLC.
          </p>
          <p className="text-gray-600 mb-8">
            I'm based in Dallas, Texas, and seeking to contribute to innovative, customer-centric projects in front-end engineering.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">2+</span>
              <span className="text-gray-500">Years Experience</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">10+</span>
              <span className="text-gray-500">Projects Completed</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">3+</span>
              <span className="text-gray-500">Certifications</span>
            </div>
          </div>
          
          <Button className="bg-navy hover:bg-navy/90 text-white">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
