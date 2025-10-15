"use client"

import { Button } from "@/components/ui/button"
import { CommandPalette } from "@/components/command-palette"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BackgroundFX } from "@/components/background-fx"
import { useReveal } from "@/components/use-reveal"

export default function HomePage() {
  // section reveals
  const hero = useReveal()
  const work = useReveal()
  const skills = useReveal()
  const experience = useReveal()
  const about = useReveal()
  const contact = useReveal()

  return (
    <main className="min-h-dvh">
      {/* background */}
      <BackgroundFX />

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold">
            Anurag Bheemani
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:underline underline-offset-4 text-primary">
              Work
            </a>
            <a href="#skills" className="hover:underline underline-offset-4 text-primary">
              Skills
            </a>
            <a href="#experience" className="hover:underline underline-offset-4 text-primary">
              Experience
            </a>
            <a href="#about" className="hover:underline underline-offset-4 text-primary">
              About
            </a>
            <a href="#contact">
              <Button className="h-9 px-4">Hire Me</Button>
            </a>
          </nav>
          <div className="md:hidden">
            <a href="#contact" className="text-sm underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        ref={hero.ref as any}
        className={`mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${hero.visible ? "is-visible" : ""}`}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-balance text-3xl md:text-5xl font-bold">
              Backend-Focused Full Stack Developer & AI Engineer
            </h1>
            <p className="text-pretty text-muted-foreground">
              I specialize in building scalable MERN applications, production-ready GenAI systems, and optimizing backend performance with advanced AI integrations.
            </p>
            <div className="flex items-center gap-3">
              <a href="#work">
                <Button className="h-10 px-5">View Projects</Button>
              </a>
              <a href="#about" className="text-sm underline underline-offset-4 text-primary">
                About Me
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Press Cmd/Ctrl + K to search.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 will-change-transform">
            <div className="aspect-[16/10] rounded-lg border border-border bg-card lift animate-tilt-slow" />
            <div className="aspect-[16/10] rounded-lg border border-border bg-card lift animate-tilt-medium" />
            <div className="aspect-[16/10] rounded-lg border border-border bg-card lift animate-tilt-medium" />
            <div className="aspect-[16/10] rounded-lg border border-border bg-card lift animate-tilt-fast" />
          </div>
        </div>
      </section>

      <section
        id="work"
        ref={work.ref as any}
        className={`scroll-mt-16 mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${work.visible ? "is-visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Zest Sync Player v2.0",
              description: "Revolutionary AI video player delivering real-time subtitle generation with 90%+ accuracy across 14 languages and 20× performance optimization.",
              links: { github: "https://github.com/Anu277/Zest-Sync-Player-v2.0", website: "https://zestsync.netlify.app/" },
              skills: ["Python", "OpenAI Whisper", "Hugging Face", "GenAI APIs"],
            },
            {
              title: "Face Sorter App",
              description: "Smart mobile application automating photo organization through advanced facial recognition, processing 100+ photos with 70% accuracy.",
              links: { github: "https://github.com/Anu277/Face-Sorter-App", website: "https://face-sorter.netlify.app/" },
              skills: ["React Native", "FastAPI", "MongoDB", "Google Cloud"],
            },
            {
              title: "Music Discovery Engine",
              description: "Intelligent recommendation platform leveraging similarity-based filtering with dynamic Spotify API integration for personalized music discovery.",
              links: { github: "https://github.com/Anu277/Music-Recommendation", website: "https://music-recommendation-sys.streamlit.app/" },
              skills: ["Python", "Scikit-learn", "Streamlit", "Spotify API"],
            },
            {
              title: "Real-Time Gesture Recognition",
              description: "Computer vision application enabling hardware-free gesture control with 86% accuracy using MediaPipe and Random Forest classification.",
              links: { github: "https://github.com/Anu277/Hand-sign-recognition-ml", website: "#contact" },
              skills: ["Python", "MediaPipe", "OpenCV", "Random Forest"],
            },
            {
              title: "Telecom Customer Analytics",
              description: "Predictive analytics solution achieving 89% accuracy in churn prediction through sophisticated feature engineering and ML optimization.",
              links: { github: "https://github.com/Anu277/Machine-Learning/tree/main/Telecom-Customer-Churn-Prediction", website: "#contact" },
              skills: ["Python", "Scikit-learn", "Pandas", "Data Analytics"],
            },
          ].map((p, idx) => (
            <div key={idx} className="rounded-lg border border-border bg-card p-4 lift">
              <div className="aspect-[16/10] rounded-md border border-border bg-card mb-3" />
              <div className="flex items-center justify-between">
                <div className="font-medium">{p.title}</div>
                {p.experience ? (
                  <span className="text-xs px-2 py-0.5 rounded-full border border-border">{p.experience}</span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(p.skills || []).map((skill) => (
                  <span key={skill} className="text-xs rounded-md border border-border bg-muted/40 px-2 py-1">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a href={p.links.github} className="text-sm underline underline-offset-4 text-primary">
                  GitHub
                </a>
                <a href={p.links.website} className="text-sm underline underline-offset-4 text-primary">
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        ref={skills.ref as any}
        className={`scroll-mt-16 mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${skills.visible ? "is-visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-medium mb-2">Languages</div>
            <div className="flex flex-wrap gap-1.5 text-sm">
              {["Python", "JavaScript", "SQL", "TypeScript"].map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-muted/40 px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-medium mb-2">Libraries/Frameworks</div>
            <div className="flex flex-wrap gap-1.5 text-sm">
              {["React.js", "Node.js", "Express.js", "FastAPI", "Streamlit"].map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-muted/40 px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-medium mb-2">AI / ML</div>
            <div className="flex flex-wrap gap-1.5 text-sm">
              {["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "LangChain", "Transformers", "LLM Fine-Tuning"].map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-muted/40 px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="font-medium mb-2">Tools</div>
            <div className="flex flex-wrap gap-1.5 text-sm">
              {["Git", "Docker", "GitHub Actions", "AWS EC2", "GCP", "Firebase"].map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-muted/40 px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 sm:col-span-2 lg:col-span-1">
            <div className="font-medium mb-2">Database</div>
            <div className="flex flex-wrap gap-1.5 text-sm">
              {["MongoDB", "MySQL", "Firebase"].map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-muted/40 px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={experience.ref as any}
        className={`scroll-mt-16 mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${experience.visible ? "is-visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold">Backend & Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">GLOOMDEV • Intern</p>
            </div>
            <span className="text-sm text-muted-foreground">Jul 2024 – Dec 2024</span>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Architected and deployed gloom-dev.com within first month, focusing on robust backend integration and scalable infrastructure</li>
            <li>• Engineered intelligent chatbot system using LangChain and Google GenAI, processing 50+ PDF queries with RAG architecture</li>
            <li>• Built 2 production-ready e-commerce platforms with MERN stack, implementing secure Razorpay payment gateway (50+ transactions)</li>
            <li>• Designed optimized MongoDB schemas with JWT authentication and bcrypt security, achieving ~20% API latency reduction</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["MERN Stack", "LangChain", "Google GenAI", "MongoDB", "JWT", "Razorpay"].map((skill) => (
              <span key={skill} className="text-xs rounded-md border border-border bg-muted/40 px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={about.ref as any}
        className={`scroll-mt-16 mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${about.visible ? "is-visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">About</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a Backend-focused Full Stack Developer and AI Engineer with expertise in building scalable MERN applications and production-ready GenAI systems. Currently pursuing B.Tech in Computer Science (AI & ML) at JNTUH with a CGPA of 6.98/10.00.
            </p>
            <p className="text-muted-foreground">
              My passion lies in optimizing backend performance, implementing advanced AI integrations, and creating intelligent systems that bridge cutting-edge technology with user-friendly experiences.
            </p>
            <div className="space-y-2">
              <h3 className="font-medium">Leadership & Activities</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tech Fest Head - Led 24 members across 6 project groups</li>
                <li>• Placement Coordinator - Coordinated 10+ placement drives for 100+ students</li>
                <li>• Coding Club Mentor - Trained 30+ students in DSA fundamentals</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Education</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">B.Tech Computer Science (AI & ML)</div>
                  <div className="text-muted-foreground">JNTUH • Dec 2021 - Jul 2025 • CGPA: 6.98/10.00</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Certifications</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GloomDev Full Stack Internship Certificate</li>
                <li>• SAP ABAP Certification - EDUNET Foundation</li>
                <li>• ML/IoT/Deep Learning Certification</li>
                <li>• Code Unnati Innovation Marathon 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={contact.ref as any}
        className={`scroll-mt-16 mx-auto max-w-6xl px-4 py-16 md:py-24 reveal ${contact.visible ? "is-visible" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI/ML engineering and full-stack development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Email:</span>
                <a href="mailto:anuragbheemani.27@gmail.com" className="text-primary hover:underline">
                  anuragbheemani.27@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Phone:</span>
                <span className="text-muted-foreground">+91 9390940626</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Location:</span>
                <span className="text-muted-foreground">Telangana, India</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://linkedin.com/in/anurag-bheemani" className="text-sm underline underline-offset-4 text-primary">
                LinkedIn
              </a>
              <a href="https://github.com/anu277" className="text-sm underline underline-offset-4 text-primary">
                GitHub
              </a>
              <a href="https://twitter.com/Anu_b_27" className="text-sm underline underline-offset-4 text-primary">
                Twitter
              </a>
            </div>
          </div>
          <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget as HTMLFormElement)
            const name = (fd.get("name") as string)?.trim()
            const email = (fd.get("email") as string)?.trim()
            const message = (fd.get("message") as string)?.trim()
            const subject = `New message from ${name || "Portfolio Site"}`
            if (!name || !email || !message) {
              alert("Please fill in your name, email, and message.")
              return
            }
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, subject }),
              })
              if (!res.ok) throw new Error("Request failed")
              alert("Thanks! Your message was sent.")
              ;(e.currentTarget as HTMLFormElement).reset()
            } catch (err) {
              alert("Sorry, there was an error sending your message. Please try again later.")
            }
          }}
          className="mx-auto w-full max-w-xl grid grid-cols-1 gap-4 rounded-lg border border-border bg-card p-4"
        >
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} />
          </div>
          <div>
            <Button type="submit" className="h-10 px-5">
              Send Message
            </Button>
          </div>
        </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Anurag Bheemani</span>
          <div className="flex gap-4">
            <a
              href="https://github.com/anu277"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/anurag-bheemani"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <CommandPalette />
    </main>
  )
}