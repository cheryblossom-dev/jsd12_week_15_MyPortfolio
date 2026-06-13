import { Code2, Database, Layout, Server } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: [
        // "React.js",
        // "JavaScript",
        "HTML",
        // "CSS",
        "Tailwind CSS",
        // "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: [
        "Node.js",
        "Express.js",
        // "RESTful APIs",
        // "Authentication / JWT",
        // "MERN Stack",
        // "MVC Pattern",
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MongoDB"],
      // skills: ["MongoDB", "MySQL", "CRUD Operations", "Schema Design", "Mongoose ODM", "SQL Queries"]
    },
    {
      title: "ทักษะอื่นๆ",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: [
        // "Growth Mindset",
        "การทำงานเป็นทีม",
        "การแก้ปัญหา",
        "บริหารเวลา",
        "ภาษาอังกฤษ (ปานกลาง)",
        // "Automation",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-lg text-muted-foreground">
            เครื่องมือและเทคโนโลยีที่ใช้ในการพัฒนาเว็บแอปพลิเคชัน
            ครอบคลุมตั้งแต่ Frontend จนถึง Backend และ Database
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {category.skills.map((skill, sIndex) => (
                  <li
                    key={sIndex}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    <span className="font-medium text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
