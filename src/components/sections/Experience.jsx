export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "JSD Generation Thailand",
      period: "มี.ค. 2026 – มิ.ย. 2026",
      description:
        "เรียนและฝึกปฏิบัติหลักสูตร Full Stack Development เต็มรูปแบบ พัฒนาเว็บแอปพลิเคชันด้วย React, Node.js, และ MongoDB สร้าง MERN Stack CRUD Web App ที่มีระบบสินค้า, ออเดอร์, และล็อกอินครบวงจร",
    },
    {
      role: "Admin / System Coordinator",
      company: "บริษัทบ้านป้อเจ้า จำกัด",
      period: "มี.ค. 2023 – ก.พ. 2026",
      description:
        "บริหารจัดการระบบงานขายออนไลน์และดูแลลูกค้า โดยรับผิดชอบการสื่อสารและตอบข้อความลูกค้า (Chat Support) เพื่อปิดการขายและแก้ไขปัญหา จัดการฐานข้อมูลสินค้าและคีย์ข้อมูลเข้าระบบ (Data Entry) รวมถึงจัดทำและตรวจสอบใบจัดส่งสินค้า (Shipping Labels) เพื่อความถูกต้องแม่นยำในการจัดส่ง ซึ่งช่วยเสริมทักษะความละเอียดรอบคอบในการจัดการข้อมูลและการเข้าใจระบบร้านค้าออนไลน์ (E-commerce)",
    },
    {
      role: "Part-time Rider",
      company: "อิสระ",
      period: "ธ.ค. 2020 – ก.พ. 2023",
      description:
        "บริหารเวลาและความรับผิดชอบในสภาพแวดล้อมที่ต้องตัดสินใจเร็ว พัฒนาทักษะการจัดการงานอย่างมีระบบและความรับผิดชอบต่อตัวเอง",
    },
  ];

  const education = [
    {
      degree: "Junior Software Developer Bootcamp",
      school: "Generation Thailand (JSD12)",
      year: "2026",
    },
    {
      degree: "วิศวกรรมเมคคาทรอนิกส์",
      school: "สถาบันเทคโนโลยีปทุมวัน",
      year: "2020",
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground">
            เส้นทางการทำงานและการเรียนรู้
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-0 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative pl-8 md:pl-12 reveal">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1.5 ring-8 ring-background"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground w-fit">
                  {exp.period}
                </span>
              </div>

              <h4 className="text-lg font-medium text-primary mb-4">
                {exp.company}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-bold mb-8 text-center">การศึกษา</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
              >
                <p className="text-primary font-semibold text-sm mb-1">
                  {edu.year}
                </p>
                <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
