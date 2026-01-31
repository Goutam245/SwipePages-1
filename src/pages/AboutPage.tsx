import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Award, Users, BookOpen, Heart, Target, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/images/team-photo.jpg";
import tutoringCenter from "@/assets/images/tutoring-center.jpg";
import successCelebration from "@/assets/images/success-celebration.jpg";

const stats = [
  { number: "500+", label: "Students Tutored" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Expert Tutors" },
];

const values = [
  {
    icon: Heart,
    title: "Student-Centred",
    description: "Every lesson is designed around your child's unique learning style, pace, and goals.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success through tangible improvements in grades, confidence, and skills.",
  },
  {
    icon: Shield,
    title: "Trusted & Safe",
    description: "All tutors are vetted with Working with Children checks and qualification verification.",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description: "We work closely with parents, providing regular updates and open communication.",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Director",
    bio: "Former university lecturer with 15+ years in education. Passionate about making quality tutoring accessible.",
  },
  {
    name: "James Chen",
    role: "Head of Mathematics",
    bio: "Mathematics PhD with expertise in curriculum development and exam preparation strategies.",
  },
  {
    name: "Emily Watson",
    role: "Head of English",
    bio: "Published author and former high school English teacher specialising in creative and analytical writing.",
  },
  {
    name: "Michael Brown",
    role: "Operations Manager",
    bio: "Ensures every family receives exceptional service and the perfect tutor match.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden">
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transforming Education in Canberra Since 2018
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe every student deserves personalised attention and expert guidance. 
                Our mission is to unlock potential and build confidence through exceptional tutoring.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-y border-border/50">
          <div className="container-narrow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-ct-green mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Canberra Tutoring was founded in 2018 by Dr. Sarah Mitchell, a passionate educator who 
                    saw a gap in the market for truly personalised tutoring services in the ACT.
                  </p>
                  <p>
                    Having worked as a university lecturer and seen countless students struggle with 
                    foundational gaps, Sarah set out to create a tutoring service that focuses on 
                    building strong foundations while nurturing a love of learning.
                  </p>
                  <p>
                    Today, we've helped over 500 students achieve their academic goals, from primary 
                    school through to university level. Our team of 50+ expert tutors share our 
                    commitment to excellence and student success.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={tutoringCenter}
                  alt="Canberra Tutoring Center"
                  className="rounded-3xl shadow-large w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-ct-green text-primary-foreground p-6 rounded-2xl shadow-lg">
                  <Award className="w-8 h-8 mb-2" />
                  <p className="font-bold">Award-Winning</p>
                  <p className="text-sm opacity-90">Tutoring Service</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-ct-mint/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border/50 shadow-card hover:shadow-medium transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-ct-green/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-ct-green" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated educators committed to student success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <img
                src={teamPhoto}
                alt="Canberra Tutoring Team"
                className="w-full h-80 object-cover rounded-3xl shadow-large"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ct-green to-ct-blue mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-ct-green font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Families Choose Us</h2>
                <ul className="space-y-4">
                  {[
                    "Personalised learning plans for every student",
                    "Carefully vetted and matched expert tutors",
                    "Regular progress updates and parent communication",
                    "Flexible scheduling to suit your family",
                    "Proven track record of academic improvement",
                    "Supportive, encouraging learning environment",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-ct-green flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={successCelebration}
                  alt="Student Success"
                  className="rounded-3xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-ct-mint/30">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Child's Learning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free assessment today and discover how we can help your child thrive.
              </p>
              <Link to="/contact">
                <PrimaryButton size="xl">Book Free Assessment</PrimaryButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
