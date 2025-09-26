import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Smart Vertical Farm",
      period: "January 2025 - April 2025",
      description:
        "An intelligent ML-powered web application that revolutionizes farming through data-driven crop selection and yield optimization. This comprehensive platform combines advanced machine learning models with intuitive interfaces to help farmers maximize profits while minimizing resource consumption.",
      keyMetrics: [
        { label: "Resource Efficiency", value: "20% improvement" },
        { label: "Price Forecasting", value: "85% accuracy" },
        { label: "Yield Prediction", value: "90% accuracy" },
        { label: "Profit Increase", value: "Up to 25%" },
      ],
      technologies: ["Python", "Streamlit", "TensorFlow", "XGBoost"],
      github: "https://github.com/HarshTiwari1710/Smart_Vertical_Farm",
      demo: "https://github.com/HarshTiwari1710/Smart_Vertical_Farm",
      image: "/modern-vertical-farm-with-green-plants-growing-in-.jpg",
    },
    {
      title: "Crime Watch",
      period: "January 2025 - April 2025",
      description:
        "A comprehensive crime analytics dashboard that transforms raw crime data into actionable insights. This interactive platform enables real-time exploration of crime patterns across Canada, empowering policymakers and researchers with powerful visualization and export capabilities.",
      keyMetrics: [
        { label: "Crime Records", value: "100,000+" },
        { label: "Geographic Coverage", value: "All Canada" },
        { label: "Data Export", value: "CSV/Excel" },
        { label: "Crime Categories", value: "Multiple types" },
      ],
      technologies: ["R", "Shiny", "leaflet", "plotly"],
      github: "https://github.com/HarshTiwari1710/crime_watch",
      demo: "https://github.com/HarshTiwari1710/crime_watch",
      image: "/interactive-crime-analytics-dashboard-with-maps-ch.jpg",
    },
    {
      title: "SoberShot",
      period: "October 2024 - December 2024",
      description:
        "A sophisticated beverage recommendation system that leverages collaborative filtering and deep learning to deliver personalized drink suggestions. This full-stack application combines modern web technologies with advanced AI to create an engaging user experience for beverage discovery.",
      keyMetrics: [
        { label: "Prediction Accuracy", value: "85%" },
        { label: "Drink Database", value: "1,000+ entries" },
        { label: "API Integration", value: "Together API" },
        { label: "Deployment", value: "Render.com" },
      ],
      technologies: ["Python", "MongoDB", "Recommendation Systems", "FastAPI"],
      github: "https://github.com/HarshTiwari1710/Sobershot",
      demo: "https://github.com/HarshTiwari1710/Sobershot",
      image: "/modern-beverage-recommendation-app-interface-with-.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-balance">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions combining machine learning, data visualization, and full-stack
            development
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {project.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {project.keyMetrics.map((metric, i) => (
                        <div key={i} className="text-center p-3 rounded-lg bg-muted/50">
                          <div className="text-lg font-semibold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
  <Button variant="outline" className="w-full gap-2 group/btn bg-transparent">
    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
    View Code
  </Button>
</a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
