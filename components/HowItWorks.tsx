"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Story",
    description:
      "Tell us about your company, product, or announcement. Our AI analyzes your narrative to identify the most compelling angles.",
  },
  {
    number: "02",
    title: "AI Finds Your Audience",
    description:
      "We match your story with the right journalists, publications, and timing. No spray-and-pray - just precision targeting.",
  },
  {
    number: "03",
    title: "Launch & Track",
    description:
      "Your campaign goes live with personalized outreach. Monitor coverage in real-time and measure impact with detailed analytics.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From story to coverage in three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-4" />
              )}
              <div className="text-6xl font-bold text-orange-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
