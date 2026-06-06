export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-primary/5 border-t border-primary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center reveal shadow-2xl">
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"></p>
          <p className="text-lg text-muted-foreground mb-10">
            ติดต่อได้ที่{" "}
            <span className="text-primary font-semibold">
              suphatip678@gmail.com
            </span>
          </p>

          <a
            href="mailto:kaaashaaa9@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            ส่งอีเมลหาฉัน
          </a>
        </div>
      </div>
    </section>
  );
}
