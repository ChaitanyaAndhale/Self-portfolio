import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'chaitanyaandhale6@gmail.com', href: 'mailto:chaitanyaandhale6@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9209591382', href: 'tel:+919209591382' },
  { icon: MapPin, label: 'Location', value: 'Pune, India', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ChaitanyaAndhale' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/chaitanya-andhale' },
  { icon: Mail, label: 'Email', href: 'mailto:chaitanyaandhale6@gmail.com' },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="john@example.com"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <motion.textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/50 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle size={20} />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-display font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-colors"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="glass rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className="w-3 h-3 rounded-full bg-neon-green"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <p className="font-semibold">Available for Opportunities</p>
                  <p className="text-sm text-muted-foreground">Open to internships and full-time roles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
