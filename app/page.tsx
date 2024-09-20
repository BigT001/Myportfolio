"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AboutMe from "./_Components/AboutMe";
import Projects from "./_Components/Projects";
import ContactForm from "./_Components/ContactForm";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { BentoGrid } from "@/components/ui/bento-grid";

function HomePage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = activeSection === href.substring(1);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = href.substring(1);
      setActiveSection(targetId);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`group flex items-center gap-2 w-fit ${
          isActive ? "text-white" : ""
        }`}
      >
        <span
          className={`h-px bg-current transition-all duration-300 ${
            isActive ? "w-24" : "w-16 group-hover:w-24"
          }`}
        ></span>
        <span
          className={`transition-transform duration-300 ${
            isActive ? "translate-x-2" : "group-hover:translate-x-2"
          }`}
        >
          {children}
        </span>
      </Link>
    );
  };

  return (
    <div>
      <div className="lg:flex Grid justify-between px-28 bg-[#010830] text-white overflow-y-auto">
        <div className="lg:fixed py-10">
          <h1 className="text-6xl font-bold">Samuel Stanley</h1>
          <p className="font-semibold text-2xl mt-2">
            Full Stack Software Engineer
          </p>
          <p className="mt-5 text-lg lg:w-96">
            I Help Startups Launch And Grow Their Products. I build
            pixel-perfect, engaging, and accessible digital experiences.
          </p>

          <nav className="grid mt-10 gap-5">
            <NavLink href="#boldFace">Bold face 😃 </NavLink>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="mt-10 inline-block">
          <FloatingDock
              items={[
                { 
                  title: "Instagram", 
                  icon: <InstagramLogoIcon />, 
                  href: "https://www.instagram.com/samuelginikachukwu/",
                  isExternal: true
                },
                { 
                  title: "Twitter", 
                  icon: <IconBrandTwitter />, 
                  href: "https://twitter.com/samuelginikachukwu",
                  isExternal: true
                },
                { 
                  title: "LinkedIn", 
                  icon: <IconBrandLinkedin />, 
                  href: "https://linkedin.com/in/samuelginikachukwu",
                  isExternal: true
                },
                { 
                  title: "Github", 
                  icon: <IconBrandGithub />, 
                  href: "https://github.com/samuelginikachukwu",
                  isExternal: true
                },
              ]}
              desktopClassName="bg-transparent border-2 border-white p-2 rounded-full"
              mobileClassName="fixed bottom-4 left-4"
            />
          </div>
        </div>
        <div className="grid gap-10 ml-auto w-1/2">
          <section id="hero" className="mt-5">
            <div className="w-full h-[600px] overflow-hidden">
              <img
                id="boldFace"
                src="/Samuel.jpg"
                alt="Samuel's image"
                className="border-2 w-full h-full object-cover object-top"
              />
            </div>
            
          </section>

          <section id="about" className="h-auto py-10">
            <AboutMe />
          </section>

          <section id="projects" className="h-auto py-10">
            <Projects />
          </section>

          <section id="contact" className="h-auto py-24">
            <ContactForm />
          </section>

          <section id="contact" className="h-auto py-24">
            
           <BentoGrid/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
