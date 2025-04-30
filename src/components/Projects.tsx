
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", "development", "design", "academic"];
  
  const projects = [
    {
      id: 1,
      title: "Emotion-based Music Recommendation System",
      category: "academic",
      imageUrl: "bg-gradient-to-br from-blue-400 to-purple-500",
      description: "A system that recommends music based on 6 emotions using face detection algorithms with 86% accuracy",
      tags: ["Python", "Machine Learning", "UI/UX", "Gaussian Pyramid", "Markov Model"]
    },
    {
      id: 2,
      title: "OfferScope - Deal Aggregation System",
      category: "academic",
      imageUrl: "bg-gradient-to-br from-green-400 to-cyan-500",
      description: "Deal discovery platform for budget-conscious shoppers with personalized recommendations",
      tags: ["UI Design", "User Research", "Wireframing", "Prototyping"]
    },
    {
      id: 3,
      title: "Web Application UI Enhancement",
      category: "development",
      imageUrl: "bg-gradient-to-br from-yellow-400 to-orange-500",
      description: "Enhanced user interfaces for 8 applications, increasing user engagement by 30%",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      id: 4,
      title: "Accessibility Integration Project",
      category: "development",
      imageUrl: "bg-gradient-to-br from-pink-400 to-red-500",
      description: "Integrated accessibility features, improving usability by 70% across devices and operating systems",
      tags: ["HTML", "CSS", "JavaScript", "ARIA", "Accessibility"]
    },
    {
      id: 5,
      title: "Salesforce Workflow Automation",
      category: "development",
      imageUrl: "bg-gradient-to-br from-purple-400 to-indigo-500",
      description: "Automated workflows using Salesforce Process Builder, enhancing operational efficiency",
      tags: ["Salesforce", "Process Builder", "Workflow Automation"]
    },
    {
      id: 6,
      title: "Penetration Testing Project",
      category: "development",
      imageUrl: "bg-gradient-to-br from-blue-400 to-teal-500",
      description: "Security testing for web and Android app improving 5 security modules by 24.8%",
      tags: ["Security Testing", "Penetration Testing", "Vulnerability Assessment"]
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
