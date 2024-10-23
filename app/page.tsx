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

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
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
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        <span
          className={`h-px bg-current transition-all duration-300 ${
            isActive
              ? "w-12 md:w-24"
              : "w-8 md:w-16 group-hover:w-12 md:group-hover:w-24"
          }`}
        ></span>
        <span
          className={`transition-transform duration-300 ${
            isActive
              ? "translate-x-1 md:translate-x-2"
              : "group-hover:translate-x-1 md:group-hover:translate-x-2"
          }`}
        >
          {children}
        </span>
      </Link>
    );
  };

  return (
    <div className="bg-[#010830] text-white min-h-screen">
      <div className="lg:flex justify-between px-4 md:px-8 lg:px-28 overflow-y-auto">
        <div className="lg:fixed py-6 lg:py-10 w-full lg:w-auto">
          <div className="hidden md:block lg:mt-10 mt-20 flex-col items-start">
            <h1 className="text-4xl font-bold text-left md:text-4xl lg:text-6xl">
              Samuel Stanley
            </h1>
            <p className="font-semibold md:text-xl text-2xl mt-2">
              Full Stack Web Developer
            </p>
          </div>

          <div className="md:hidden mt-24 mb-5">
            <h1 className="font-bold text-center">
              <span className="block text-5xl tracking-[0.4em]">SAMUEL</span>
              <span className="block text-5xl tracking-[0.4em]">STANLEY</span>
            </h1>

            <p className="text-center font-semibold md:text-xl text-2xl mt-2 w-full">
              Full Stack Web Developer
            </p>
          </div>

          <p className="text-center mx-auto mt-3 md:mt-5 md:text-base text-lg max-w-xs md:max-w-sm lg:max-w-md">
            I Help Startups Launch And Grow Their digital Products. I build
            pixel-perfect, engaging, and accessible web experiences.
          </p>

          {/* For Mobile */}
          <header className="lg:hidden items-center fixed top-0 left-0 right-0 bg-[#010830] z-50 p-4">
            <nav className="grid grid-cols-2 place-items-center gap-4 max-w-md mx-auto">
              <NavLink href="#boldFace">Bold face 😃</NavLink>
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </header>

          <nav className="hidden lg:grid mt-10 gap-5">
            <NavLink href="#boldFace">Bold face 😃</NavLink>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="mt-6 md:mt-10 inline-block">
            <FloatingDock
              items={[
                {
                  title: "Instagram",
                  icon: <InstagramLogoIcon />,
                  href: "https://www.instagram.com/samuelginikachukwu/",
                  isExternal: true,
                },
                {
                  title: "Twitter",
                  icon: <IconBrandTwitter />,
                  href: "https://twitter.com/samuelginikachukwu",
                  isExternal: true,
                },
                {
                  title: "LinkedIn",
                  icon: <IconBrandLinkedin />,
                  href: "https://linkedin.com/in/samuelginikachukwu",
                  isExternal: true,
                },
                {
                  title: "Github",
                  icon: <IconBrandGithub />,
                  href: "https://github.com/samuelginikachukwu",
                  isExternal: true,
                },
              ]}
              desktopClassName="bg-transparent border-2 border-white p-2 rounded-full hidden lg:flex"
              mobileClassName="fixed bottom-4 left-4 lg:hidden"
            />
          </div>
        </div>
        <div className="grid gap-10 lg:ml-auto w-full lg:w-1/2 mt-6 lg:mt-0">
          <section id="hero" className="mt-5">
            <div className="w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
              <img
                id="boldFace"
                src="/Samuel.jpg"
                alt="Samuel's portrait"
                className="border-2 w-full h-full object-cover object-top"
              />
            </div>
          </section>

          <section id="about" className="h-auto py-8 md:py-10 pt-24 mt-16 md:mt-8">
  <AboutMe />
</section>

<section id="projects" className="h-auto py-8 md:py-10 pt-24 mt-16 md:mt-8">
  <Projects />
</section>

<section id="contact" className="h-auto py-16 md:py-24 pt-24 mt-16 md:mt-8">
  <ContactForm />
</section>

        </div>
      </div>
    </div>
  );
}
