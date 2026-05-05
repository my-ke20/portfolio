import {
  Cpu,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Shield,
  Terminal,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
  portrait:
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
  philosophy:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  eduLens:
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1100&q=80",
  aerialKe:
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1100&q=80",
  agriEye:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1100&q=80",
  ironwatch:
    "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1100&q=80",
};

export const skills = [
  { name: "Embedded C/C++", level: 88 },
  { name: "PCB Systems", level: 82 },
  { name: "ROS / Robotics", level: 76 },
  { name: "Control Systems", level: 80 },
  { name: "CAD + Fabrication", level: 74 },
  { name: "Computer Vision", level: 70 },
];

export const timeline = [
  {
    role: "Systems Engineering Attachment",
    organization: "Eve Shield",
    period: "Field systems / defense tech",
    detail:
      "Supported rugged electronics workflows, system validation, and operational documentation for mission-focused hardware.",
  },
  {
    role: "Technical Attachment",
    organization: "KIWASCO",
    period: "Utilities / instrumentation",
    detail:
      "Worked around industrial measurement, maintenance routines, and field reliability practices for water infrastructure.",
  },
  {
    role: "Mechatronics Engineering",
    organization: "Dedan Kimathi University",
    period: "Academic development",
    detail:
      "Focused on embedded control, automation, robotics, manufacturing systems, and applied engineering design.",
  },
];

export const projects = [
  {
    title: "EDU-LENS",
    status: "Prototype",
    tagline: "AR-assisted technical learning platform",
    description:
      "A learning interface that blends spatial visualizations with engineering concepts for lab-centered instruction.",
    tech: ["AR", "Computer Vision", "Next.js", "UX Systems"],
    image: images.eduLens,
    alt: "VR headset used for immersive education",
  },
  {
    title: "AERIAL-KE",
    status: "Design",
    tagline: "Autonomous delivery drone concept",
    description:
      "A Kenyan logistics concept focused on light payload routing, failsafe planning, and rural access constraints.",
    tech: ["UAV", "Navigation", "Telemetry", "CAD"],
    image: images.aerialKe,
    alt: "Drone in flight for autonomous delivery",
  },
  {
    title: "AGRI-EYE",
    status: "Research",
    tagline: "Precision agriculture imaging stack",
    description:
      "Aerial scouting workflow for crop health indicators, field mapping, and repeatable farm intelligence.",
    tech: ["NDVI", "Mapping", "UAV", "Data"],
    image: images.agriEye,
    alt: "Agricultural field prepared for precision monitoring",
  },
  {
    title: "IRONWATCH",
    status: "Concept",
    tagline: "Robotic surveillance and alert system",
    description:
      "A rugged monitoring architecture for perimeter awareness, sensor fusion, and rapid operator feedback.",
    tech: ["Robotics", "Sensors", "Edge AI", "Security"],
    image: images.ironwatch,
    alt: "Surveillance drone system in flight",
  },
];

export const contactItems = [
  { icon: Mail, label: "mail", value: "michaelotieno915@gmail.com" },
  { icon: MapPin, label: "base", value: "Nairobi, Kenya" },
  { icon: Phone, label: "phone", value: "0707880632" },
  { icon: RadioTower, label: "status", value: "Available for engineering work" },
];

export const socialItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/my-ke20" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: Terminal, label: "Email", href: "mailto:michaelotieno915@gmail.com" },
];

export const systemStats = [
  { icon: Cpu, label: "Focus", value: "Embedded Systems" },
  { icon: Shield, label: "Mode", value: "Rugged Design" },
  { icon: RadioTower, label: "Region", value: "Kenya" },
];
