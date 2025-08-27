import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Code,
  TrendingUp,
  Star,
  Github,
  Eye,
  Check,
  X,
  Users,
  Activity,
  Award,
  Zap,
  Globe,
  ChevronRight,
  Play,
  Sparkles,
  Cpu,
  Shield,
  CreditCard,
  Cloud,
  Image,
  Edit,
  Brain,
  Palette,
  Folder,
  ScanLine,
  FileText,
} from "lucide-react";

import aiInterviewImage from "@/assets/images/image.jpg";
import jobImage from "@/assets/images/job.png";
import yogaImage from "@/assets/images/Yoga.png";
import snypse from '../assets/images/snypse.png';

import { EnhancedProjectCardProps, Project, ProjectModalProps, Result } from "./types";


const portfolioProjects: Project[] = [
 {
  company: "Full-Stack Development",
  year: " April 2025",
  title: "Virtual File Explorer CLI",
  shortDescription: "Browser-based CLI to explore a virtual file system",
  description:
    "Built a browser-based command line interface (CLI) to explore a virtual file system. Users can run commands like mkdir, cd, touch, and ls, navigate folders, create files/folders, and see live terminal output with proper feedback. Styled with Tailwind CSS to give a smooth and geeky developer experience.",
  results: [
    {
      title: "Commands Implemented",
      metric: "mkdir, cd, touch, ls",
      icon: "zap",
    },
    {
      title: "Interactive Terminal",
      metric: "Live Output",
      icon: "activity",
    },
    {
      title: "Frontend Tech",
      metric: "React + TS",
      icon: "code",
    },
    {
      title: "Styled Components",
      metric: "Tailwind CSS",
      icon: "paintbrush",
    },
  ],
  link: "https://virtual-shell-pbl-2025.vercel.app/",
  github: "https://github.com/mohit7-7/Virtual-Shell---PBL-2025",
  image: jobImage, // keep the same image
  tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Frontend"],
  status: "Live",
  teamSize: 4,
  duration: "3 months",
  highlights: [
    "Implemented browser-based CLI commands",
    "Interactive virtual file system with live feedback",
    "Clean and modern UI with Tailwind CSS",
  ],
},
  
{
    company: "Full-Stack Development",
    year: "2025",
    title: "YogaMate – Digital Wellness Ecosystem",
    shortDescription:
      "Scalable digital wellness platform with real-time HD WebRTC video",
    description:
      "Built a scalable digital wellness platform with real-time HD WebRTC video, enabling 50+ concurrent live yoga sessions and interactive instructor–student engagement. Implemented secure role-based access, JWT authentication, and a data-driven admin dashboard for analytics, session tracking, and personalized recommendations.",
    results: [
      { title: "Concurrent Live Sessions", metric: "50+", icon: "users" },
      {
        title: "HD Video Quality",
        metric: "WebRTC",
        icon: "play",
      },
      {
        title: "Admin Dashboard Analytics",
        metric: "Real-time",
        icon: "activity",
      },
      {
        title: "User Authentication",
        metric: "JWT",
        icon: "shield",
      },
    ],
    link: "https://yoga-mate-frontend.vercel.app/",
    github: "https://github.com/mohit7-7/YogaMateFrontend",
    image: yogaImage,
    tags: ["React", "Video Streaming", "Analytics", "AWS", "Redux"],
    status: "Live",
    teamSize: 1,
    duration: "4 months",
    highlights: [
      "Real-time video streaming",
      "Analytics dashboard",
      "Community features",
    ],
  },
{
  company: "Machine Learning Project",
  year: "Jan 2024",
  title: "Apple Plant Disease Detection",
  shortDescription: "Random Forest-based disease detection for apple plants",
  description:
    "Developed a machine learning model using Random Forest classifier to detect diseases in apple plants. Collected and preprocessed dataset from Kaggle, trained the model, and deployed it using a Flask web application for easy access. Integrated image upload functionality for real-time predictions and user-friendly interface.",
  results: [
    {
      title: "ML Model Used",
      metric: "Random Forest",
      icon: "cpu",
    },
    {
      title: "Accuracy",
      metric: "High",
      icon: "activity",
    },
    {
      title: "Image Upload",
      metric: "Real-time",
      icon: "camera",
    },
    {
      title: "Deployment",
      metric: "Flask App",
      icon: "server",
    },
  ],
  link: "", // Removed live demo link
  github: "https://github.com/aman-singh78", // Keep your GitHub link
  image: aiInterviewImage, // Replace with your image import
  tags: ["Python", "Flask", "Random Forest", "ML", "Image Processing"],
  featured: true,
  status: "Live",
  teamSize: 1,
  duration: "1 month",
  highlights: [
    "Random Forest classifier for disease detection",
    "Image-based predictions",
    "Flask web app deployment",
  ],
}
];

