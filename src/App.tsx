import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }
    return prefersDark
  })

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const features = [
    {
      title: "React 19",
      description:
        "Latest React with concurrent features, improved Suspense, and enhanced server components support.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82 1.49c.77.16 1.58.28 2.4.36.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.24m9.82-11.49c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51.3-.51m-9.82 1.49c-.51-2.14-.32-3.61.31-3.96.63-.38 2.01.2 3.6 1.7-.52.59-1.03 1.23-1.51 1.9-.82.08-1.63.2-2.4.36z" />
        </svg>
      ),
    },
    {
      title: "Tailwind CSS v4",
      description:
        "Next-gen CSS framework with native cascade layers, container queries, and lightning-fast builds.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
      ),
    },
    {
      title: "shadcn/ui",
      description:
        "Beautiful, accessible components built with Radix UI and Tailwind CSS. Fully customizable.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
          <path d="M12 12l9-4.5M12 12v9M12 12L3 7.5" />
        </svg>
      ),
    },
    {
      title: "TypeScript",
      description:
        "Full type safety with strict mode enabled. Catch errors early and improve developer experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
          <path d="M3 3h18v18H3V3zm10.71 14.29c.18.18.43.29.71.29s.53-.11.71-.29l2.59-2.59a1.003 1.003 0 0 0-1.42-1.42L14 15.59V10a1 1 0 0 0-2 0v5.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l2.59 2.59c.18.18.43.29.71.29l.12-.01z" />
        </svg>
      ),
    },
    {
      title: "Vite",
      description:
        "Blazing fast development server with instant HMR. Production builds optimized with Rollup.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
          <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
        </svg>
      ),
    },
    {
      title: "ESLint",
      description:
        "Modern linting setup with recommended rules for React, TypeScript, and hooks best practices.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.66 3.83L12 11.83 4.34 8.01 12 4.18zM4 9.68l7 3.5v6.64l-7-3.5V9.68zm9 10.14v-6.64l7-3.5v6.64l-7 3.5z" />
        </svg>
      ),
    },
  ]

  const techStack = [
    { name: "React", version: "19.2" },
    { name: "Tailwind CSS", version: "4.1" },
    { name: "TypeScript", version: "5.9" },
    { name: "Vite", version: "7.2" },
    { name: "shadcn/ui", version: "latest" },
  ]

  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-semibold">React Template</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/itss0urav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              )}
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <Badge variant="secondary" className="mb-6">
            Production Ready
          </Badge>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Modern Apps
            </span>
            <br />
            at Lightning Speed
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A carefully crafted starter template featuring React 19, Tailwind CSS v4,
            and shadcn/ui. Everything you need to build beautiful, accessible web
            applications.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/itss0urav/react-19-tailwind-v4-shadcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                Get Started
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://ui.shadcn.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <Badge key={tech.name} variant="outline" className="px-3 py-1">
                {tech.name}{" "}
                <span className="ml-1 text-muted-foreground">v{tech.version}</span>
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="mx-auto max-w-4xl" />

        {/* Features Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="mb-16 text-center">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pre-configured with industry best practices and modern tooling. Start
              building immediately without any setup.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group transition-all hover:shadow-lg hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mb-2 text-primary transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <Badge variant="secondary" className="mb-4">
                Quick Start
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Up and Running in Seconds
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Clone the repository and start building your next project immediately.
              </p>
            </div>

            <Card className="mx-auto max-w-3xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500" />
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <div className="size-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground">Terminal</span>
                  <div className="w-12" />
                </div>
                <div className="space-y-2 p-6 font-mono text-sm">
                  <p>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">git clone</span>{" "}
                    https://github.com/itss0urav/react-19-tailwind-v4-shadcn.git
                  </p>
                  <p>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">cd</span>{" "}
                    react-19-tailwind-v4-shadcn
                  </p>
                  <p>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">npm install</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="text-primary">npm run dev</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">
                    &lt;2s
                  </CardTitle>
                  <CardDescription>Dev server startup</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">
                    0
                  </CardTitle>
                  <CardDescription>Config files to edit</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">
                    100%
                  </CardTitle>
                  <CardDescription>TypeScript coverage</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join developers worldwide using this template to ship faster. Star the
            repo if you find it useful!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/itss0urav/react-19-tailwind-v4-shadcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Star on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/itss0urav/react-19-tailwind-v4-shadcn/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issues
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold">React 19 + Tailwind v4 + shadcn</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Created by</span>
              <a
                href="https://github.com/itss0urav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                itss0urav
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Open source under the MIT License. Built with love for the developer
            community.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
