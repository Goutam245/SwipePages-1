import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import tutoringCenter from "@/assets/images/tutoring-center.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(02) 6123 4567",
    href: "tel:+61261234567",
    description: "Mon-Fri 8am-6pm, Sat 9am-1pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@canberratutoring.com.au",
    href: "mailto:hello@canberratutoring.com.au",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Canberra, ACT",
    href: "#",
    description: "In-person & online tutoring available",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "7 Days a Week",
    href: "#",
    description: "Flexible scheduling for families",
  },
];

const subjects = ["Mathematics", "English", "Science", "Other"];
const levels = ["Primary School (K-6)", "High School (7-10)", "Senior Secondary (11-12)", "University/College"];

export function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    subject: "",
    level: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll contact you within 24 hours to schedule your free assessment.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-ct-softgreen/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-ct-mint/50 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-ct-green/10 text-ct-green text-sm font-semibold mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get Your Free Assessment
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Take the first step towards academic success. Book a free 30-minute assessment 
                and discover how we can help your child thrive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-card border-y border-border/50">
          <div className="container-narrow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-ct-green/50 hover:shadow-medium transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-ct-green/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-ct-green/20 transition-colors">
                    <item.icon className="w-6 h-6 text-ct-green" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Book Your Free Assessment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll contact you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-ct-mint/50 rounded-3xl p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-ct-green flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll contact you within 24 hours to 
                      schedule your free assessment.
                    </p>
                    <PrimaryButton onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </PrimaryButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Parent/Guardian Name *
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Student's Name *
                        </label>
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                          placeholder="Student's name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                          placeholder="0412 345 678"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                        >
                          <option value="">Select subject</option>
                          {subjects.map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Year Level *
                        </label>
                        <select
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all"
                        >
                          <option value="">Select level</option>
                          {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your goals
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ct-green focus:border-transparent transition-all resize-none"
                        placeholder="What areas need the most attention? Any specific goals or challenges?"
                      />
                    </div>

                    <PrimaryButton 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Book Free Assessment
                        </>
                      )}
                    </PrimaryButton>

                    <p className="text-sm text-center text-muted-foreground">
                      No credit card required • Free 30-minute session included
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Side Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <img
                  src={tutoringCenter}
                  alt="Canberra Tutoring Center"
                  className="rounded-3xl shadow-large w-full h-64 object-cover"
                />

                <div className="bg-ct-mint/50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
                  <ul className="space-y-4">
                    {[
                      "We'll call you within 24 hours to schedule",
                      "30-minute free assessment session",
                      "Identify strengths and areas for improvement",
                      "Create a personalised learning plan",
                      "Match you with the perfect tutor",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-ct-green flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-trust-gradient rounded-3xl p-8 text-primary-foreground">
                  <MessageSquare className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Prefer to Call?</h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Speak directly with our team. We're here to answer all your questions.
                  </p>
                  <a
                    href="tel:+61261234567"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (02) 6123 4567
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
