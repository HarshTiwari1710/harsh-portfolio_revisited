"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">Harsh Tiwari</h1>
            <p className="text-xl text-primary font-medium">Data Science Graduate</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build intelligent data solutions and machine learning applications that drive business insights. My
              expertise spans from Power BI dashboards analyzing millions in revenue to ML models predicting crop yields
              with 90% accuracy.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Guelph, ON, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>harshtiwari1711@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/HarshTiwari1710"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/harsht1711/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="w-72 h-72 rounded-xl overflow-hidden bg-secondary">
              <img
                src="harsh-photo.jpg"
                alt="Harsh Tiwari - Data Science Graduate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
