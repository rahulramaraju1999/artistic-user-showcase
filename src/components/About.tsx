
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="bg-softgray">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column - Using a photo of Grand Canyon */}
        <div className="relative">
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/882fab27-fe7c-4b0d-9aa9-182fd4c5f8f6.png" 
              alt="At Grand Canyon" 
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
            Hi there! I'm a passionate frontend developer and UI/UX designer with 5+ years of experience creating beautiful, functional websites and applications.
          </p>
          <p className="text-gray-600 mb-6">
            I specialize in modern JavaScript frameworks like React, Vue.js, and Next.js, and I love working at the intersection of design and development to create seamless user experiences.
          </p>
          <p className="text-gray-600 mb-8">
            When I'm not coding, you can find me hiking in beautiful places like the Grand Canyon, reading design books, or exploring new coffee shops in the city.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">5+</span>
              <span className="text-gray-500">Years Experience</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">50+</span>
              <span className="text-gray-500">Projects Completed</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <span className="block text-3xl font-bold text-highlight mb-1">30+</span>
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
