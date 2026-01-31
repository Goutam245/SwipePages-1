import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, DollarSign, Users, BookOpen, Calendar, Shield } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "What happens in the free assessment?",
    answer: "Our free 30-minute assessment evaluates your child's current skill level, learning style, and specific challenges. We use this to create a personalised Individual Learning Plan (ILP) and match them with the perfect tutor.",
  },
  {
    icon: Clock,
    question: "How long are the tutoring sessions?",
    answer: "Each session is 60 minutes long - the optimal duration for focused learning without fatigue. Sessions can be scheduled at times that suit your family's routine.",
  },
  {
    icon: DollarSign,
    question: "What's included in the $55 per lesson price?",
    answer: "Everything! This includes your child's Individual Learning Plan, expert tutor matching, lesson notes and resources, progress tracking, and parent updates. There are no hidden fees.",
  },
  {
    icon: Users,
    question: "How are tutors selected and vetted?",
    answer: "All our tutors undergo rigorous screening including qualification verification, Working With Children checks, and teaching ability assessments. We match tutors based on subject expertise, teaching style, and personality fit.",
  },
  {
    icon: BookOpen,
    question: "What subjects do you offer?",
    answer: "We specialise in Mathematics and English for all year levels from primary school through to Year 12 and university. Our tutors cover curriculum-aligned content as well as exam preparation.",
  },
  {
    icon: Calendar,
    question: "Can I change or cancel sessions?",
    answer: "Absolutely! We understand life happens. You can reschedule or cancel sessions with 24 hours notice at no charge. We're flexible and here to work around your family's schedule.",
  },
  {
    icon: Shield,
    question: "What if we're not satisfied?",
    answer: "Your satisfaction is guaranteed. If you're not happy with your tutor match, we'll find a new tutor at no extra cost. We're committed to finding the right fit for your child.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-ct-mint/20">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our tutoring services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 shadow-soft px-6 data-[state=open]:shadow-medium transition-shadow duration-300"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <faq.icon className="w-5 h-5 text-ct-green flex-shrink-0" />
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
