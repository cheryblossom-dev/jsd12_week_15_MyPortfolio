import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[128px] opacity-50" />

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col gap-6 reveal max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              solutions.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            การทำงานที่ผ่านมาได้ทำหน้าที่เป็นสะพานเชื่อมระหว่างธุรกิจและลูกค้าผ่านสื่อโซเชียลมีเดีย
            จนกระทั่งได้พบกับความท้าทายใหม่ในโลกแห่งการเขียนโค้ด ผ่านบูทแคมป์
            JSD12 วันนี้ฉัน คือ Full-Stack Developer ที่พร้อมนำความเข้าใจใน
            "User Insight" มาพัฒนาเว็บแอปพลิเคชันด้วยเครื่องมือที่ทันสมัย (MERN
            Stack) เพื่อเปลี่ยนไอเดียให้กลายเป็น
            <br />
            โปรดักส์ที่ทำงานได้จริง
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/10NH6NraJwHpMSDfvz59y-jU73C2Sy4Cw/view?usp=drive_link"
              download
              className="group flex items-center gap-2 px-6 py-3 border border-primary text-primary bg-transparent font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Download CV
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/suphatip-keawcham-1ab820180?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="relative reveal hidden lg:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border border-primary/30 rounded-2xl rotate-6 transition-transform duration-500 hover:rotate-12" />
            <div className="absolute inset-0 bg-secondary/80 border border-border rounded-2xl overflow-hidden z-10 shadow-2xl">
              <img
                src="/image.png"
                alt="Alex Chen"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-12 top-1/4 bg-card border border-border px-4 py-3 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-[bounce_4s_infinite]">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                JS
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  JavaScript
                </p>
                <p className="text-sm font-bold">Full Stack</p>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/3 bg-card border border-border px-4 py-3 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-[bounce_5s_infinite_0.5s]">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                R
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  React
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
