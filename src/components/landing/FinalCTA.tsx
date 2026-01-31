import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Link } from "react-router-dom";

interface FinalCTAProps {
  variant?: "A" | "B" | "C";
}

export function FinalCTA({ variant = "A" }: FinalCTAProps) {
  const ctaText = {
    A: "Book Your Free Assessment Now",
    B: "Get Your Plan This Week",
    C: "Start Your Learning Journey",
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-trust-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Limited spots available for Term 1</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to See Your Child Thrive?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Join 500+ Canberra families who have transformed their children's learning journey
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-4">
            <Link to="/contact">
              <PrimaryButton
                variant="default"
                size="xl"
                className="bg-white text-trust hover:bg-white/90 hover:text-trust shadow-xl group"
              >
                {ctaText[variant]}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </PrimaryButton>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-6">
            <a
              href="tel:+61261234567"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(02) 6123 4567</span>
            </a>
            <a
              href="mailto:hello@canberratutoring.com.au"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email Us</span>
            </a>
            <a
              href="sms:+61261234567"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">SMS</span>
            </a>
          </div>

          <p className="text-sm text-white/60">
            No credit card required • Free assessment included • 100% satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
