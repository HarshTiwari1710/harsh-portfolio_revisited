import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "R", "Dart", "SQL"],
    },
    {
      title: "Data Science & ML",
      skills: ["TensorFlow", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Plotly"],
    },
    {
      title: "Business Intelligence",
      skills: ["Power BI", "Tableau", "ETL Pipelines", "Data Modeling", "KPI Development"],
    },
    {
      title: "Web Development",
      skills: ["Streamlit", "FastAPI", "Shiny", "Flutter", "REST APIs"],
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Render.com"],
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "GitHub", "Android Studio", "Jupyter", "Docker"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-balance">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leadership & Extracurricular</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">President, GitHub Club</h4>
                    <p className="text-sm text-muted-foreground">Sharda University • May 2022 – April 2023</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Led Sharda University's largest student club (1000+ members) as President, organizing 8+ events
                  featuring 11+ speakers and engaging 750+ active participants.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
