"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code, 
  PaintBucket, 
  Figma, 
  Briefcase, 
  Layout, 
  FileText, 
  PenTool, 
  Lightbulb
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code className="h-5 w-5" />, level: 90 },
  { name: "CSS", icon: <PaintBucket className="h-5 w-5" />, level: 85 },
  { name: "JavaScript", icon: <FileText className="h-5 w-5" />, level: 80 },
  { name: "React", icon: <Layout className="h-5 w-5" />, level: 75 },
  { name: "Tailwind", icon: <PenTool className="h-5 w-5" />, level: 90 },
  { name: "Notion", icon: <Briefcase className="h-5 w-5" />, level: 95 },
  { name: "Canva", icon: <Lightbulb className="h-5 w-5" />, level: 85 },
  { name: "Figma", icon: <Figma className="h-5 w-5" />, level: 80 },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg border border-violet-500/20">
              <Image
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
                alt="Zhenyu profile"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-violet-600/20 rounded-full blur-2xl" />
            <div className="absolute -top-5 -left-5 h-32 w-32 bg-violet-600/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-4">
                  Saya Zhenyu, mahasiswa aktif D4 Manajemen Perkantoran Digital di UNAIR. Saya tertarik dengan pengembangan web, UI/UX design, dan sistem digital modern.
                </p>
                <p className="text-muted-foreground">
                  Passionate about creating seamless digital experiences that combine aesthetics with functionality. I believe in the power of technology to transform and enhance office management systems.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-violet-950/30 p-2 rounded-md text-violet-400 group-hover:text-violet-300 transition-colors">
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}