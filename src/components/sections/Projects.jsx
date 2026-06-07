import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "MERN Stack CRUD Web App",
      category: "Full Stack Application",
      description:
        "เว็บแอปพลิเคชันแบบ Full Stack ที่พัฒนาด้วย MERN Stack ครบวงจร มีระบบจัดการสินค้า, ออเดอร์, และระบบล็อกอิน พร้อม Authentication ด้วย JWT และ UI ที่ใช้งานง่าย",
      image: "/project-1.png",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-secondary/20 border-y border-border/50"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">ผลงาน</h2>
          <div className="w-20 h-1 bg-primary mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            โปรเจกต์ที่แสดงให้เห็นทักษะด้าน Full Stack Development ตั้งแต่
            Frontend จนถึง Backend และ Database
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 gap-12 items-center reveal ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div
                className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <div className="relative group overflow-hidden rounded-2xl border border-border aspect-[16/10] bg-secondary">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href="https://group5-ecommerce-frontend-sprint2.vercel.app/catalog"
                    className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                  >
                    View Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                  {/* <a
                    href={project.links.github}
                    className="flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" /> Source Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
