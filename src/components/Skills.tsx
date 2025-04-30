
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Design Systems", "Wireframing"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Express", "Git", "GitHub", "Webpack", "REST APIs", "GraphQL"]
    },
  ];
  
  return (
    <section id="skills">
      <div className="section-container">
        <h3 className="section-title text-center mx-auto">My Skills</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          I've worked with a variety of technologies and tools in the web development ecosystem. Here are some of my skills:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-4 text-navy">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-softgray text-navy rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
