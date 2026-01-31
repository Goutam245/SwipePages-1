import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FreeBadge } from "@/components/ui/FreeBadge";
import { useState } from "react";
import { Link } from "react-router-dom";

interface OfferCardProps {
  variant?: "A" | "B" | "C";
}

export function OfferCard({ variant = "A" }: OfferCardProps) {
  const [includeReport, setIncludeReport] = useState(false);

  const benefits = [
    "11 × 60-minute personalised lessons",
    "Expert tutor matched to your child",
    "Individual Learning Plan (ILP)",
    "Weekly progress updates",
    "Lesson notes & resources included",
    "Flexible scheduling",
  ];

  const ctaText = {
    A: "Book Free Assessment",
    B: "Get a Plan This Week",
    C: "Start Your Journey",
  };

  const totalPrice = includeReport ? 660 : 605;
  const regularPrice = includeReport ? 770 : 715;
  const savings = regularPrice - totalPrice;

  return (
    <section className="section-padding bg-gradient-to-b from-background to-ct-mint/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ct-yellow/20 text-foreground text-sm font-semibold mb-4">
            ✨ Most Popular Package
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transform Your Child's Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything included for a complete term of academic growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-ct-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-ct-green/10 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-ct-yellow" />
                  <span className="text-sm font-semibold text-ct-green uppercase tracking-wide">Premium Package</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Term Tutoring Plan</h3>
              </div>

              {/* Pricing */}
              <div className="text-center py-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">11 Lessons</span>
                  <span className="text-2xl text-muted-foreground">×</span>
                  <span className="text-4xl md:text-5xl font-bold text-ct-green">$55</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Total: <span className="line-through">${regularPrice}</span>{" "}
                  <span className="font-semibold text-foreground">${totalPrice}</span>
                  <span className="text-sm ml-1 text-ct-green">(save ${savings})</span>
                </p>
              </div>

              {/* Free Assessment Badge */}
              <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-ct-mint/50">
                <FreeBadge text="FREE" pulse />
                <span className="font-semibold text-foreground">Initial Assessment Session</span>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ct-green/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-ct-green" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Report Upsell */}
              <div className="border-t border-border/50 pt-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={includeReport}
                    onChange={(e) => setIncludeReport(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-border text-ct-green focus:ring-ct-green cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground group-hover:text-ct-green transition-colors">
                        Add Detailed Progress Report
                      </span>
                      <span className="text-sm px-2 py-0.5 rounded-full bg-ct-blue/10 text-ct-blue font-medium">
                        +$55
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprehensive assessment with recommendations for ongoing improvement
                    </p>
                  </div>
                </label>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-3">
                <Link to="/contact" className="block">
                  <PrimaryButton className="w-full group" size="lg">
                    {ctaText[variant]}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </PrimaryButton>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  No credit card required • Free assessment included
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
