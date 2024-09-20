import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ai Form Builder",
    description: "Virtual Assistant Website.",
    image: "/Samuel.png",
    tags: ["React", "Node.js", "Postgress", "Drizzle, MongoDB"],
    githubLink: "https://github.com/BigT001",
    liveLink: "https://faabvs.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive virtual Assistant Website with animated background, calender, contact form",
    image: "/faabvsscreeshot.png",
    tags: [
      "React",
      "Next js",
      "Typescript",
      "JavaScript",
      "Tailwindcss",
      "CSS",
    ],
    githubLink: "https://github.com/BigT001/Faabvs",
    liveLink: "https://faabvs.com",
  },
  {
    title: "Task Management System",
    description: "A Kanban-style task management app.",
    image: "/Samuel.png",
    tags: ["Vue.js", "Firebase", "Real-time Database"],
    githubLink: "https://github.com/BigT001",
    liveLink: "https://task-management-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills and projects.",
    image: "/Samuel.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/BigT001",
    liveLink: "https://yourdomain.com",
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-4xl mb-2">My Projects</h1>
      <p className="text-lg text-gray-400 mb-8">
        Here are some of the projects I've worked on. Each one represents a
        unique challenge and learning experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover object-top rounded-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-2">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600 mb-3">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs text-[#010830]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <Github className="mr-1 h-3 w-3" /> GitHub
              </Button>
              <Button
                size="sm"
                onClick={() => window.open(project.liveLink, "_blank")}
              >
                <ExternalLink className="mr-1 h-3 w-3 bg-[#010830]" /> Visit
                site
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
