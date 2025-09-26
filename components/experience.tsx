import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Business Intelligence Developer",
      company: "University of Guelph",
      period: "April 2025 – August 2025",
      location: "Guelph, ON",
      achievements: [
        "Developed Power BI dashboards analyzing $38M+ revenue and 366K+ transactions, tracking KPIs like revenue per customer and average transaction value",
        "Visualized 165K+ facility usage hours across gyms, pools, and arenas, segmented by semester, activity type, and peak time bins to optimize scheduling",
        "Built data models and ETL pipelines, enabling real-time insights into top revenue packages (>$1M) and payment method distribution (71% credit/debit card)",
      ],
    },
  ]

  const education = [
    {
      degree: "Master's of Data Science",
      school: "University of Guelph",
      period: "Sep 2024 – Oct 2025",
      location: "Guelph, Ontario",
      coursework: [
        "Introduction to Data Science",
        "Data Manipulation and Visualization",
        "Artificial Intelligence",
        "Analysis of Big Data",
        "Machine Learning for Sequences",
        "Analysis Of Spatial and Temporal Data",
      ],
    },
    {
      degree: "Bachelor's of Computer Science",
      school: "Sharda University",
      period: "Sep 2019 – Oct 2023",
      location: "Greater Noida, Uttar Pradesh",
      coursework: [
        "Mobile Devices App Development",
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Management Systems",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-balance">Experience & Education</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{exp.title}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium text-primary">{exp.company}</p>
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Education</h3>
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium text-primary">{edu.school}</p>
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
