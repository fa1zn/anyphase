"use client";

import { motion } from "framer-motion";

const features = [
  {
    stat: "10x",
    label: "Faster outreach",
    description: "What takes traditional agencies weeks, we do in days.",
  },
  {
    stat: "85%",
    label: "Higher response rates",
    description: "AI-personalized pitches that journalists actually read.",
  },
  {
    stat: "24/7",
    label: "Always monitoring",
    description: "Real-time coverage tracking across global media.",
  },
];

const reasons = [
  "AI that understands your industry and audience",
  "Human strategists who know the media landscape",
  "Transparent pricing with no hidden fees",
  "Results you can measure and verify",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Why Anyphase?
            </h2>
            <p className="text-muted text-lg mb-8">
              We're not just another PR agency. We're building the future of
              communications - where AI amplifies human creativity.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100"
              >
                <div className="text-4xl font-bold text-orange-600 mb-1">
                  {feature.stat}
                </div>
                <div className="font-semibold mb-1">{feature.label}</div>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
