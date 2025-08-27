"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface NavItem {
  id: string;
  name: string;
}

export interface HeaderProps {
  className?: string;
}

const navItems: NavItem[] = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [highlightStyle, setHighlightStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Update highlight position when activeItem changes or on resize
  const updateHighlight = () => {
    const el = navRefs.current[activeItem];
    if (el) {
      setHighlightStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => {
      window.removeEventListener("resize", updateHighlight);
    };
  }, [activeItem]);

  // Setup Intersection Observer to track which section is in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -80% 0px", // Adjust trigger before fully out of view
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex justify-center items-center fixed w-full top-3 px-4 z-50 ${className}`}>
      <nav className="relative hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-black/10 backdrop-blur-lg shadow-lg">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full bg-white shadow-lg z-0"
          animate={{
            left: highlightStyle.left,
            width: highlightStyle.width,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ pointerEvents: "none" }}
        />

        {navItems.map(({ id, name }) => {
          const isActive = activeItem === id;
          return (
            <Link
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
              ref={(el) => { navRefs.current[id] = el; }}
              className={`relative z-10 inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-gray-900" : "text-white hover:bg-white/10"
              }`}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