const getResultIcon = (iconName: string) => {
  const icons = {
    users: Users,
    activity: Activity,
    award: Award,
    zap: Zap,
    play: Play,
    check: Check,
    cpu: Cpu,
    shield: Shield,
    "credit-card": CreditCard,
    cloud: Cloud,
    image: Image,
    edit: Edit,
    "trending-up": TrendingUp,
    brain: Brain,
    palette: Palette,
    folder: Folder,
    scan: ScanLine,
    "file-text": FileText,
  };
  const IconComponent = icons[iconName as keyof typeof icons] || TrendingUp;
  return <IconComponent className="w-4 h-4" />;
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={
                    typeof project.image === "string"
                      ? project.image
                      : project.image.src
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {project.featured && (
                <div className="absolute top-6 left-6">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3 shadow-xl"
                  >
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white text-sm font-semibold">
                    Active
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-3">
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">
                    Team: {project.teamSize}
                  </span>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                      {project.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.highlights?.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300 text-sm font-medium">
                          {highlight}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result: Result, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg">
                          {result.icon ? (
                            getResultIcon(result.icon)
                          ) : (
                            <TrendingUp className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-slate-300 text-sm font-medium">
                          {result.title}
                        </span>
                      </div>
                      {result.metric && (
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                          {result.metric}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, idx: number) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-slate-800/60 text-slate-300 text-sm rounded-full border border-slate-700/50 font-medium hover:bg-slate-700/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                {project.link && project.link.trim() !== "" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                      <Eye className="w-5 h-5" />
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.a>
                )}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.link && project.link.trim() !== "" ? "flex-1" : "w-full"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="w-full bg-slate-800 hover:bg-slate-700 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 border border-slate-700 flex items-center justify-center gap-2 shadow-lg">
                    <Github className="w-5 h-5" />
                    Source Code
                  </button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const EnhancedProjectCard = ({ project, index }: EnhancedProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl h-[560px] flex flex-col"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        id="projects"
      >
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <motion.img
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

          {project.featured && (
            <div className="absolute top-4 right-4">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2 shadow-xl backdrop-blur-sm"
              >
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col h-[320px]">
          <div className="h-[100px] flex flex-col justify-between mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  {project.company}
                </span>
              </div>
              <span className="text-slate-400 text-xs font-medium">
                {project.year}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-emerald-200 transition-colors line-clamp-2 min-h-[56px]">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          <div className="h-[50px] mb-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5 h-[30px] overflow-hidden">
              {project.tags.slice(0, 4).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-700/50 font-medium hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 h-fit"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-1 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full border border-slate-700/50 h-fit">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="h-[90px] mb-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Key Metrics
            </h4>
            <div className="grid grid-cols-2 gap-2 h-[50px]">
              {project.results.slice(0, 2).map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="p-1.5 bg-emerald-500/20 rounded-lg flex-shrink-0">
                    {result.icon ? (
                      getResultIcon(result.icon)
                    ) : (
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-emerald-400 font-bold text-xs truncate">
                      {result.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4" />
              View Details
            </motion.button>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-xl text-white transition-all duration-300 border border-slate-700 flex items-center justify-center shadow-lg hover:shadow-slate-800/25 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400 font-semibold text-sm">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects & Solutions
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explore my technical expertise through innovative applications and
            scalable solutions that push the boundaries of modern web
            development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {portfolioProjects.map((project, index) => (
            <EnhancedProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
