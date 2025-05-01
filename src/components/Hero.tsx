
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-softblue opacity-20"></div>
      <div className="absolute bottom-12 -left-12 w-48 h-48 rounded-full bg-softorange opacity-20"></div>
      
      <div className="section-container flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Content Column */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <p className="text-highlight font-medium mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 text-center md:text-left animate-fade-in" style={{ animationDelay: "200ms" }}>
            Raghu Rama Rahul Ramaraju
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-8 text-center md:text-left max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
            Front-End Developer & UI/UX Designer
          </h2>
          <p className="text-gray-500 max-w-xl text-center md:text-left mb-10 animate-fade-in" style={{ animationDelay: "600ms" }}>
            Motivated developer with expertise in building scalable, responsive web applications using JavaScript, React, Vue, and more. Currently pursuing a Master's in Information Technology and Management at UT Dallas.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button className="bg-highlight hover:bg-highlight/90 text-white px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/5 px-8 py-6">
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <div className="relative">
            <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/e0398206-4b35-4d63-a8a5-4232e2a8c76f.png" 
                alt="Profile Photo of Raghu Rama Rahul Ramaraju" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-highlight opacity-10 -z-10 transform translate-x-2 translate-y-2"></div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
