"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          anyphase
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-muted hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#why-us" className="text-muted hover:text-foreground transition-colors">
            Why Anyphase
          </a>
          <a
            href="#contact"
            className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#services" className="text-muted hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#how-it-works" className="text-muted hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#why-us" className="text-muted hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Why Anyphase
              </a>
              <a
                href="#contact"
                className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
