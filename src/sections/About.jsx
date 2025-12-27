import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delievering lightning-fast user experience.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one component at a time.</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I am a Software and Machine Learning Engineer who sits at the intersection of impactful design and intelligent logic. While many developers focus on just one aspect of the stack, I thrive on bridging the gap between pixel-perfect user interfaces and complex AI algorithms.
                </p>
                <p>
                    For me, coding isn't just about writing syntax; it's about solving real-world problems with elegance. I am a developer passionate about creating digital experiences that feel intuitive and performant.
                </p>
                <p>
                    With a strong foundation in Software Engineering and specialized skills in Machine Learning, I focus on building applications that solve problems before the user even realizes they exist. Whether it's optimizing a React frontend for speed or training a model to predict user behavior, my goal is always the same: to create software that works seamlessly.
                </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    “We are entering an era where software must be smarter, faster, and more personal. My mission is to be at the forefront of this shift, combining the interactivity of the modern web with the predictive power of Deep Learning to create digital experiences that feel alive.”
                </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {
                highlights.map((item, idx) => (
                    <div 
                    key={idx} 
                    className="glass p-6 rounded-2xl animate-fade-in " 
                    style = {{animationDelay:`${(idx +1)*100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {item.description}
                        </p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
