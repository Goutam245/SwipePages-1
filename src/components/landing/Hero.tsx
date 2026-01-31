import { motion } from "framer-motion";
import { ChevronDown, GraduationCap, Users, Calendar, Play } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Link } from "react-router-dom";
import heroStudents from "@/assets/images/hero-students.jpg";
import primaryStudent from "@/assets/images/primary-student.jpg";
import highschoolStudent from "@/assets/images/highschool-student.jpg";
import collegeStudent from "@/assets/images/college-student.jpg";

interface HeroProps {
  variant?: "A" | "B" | "C";
  audience?: "primary" | "highschool" | "college";
  subject?: "maths" | "english";
}

const headlineVariants = {
  A: {
    headline: "See Real Results in 8 Weeks",
    subheadline: "Watch your child go from struggling to confident with personalised tutoring that actually works.",
    cta: "Book Free Assessment",
  },
  B: {
    headline: "Stop Homework Battles. Start Seeing Progress.",
    subheadline: "End the frustration. Our expert tutors transform study time into success time.",
    cta: "Get a Plan This Week",
  },
  C: {
    headline: "Clear Plan. Weekly Progress. Proven Results.",
    subheadline: "A structured approach to learning that delivers measurable improvement every session.",
    cta: "See How It Works",
  },
};

const audienceContent = {
  primary: {
    badge: "Primary School (K-6)",
    subtitle: "Build strong foundations and love of learning",
    image: primaryStudent,
  },
  highschool: {
    badge: "High School (7-12)",
    subtitle: "Excel in exams and prepare for success",
    image: highschoolStudent,
  },
  college: {
    badge: "University & College",
    subtitle: "Master complex concepts and ace assessments",
    image: collegeStudent,
  },
};

export function Hero({ variant = "A", audience = "primary", subject = "maths" }: HeroProps) {
  const content = headlineVariants[variant];
  const audienceData = audienceContent[audience];

  return (
    <section className="relative min-h-[95vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroStudents}
          alt="Students learning together"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-ct-softgreen/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-ct-mint/50 rounded-full blur-3xl float-animation" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-ct-mint/30 to-transparent rounded-full" />
      </div>

      <div className="container-narrow relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Audience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft"
            >
              <GraduationCap className="w-5 h-5 text-ct-green" />
              <span className="text-sm font-semibold text-foreground">{audienceData.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              {content.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              {content.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/contact">
                <PrimaryButton variant="hero" size="xl">
                  {content.cta}
                </PrimaryButton>
              </Link>
              <Link to="/services">
                <PrimaryButton variant="outline" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Our Services
                </PrimaryButton>
              </Link>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 flex flex-wrap items-center gap-4"
            >
              <TrustBadge rating={5} reviews="500+ students" />
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm">
                <Users className="w-4 h-4 text-ct-blue" />
                <span className="text-sm text-muted-foreground">50+ Expert tutors</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-ct-green" />
                <span className="text-sm text-muted-foreground">Since 2018</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={audienceData.image}
                alt="Student learning"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-large p-6 border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ct-green/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-ct-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-ct-yellow text-foreground rounded-2xl shadow-lg p-4 pulse-badge"
              >
                <p className="text-sm font-bold">FREE</p>
                <p className="text-xs">Assessment</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <div className="scroll-indicator flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
