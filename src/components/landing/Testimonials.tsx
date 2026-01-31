import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Year 6 student",
    quote: "My daughter went from dreading maths homework to actually enjoying it. She improved from a C to an A in just 8 weeks! The tutors are patient, skilled, and really know how to connect with kids.",
    rating: 5,
    outcome: "C to A in 8 weeks",
    image: testimonial1,
  },
  {
    name: "James Chen",
    role: "Year 11 Student",
    quote: "The tutors really understand how I learn. My ATAR predictions have gone up significantly since I started. The personalised approach and exam strategies have been game-changers for me.",
    rating: 5,
    outcome: "ATAR improved by 15 points",
    image: testimonial2,
  },
  {
    name: "Lisa Thompson",
    role: "Parent of Year 4 student",
    quote: "No more homework battles! The patience and structure from Canberra Tutoring has been life-changing for our family. My son now sits down to study without any arguments.",
    rating: 5,
    outcome: "Homework stress eliminated",
    image: testimonial3,
  },
];

export function Testimonials() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-ct-yellow/20 text-foreground text-sm font-semibold mb-4">
            ⭐ Trusted by 500+ Families
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Parents & Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from our Canberra tutoring community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-medium transition-all duration-300 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-ct-mint opacity-60" />

                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-ct-yellow text-ct-yellow" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Outcome Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-ct-green/10 text-ct-green text-sm font-medium">
                    ✓ {testimonial.outcome}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-ct-mint"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-ct-green">500+</p>
            <p className="text-sm text-muted-foreground">Students Tutored</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-ct-blue">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-ct-yellow">7+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Expert Tutors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
