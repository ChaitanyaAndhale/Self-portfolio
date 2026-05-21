import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    alert('Thank you for your message! I will get back to you soon.');

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/70">Collaborate</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Have a bold idea? Let's engineer it together. Drop me a message and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="premium-card p-10 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden bg-white/[0.02]">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Whether you're looking to build a scalable SaaS, a beautiful web platform, or just want to network, my inbox is always open.
                </p>

                <div className="space-y-8">
                  <a href="mailto:chaitanyaandhale6@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                      <Mail className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</div>
                      <div className="text-lg font-medium text-white group-hover:text-primary transition-colors">chaitanyaandhale6@gmail.com</div>
                    </div>
                  </a>

                  <a href="tel:+919209591382" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all duration-300">
                      <Phone className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</div>
                      <div className="text-lg font-medium text-white group-hover:text-secondary transition-colors">+91 92095 91382</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Location</div>
                      <div className="text-lg font-medium text-white group-hover:text-accent transition-colors">Pune, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 mt-12 border-t border-white/10">
                <div className="flex gap-4">
                  <a href="https://github.com/ChaitanyaAndhale" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://linkedin.com/in/chaitanya-andhale" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="premium-card p-10 rounded-3xl h-full bg-white/[0.02]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-white placeholder:text-muted-foreground/50"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-white placeholder:text-muted-foreground/50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-white resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
