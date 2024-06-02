"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchProfileDetails } from "../lib/sanity-utils";
import { Profile } from "../lib/types/Profile";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const profileDetails = await fetchProfileDetails();
      setProfiles(profileDetails);
    };
    fetchData();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-secondary h-20  mx-auto rounded-b-md py-5 px-8 text-monofont">
      <div className="flex text-white justify-between">
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="flex items-start">
          <Link href="/" scroll={false}>
            <Image src="/v logo.png" alt="Logo" width={30} height={30} />
          </Link>
        </div>
        <div className="hidden md:flex gap-2 ">
          {profiles.map((profile: Profile) => (
            <div key={profile._id} className="flex flex-row gap-4">
              {profile.contactInfo.map((item: any) => (
                <div key={item.link}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.image && (
                      <div>
                        <Image
                          src={item.image}
                          alt=""
                          width={30}
                          height={40}
                          className="rounded-full object-fill"
                        />
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-end gap-20">
          <Link href="/" scroll={false}>
            <button
              onClick={() => scrollToSection("skills")}
              className={pathname === "/#skills" ? "active" : ""}
            >
              Skills
            </button>
          </Link>
          <Link href="/" scroll={false}>
            <button
              onClick={() => scrollToSection("projects")}
              className={pathname === "/#projects" ? "active" : ""}
            >
              Projects
            </button>
          </Link>
          <Link href="/" scroll={false}>
            <button
              onClick={() => scrollToSection("contact")}
              className={pathname === "/#contact" ? "active" : ""}
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="mx- my-5 md:hidden bg-white text-black flex flex-col p-4 absolute w-56 ">
          <Link href="/" scroll={false}>
            <button
              onClick={() => {
                scrollToSection("skills");
                toggleMenu();
              }}
              className={pathname === "/#skills" ? "active" : ""}
            >
              Skills
            </button>
          </Link>
          <Link href="/" scroll={false}>
            <button
              onClick={() => {
                scrollToSection("projects");
                toggleMenu();
              }}
              className={pathname === "/#projects" ? "active" : ""}
            >
              Projects
            </button>
          </Link>
          <Link href="/" scroll={false}>
            <button
              onClick={() => {
                scrollToSection("contact");
                toggleMenu();
              }}
              className={pathname === "/#contact" ? "active" : ""}
            >
              Contact
            </button>
          </Link>
          <div className="flex flex-start gap-2 mt-4">
            {profiles.map((profile: Profile) => (
              <div key={profile._id} className="flex flex-row gap-4">
                {profile.contactInfo.map((item: any) => (
                  <div key={item.link}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.image && (
                        <div>
                          <Image
                            src={item.image}
                            alt=""
                            width={30}
                            height={40}
                            className="rounded-full object-fit"
                          />
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
