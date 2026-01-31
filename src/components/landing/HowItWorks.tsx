import { motion } from "framer-motion";
import { ClipboardCheck, Users, TrendingUp } from "lucide-react";
import tutorTeaching from "@/assets/images/tutor-teaching.jpg";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Free Assessment",
    description: "We evaluate your child's current level, learning style, and goals in a friendly 30-minute session.",
    color: "bg-ct-green/10",
    iconColor: "text-ct-green",
  },
  {
    number: "02",
    icon: Users,
    title: "Custom Plan",
    description: "We create an Individual Learning Plan (ILP) and match your child with the perfect tutor.",
    color: "bg-ct-blue/10",
    iconColor: "text-ct-blue",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Weekly Progress",
    description: "Watch confidence grow with regular sessions, progress tracking, and parent updates.",
    color: "bg-ct-yellow/10",
    iconColor: "text-ct-yellow",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ct-blue/10 text-ct-blue text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to transform your child's learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-ct-green via-ct-blue to-ct-yellow hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-soft`}>
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card shadow-md flex items-center justify-center border border-border/50">
                      <span className="text-sm font-bold text-foreground">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
              src={tutorTeaching}
              alt="Expert tutor teaching student"
              className="rounded-3xl shadow-large w-full h-[450px] object-cover"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-large p-6 border border-border/50 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-ct-green to-ct-blue border-2 border-card"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">+50 tutors</span>
              </div>
              <p className="text-sm text-foreground font-medium">
                Carefully matched to your child's needs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
