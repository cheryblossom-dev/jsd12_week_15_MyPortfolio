import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border text-center md:text-left">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a
            href="#hero"
            className="text-xl font-bold tracking-tighter text-foreground block mb-2"
          >
            SUPHATIP<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Suphatip Kaewjaem. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/suphatip-keawcham-1ab820180?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:suphatip678@gmail.com"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full hover:bg-secondary/80"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
