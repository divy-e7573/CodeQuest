import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Terminal, Shield, Cpu, BookOpen, Users, Sparkles } from "lucide-react";

export const metadata = {
  title: "About | LeetCode Clone",
  description: "Learn more about the Full-Stack LeetCode platform.",
};

export default function AboutPage() {
  const highlights = [
    {
      icon: Terminal,
      title: "Interactive Code Execution",
      description:
        "Execute solutions in real-time across JavaScript, Python, and Java using sandboxed Judge0 execution workers.",
    },
    {
      icon: Shield,
      title: "Robust Authentication & RBAC",
      description:
        "Secured with Clerk authentication, edge middleware protection, and role-based permissions for problems management.",
    },
    {
      icon: Cpu,
      title: "Automated Solution Verification",
      description:
        "Admins can author problems with test cases that are automatically verified before persisting to the database.",
    },
    {
      icon: BookOpen,
      title: "Custom Problem Playlists",
      description:
        "Curate and organize your favorite algorithmic problems into custom playlists to power your interview prep.",
    },
  ];

  const techStack = [
    { name: "Next.js 15", category: "Framework" },
    { name: "React 19", category: "UI Library" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma ORM", category: "Data Layer" },
    { name: "Monaco Editor", category: "Code Editor" },
    { name: "Judge0 API", category: "Code Sandbox" },
    { name: "Clerk", category: "Auth" },
    { name: "Tailwind CSS", category: "Styling" },
  ];

  return (
    <div className="min-h-screen py-32 container mx-auto px-4 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <Badge
          variant="secondary"
          className="bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
        >
          <Sparkles className="w-3.5 h-3.5 mr-1" />
          About The Platform
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Full-Stack <span className="text-amber-500">LeetCode Clone</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          An interactive competitive programming environment designed for developers
          to sharpen algorithmic problem-solving skills, test code in isolated
          sandboxes, and track mastery.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-all duration-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tech Stack Section */}
      <Card className="mb-16">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-amber-500" />
            <CardTitle className="text-2xl">Architecture & Tech Stack</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border bg-muted/40 hover:bg-muted transition-colors text-center space-y-1"
              >
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

