
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["JavaScript", "HTML", "CSS", "React", "Vue"]
    },
    {
      title: "Object-Oriented Programming",
      skills: ["Python", "Java", "C#", "Data Structures", "Algorithms", "OOD"]
    },
    {
      title: "Salesforce",
      skills: ["Apex", "Visualforce", "Salesforce Flow", "Workflow Rules", "Process Builder", "Data Loader", "Service Cloud", "Sales Cloud"]
    },
    {
      title: "UI/UX Design",
      skills: ["Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD", "Design Thinking"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Postman", "Git", "Jupyter Notebook", "Terraform", "Docker", "Jenkins", "GCP", "VS Code", "Jira", "Confluence"]
    },
    {
      title: "Cloud Computing",
      skills: ["Google Cloud Platform (GCP)", "SaaS", "PaaS", "IaaS"]
    },
  ];
  
  return (
    <section id="skills">
      <div className="section-container">
        <h3 className="section-title text-center mx-auto">My Skills</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          I've worked with a variety of technologies and tools in the web development ecosystem. Here are some of my key skills:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
