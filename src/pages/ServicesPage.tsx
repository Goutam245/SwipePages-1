import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Link } from "react-router-dom";
import {
  Calculator,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import primaryStudent from "@/assets/images/primary-student.jpg";
import highschoolStudent from "@/assets/images/highschool-student.jpg";
import collegeStudent from "@/assets/images/college-student.jpg";
import tutorTeaching from "@/assets/images/tutor-teaching.jpg";

const services = [
  {
    id: "primary",
    title: "Primary School Tutoring",
    subtitle: "Ages 5-12 | Kindergarten to Year 6",
    description: "Build strong foundations in maths and English with patient, engaging tutors who make learning fun.",
    image: primaryStudent,
    color: "ct-green",
    features: [
      "Number sense & basic operations",
      "Reading & comprehension skills",
      "Writing foundations",
      "Times tables mastery",
      "Spelling & grammar basics",
      "Study skills development",
    ],
    outcomes: [
      "Improved confidence in class",
      "Better homework completion",
      "Love of learning fostered",
    ],
    price: "$55/hour",
    href: "/primary",
  },
  {
    id: "highschool",
    title: "High School Tutoring",
    subtitle: "Ages 13-18 | Years 7-12",
    description: "Excel in exams and build skills for senior success with expert tutors who understand the curriculum.",
    image: highschoolStudent,
    color: "ct-blue",
    features: [
      "Algebra & advanced maths",
      "Essay writing & analysis",
      "Exam preparation strategies",
      "NAPLAN preparation",
      "ATAR subject support",
      "Study technique coaching",
    ],
    outcomes: [
      "Consistent grade improvement",
      "Exam confidence",
      "University readiness",
    ],
    price: "$65/hour",
    href: "/highschool",
  },
  {
    id: "college",
    title: "University & College Support",
    subtitle: "Ages 18+ | Tertiary Education",
    description: "Master complex concepts and ace your assessments with specialist academic tutors.",
    image: collegeStudent,
    color: "ct-yellow",
    features: [
      "University mathematics",
      "Academic writing & referencing",
      "Assignment structure & planning",
      "Exam preparation",
      "Research methodology",
      "Time management coaching",
    ],
    outcomes: [
      "Higher grades",
      "Improved GPA",
      "Academic confidence",
    ],
    price: "$75/hour",
    href: "/college",
  },
];

const subjects = [
  {
    icon: Calculator,
    name: "Mathematics",
    description: "From basic arithmetic to advanced calculus, our maths tutors make numbers accessible.",
    levels: ["Primary", "High School", "University"],
    topics: ["Algebra", "Geometry", "Statistics", "Calculus", "Problem Solving"],
  },
  {
    icon: BookOpen,
    name: "English",
    description: "Develop reading, writing, and analytical skills that last a lifetime.",
    levels: ["Primary", "High School", "University"],
    topics: ["Reading Comprehension", "Essay Writing", "Grammar", "Creative Writing", "Text Analysis"],
  },
];

const process = [
  {
    step: 1,
    icon: Target,
    title: "Free Assessment",
    description: "We evaluate your child's current level, learning style, and identify areas for improvement.",
  },
  {
    step: 2,
    icon: Users,
    title: "Tutor Matching",
    description: "We carefully match your child with a tutor who fits their personality and learning needs.",
  },
  {
    step: 3,
    icon: GraduationCap,
    title: "Personalised Plan",
    description: "Receive a custom Individual Learning Plan (ILP) designed around your child's goals.",
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Weekly Progress",
    description: "Regular sessions with progress tracking and parent updates to ensure continuous improvement.",
  },
];

export function ServicesPage() {
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Expert Tutoring for Every Student
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From primary school foundations to university excellence, our personalised 
                tutoring programs help students at every level achieve their full potential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl shadow-large w-full h-80 object-cover"
                      />
                      <div className={`absolute -bottom-4 -right-4 bg-${service.color} text-primary-foreground px-6 py-3 rounded-2xl shadow-lg font-bold`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <span className="text-sm font-semibold text-ct-green uppercase tracking-wide">
                      {service.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-ct-green flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.outcomes.map((outcome) => (
                        <span
                          key={outcome}
                          className="px-3 py-1.5 rounded-full bg-ct-mint text-sm font-medium text-foreground"
                        >
                          ✓ {outcome}
                        </span>
                      ))}
                    </div>

                    <Link to={service.href}>
                      <PrimaryButton>
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </PrimaryButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="section-padding bg-ct-mint/30">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Subjects We Cover
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialised tutoring in core academic subjects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-3xl p-8 shadow-card border border-border/50"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-ct-green/10 flex items-center justify-center">
                      <subject.icon className="w-7 h-7 text-ct-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{subject.name}</h3>
                      <div className="flex gap-2 mt-1">
                        {subject.levels.map((level) => (
                          <span
                            key={level}
                            className="text-xs px-2 py-1 rounded-full bg-ct-blue/10 text-ct-blue font-medium"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{subject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, proven process to academic success
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-ct-green/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-ct-green" />
                  </div>
                  <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-ct-green text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="section-padding bg-foreground text-primary-foreground">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transparent, Affordable Pricing
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  No hidden fees or surprises. Our pricing includes everything you need 
                  for academic success.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Individual Learning Plan included",
                    "Expert tutor matching at no extra cost",
                    "Lesson notes and resources provided",
                    "Weekly progress updates",
                    "Flexible scheduling",
                    "No lock-in contracts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-ct-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <PrimaryButton 
                    className="bg-white text-trust hover:bg-white/90"
                    size="lg"
                  >
                    Get Started Today
                  </PrimaryButton>
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={tutorTeaching}
                  alt="Expert Tutoring"
                  className="rounded-3xl shadow-xl"
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
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-ct-yellow text-ct-yellow" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Rated 5 stars by 500+ Canberra families
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your free assessment today and take the first step towards academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <PrimaryButton size="xl">Book Free Assessment</PrimaryButton>
                </Link>
                <a href="tel:+61261234567">
                  <PrimaryButton variant="outline" size="xl">
                    <Clock className="w-5 h-5 mr-2" /> Call (02) 6123 4567
                  </PrimaryButton>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
