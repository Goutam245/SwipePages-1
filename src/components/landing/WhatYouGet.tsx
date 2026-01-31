import { motion } from "framer-motion";
import { FileText, UserCheck, BookOpen, BarChart3, Award, Clock } from "lucide-react";
import successCelebration from "@/assets/images/success-celebration.jpg";

const features = [
  {
    icon: FileText,
    title: "Individual Learning Plan",
    description: "A customised roadmap tailored to your child's unique needs, goals, and learning pace.",
    gradient: "from-ct-green/10 to-ct-mint",
  },
  {
    icon: UserCheck,
    title: "Expert Tutor Matching",
    description: "Carefully matched tutors who connect with your child's personality and learning style.",
    gradient: "from-ct-blue/10 to-ct-mint",
  },
  {
    icon: BookOpen,
    title: "Lesson Notes & Resources",
    description: "Comprehensive notes, practice materials, and worksheets after every session.",
    gradient: "from-ct-softgreen/20 to-ct-mint",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Regular updates, detailed reports, and parent communication to show real improvement.",
    gradient: "from-ct-yellow/10 to-ct-mint",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Not happy with your tutor? We'll find a new match at no extra cost.",
    gradient: "from-ct-green/10 to-ct-mint",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions that suit your family. Reschedule with 24 hours notice at no charge.",
    gradient: "from-ct-blue/10 to-ct-mint",
  },
];

export function WhatYouGet() {
  return (
    <section className="section-padding bg-ct-mint/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-ct-green/10 text-ct-green text-sm font-semibold mb-4">
                Everything Included
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                What You Get
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive tutoring packages include everything your child needs to succeed
              </p>
            </motion.div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className={`flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} border border-border/30 hover:shadow-soft transition-all duration-300`}>
                    <div className="w-10 h-10 rounded-xl bg-card shadow-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-ct-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={successCelebration}
              alt="Student celebrating success"
              className="rounded-3xl shadow-large w-full h-[600px] object-cover"
            />
            
            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-ct-green text-primary-foreground rounded-2xl shadow-lg p-6 text-center"
            >
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm opacity-90">Success Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
