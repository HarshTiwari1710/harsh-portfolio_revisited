import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow data
            enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:harshtiwari1711@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    harshtiwari1711@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:437-830-4847"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    437-830-4847
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Guelph, ON, Canada, N1K0C6</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://linkedin.com/in/harsht1711/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/harsht1711/</p>
                </div>
              </a>

              <a
                href="https://github.com/HarshTiwari1710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/HarshTiwari1710</p>
                </div>
              </a>

             
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
