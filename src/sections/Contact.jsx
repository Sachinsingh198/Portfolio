import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sachinsinghfarshwan1234@gmail.com",
    href: "mailto:sachinsinghfarshwan1234@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8191980879",
    href: "tel:+918191980879",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gopeshwar Chamoli Uttarakhand",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    // Your actual Access Key
    data.append("access_key", "f0d342d2-2e22-49f9-9d08-7738def05059"); 
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // UPDATED: Reduced vertical padding on mobile (py-20) vs desktop (lg:py-32)
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          {/* UPDATED: Adjusted font sizes for better mobile scaling */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 text-sm md:text-base">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        {/* UPDATED: Changed gap-12 to gap-8 lg:gap-12 for better mobile spacing */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Contact Form */}
          {/* UPDATED: Changed p-8 to p-6 md:p-8 for more room on small screens */}
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm md:text-base"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="space-y-6 md:space-y-8 animate-fade-in animation-delay-400 flex flex-col justify-center">
            {contactInfo.map((info, idx) => (
              <a 
                key={idx} 
                href={info.href}
                // UPDATED: p-6 to p-5 md:p-6. Added break-all for the long email address.
                className="glass p-5 md:p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group flex items-start md:items-center gap-4 md:gap-6"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0 mt-1 md:mt-0">
                  <info.icon size={20} className="md:w-6 md:h-6" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-semibold text-foreground">{info.label}</h4>
                  {/* UPDATED: Added break-all so the long email wraps on mobile */}
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors break-all">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;