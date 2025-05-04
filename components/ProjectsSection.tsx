"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  Code, 
  Palette, 
  Database
} from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Digital Office System",
    description: "A comprehensive office management system built with React and Node.js",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#",
    icon: <Database className="h-10 w-10 text-violet-500" />
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description: "Interactive learning platform for digital management students",
    image: "https://images.pexels.com/photos/8636605/pexels-photo-8636605.jpeg",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    githubUrl: "#",
    demoUrl: "#",
    icon: <Code className="h-10 w-10 text-green-500" />
  },
  {
    id: 3,
    title: "UI/UX Portfolio",
    description: "Collection of UI/UX design projects for digital products",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["Figma", "Adobe XD", "Sketch"],
    githubUrl: "#",
    demoUrl: "#",
    icon: <Palette className="h-10 w-10 text-purple-500" />
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest works showcasing my skills in web development, design, and digital systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-card/50 border border-border/50 rounded-lg overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-violet-950/30 text-violet-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}