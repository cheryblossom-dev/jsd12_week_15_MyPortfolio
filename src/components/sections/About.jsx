export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative border-t border-b border-border/50"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Behind the code.
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
          </div>

          <div className="lg:col-span-7 reveal flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              ฉันเป็น Full Stack Developer ที่จบหลักสูตรจาก JSD Generation
              Thailand มีพื้นฐานด้านวิศวกรรมเมคคาทรอนิกส์
              ซึ่งทำให้มีแนวคิดแบบนักแก้ปัญหาที่ใช้ได้จริง
            </p>
            <p>
              ก่อนหน้านี้มีประสบการณ์ทำงานเป็น แอดมินดูแลเพจและตอบแชทลูกค้า
              (Customer Support & Page Admin) มากว่า 3 ปี
              ทำให้ได้คลุกคลีและเข้าใจพฤติกรรม ตลอดจนปัญหาของผู้ใช้งาน (User
              Pain Points) จากมุมมองของลูกค้าโดยตรง
              ตอนนี้นำประสบการณ์นั้นมาผสมผสานกับทักษะด้านการพัฒนาเว็บ
              เพื่อสร้างผลิตภัณฑ์ที่ใช้งานได้ง่าย
              ตอบโจทย์ทั้งธุรกิจและผู้ใช้จริง
            </p>
            <p>
              มีความสนใจพิเศษในด้าน Web Development, Automation
              พร้อมเปิดรับโอกาสใหม่ๆ ที่จะได้เติบโตในสายงาน Full Stack
              Development
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 border-t border-border pt-8">
              {/* <div>
                <p className="text-4xl font-black text-foreground mb-2">4+</p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">ปีประสบการณ์</p>
              </div> */}
              <div>
                <p className="text-4xl font-black text-foreground mb-2">MERN</p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Stack
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-foreground mb-2">JSD</p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Certified
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-foreground mb-2">PHK</p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  ภูเก็ต, ไทย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
