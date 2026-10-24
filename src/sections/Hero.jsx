import {Button} from "@/components/Button"
import { ArrowRight, Github, Twitter, Linkedin, ChevronDown, Download } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";


const skills = [
    "React",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Flask",
    "Fast API",
    "Git",
    "Docker",
    "Generative Ai",
    "Agentic AI",
    "PostgreSQL",
]


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg  */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>
      {/* Green Dots  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          // Randomize size between 2px and 5px
          const size = Math.random() * 3 + 2;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#20B2A6] opacity-0" // Start invisible
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                // Animation: Name | Duration | Easing | Infinite
                animation: `float-particle ${
                  10 + Math.random() * 20
                }s ease-in-out infinite`,
                // Delay: Randomize so they don't all start at once
                animationDelay: `${Math.random() * 5}s`,
                // Randomize opacity in the style to create depth
                opacity: 0.1 + Math.random() * 0.5,
              }}
            />
          );
        })}
      </div>

      {/* Content  */}
      <div className="container mx-auto px-6  pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - TExt Content  */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span
                span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary border border-primary/20 shadow-lg shadow-primary/10"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer &bull; ML Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">intelligent</span>
                <br />
                solutions with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              {/* 3. Bio: Merged Web Dev + AI skills */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I'm{" "}
                <span className="text-foreground font-semibold">
                  Sachin Singh
                </span>
                . I bridge the gap between interactive UIs and Artificial
                Intelligence. Specializing in{" "}
                <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Python</span>, and{" "}
                <span className="text-primary">Deep Learning</span>, I build
                scalable applications powered by data.
              </p>
            </div>

            {/* CTA's  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5"/>
                </Button>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5"/>
                  Download CV
                </AnimatedBorderButton>
            </div>

            {/* Social Links  */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Follow me:</span>
                {[
                    {icon: Github, href:"https://github.com/Sachinsingh198"},
                    {icon:Linkedin, href:"https://www.linkedin.com/in/sachin-singh-155883287"},
                    {icon:Twitter, href:"https://x.com/Sachinsingh2027"}
                ].map((social, idx)=>(
                    <a 
                    target="_blank"
                    key={idx} 
                    href={social.href} 
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >{<social.icon className="w-5 h-5" />}</a>
                ))}
            </div>
          </div>

          {/* Right Column - Profile Photo  */}
            <div className="relative animate-fade-in animation-delay-300 ">
                {/* Profile image  */}
                <div className="relative mx-w-md mx-auto ">
                    <div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                    />
                    <div className="relative glass rounded-3xl p-2 glow-border">
                        <img src="/profile-photo.jpg" alt="Sachin Singh" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                        {/* Floating Badge  */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">
                                    Available for work
                                </span>
                            </div>
                        </div>
                        {/* Stats Badge  */}
                        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary">
                                Final Year
                            </div>
                            <div className="text-xs text-muted-foreground">
                                CSE Student
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Skills Section  */}
        <div className="mt-wo animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologies I work with
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx)=>(
                    <div key={idx} className="flex-shrink-0 px-8 py-4 ">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
