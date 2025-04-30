
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", "web", "design", "mobile"];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      imageUrl: "bg-gradient-to-br from-blue-400 to-purple-500",
      description: "Modern e-commerce platform built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      imageUrl: "bg-gradient-to-br from-green-400 to-cyan-500",
      description: "Secure and user-friendly banking application for iOS and Android",
      tags: ["React Native", "Redux", "Firebase"]
    },
    {
      id: 3,
      title: "Portfolio Design System",
      category: "design",
      imageUrl: "bg-gradient-to-br from-yellow-400 to-orange-500",
      description: "Complete design system with components and guidelines",
      tags: ["Figma", "Design System", "UI/UX"]
    },
    {
      id: 4,
      title: "Travel Booking Platform",
      category: "web",
      imageUrl: "bg-gradient-to-br from-pink-400 to-red-500",
      description: "All-in-one solution for booking flights, hotels, and experiences",
      tags: ["Vue.js", "Nuxt", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "Health Tracking App",
      category: "mobile",
      imageUrl: "bg-gradient-to-br from-purple-400 to-indigo-500",
      description: "Personal health and fitness tracker with analytics",
      tags: ["Flutter", "Firebase", "Charts"]
    },
    {
      id: 6,
      title: "Corporate Brand Identity",
      category: "design",
      imageUrl: "bg-gradient-to-br from-blue-400 to-teal-500",
      description: "Complete rebrand for a tech startup",
      tags: ["Branding", "Logo Design", "Style Guide"]
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="bg-softgray">
      <div className="section-container">
        <h3 className="section-title text-center mx-auto">My Projects</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Check out some of my recent work across different categories.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              className={filter === category 
                ? "bg-highlight hover:bg-highlight/90" 
                : "border-gray-300 hover:border-highlight"
              }
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`h-48 ${project.imageUrl} flex items-center justify-center text-white font-bold`}>
                Project Image
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-2 text-navy">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-white text-gray-600 border border-gray-200 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-highlight hover:text-highlight/90 hover:bg-highlight/5 p-0">
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-navy/90 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
