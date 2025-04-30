
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-softgray">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative">
          <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with your actual image */}
            <div className="w-full h-full bg-gradient-to-br from-navy to-highlight/40 flex items-center justify-center text-white">
              <span className="text-lg">Your Image Here</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-highlight rounded-lg -z-10"></div>
        </div>
        
        {/* Content Column */}
        <div>
          <h3 className="section-title">About Me</h3>
          <p className="text-gray-600 mb-6">
            Hi there! I'm a passionate frontend developer and UI/UX designer with 5+ years of experience creating beautiful, functional websites and applications.
          </p>
          <p className="text-gray-600 mb-6">
            I specialize in modern JavaScript frameworks like React, Vue.js, and Angular, and I love working at the intersection of design and development to create seamless user experiences.
          </p>
          <p className="text-gray-600 mb-8">
            When I'm not coding, you can find me hiking, reading design books, or exploring new coffee shops in the city.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div>
              <span className="block text-3xl font-bold text-navy">5+</span>
              <span className="text-gray-500">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-navy">50+</span>
              <span className="text-gray-500">Projects Completed</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-navy">30+</span>
              <span className="text-gray-500">Happy Clients</span>
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
