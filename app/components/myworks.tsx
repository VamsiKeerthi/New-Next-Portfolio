import React from "react";
import Link from "next/link";
import { fetchProjects } from "../lib/sanity-utils";
import Image from "next/image";
import { Project } from "../lib/types/Project";

export default async function Projects() {
  const projects: Project[] = await fetchProjects();
  return (
    <section
      id="projects"
      className="grid place-items-center text-sm lg:text-base"
    >
      <div className="lg:pt-5 lg:pb-10">
        <h2 className="text-center font-secondary mt-24 font-bold text-3xl text-white">
          My Projects
        </h2>
        <div className="container mt-5 grid md:grid-cols-2 lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-0">
          {projects.map((project) => (
            <div className="flex flex-col" key={project._id}>
              {" "}
              {/* Added key prop */}
              <Link
                href={`/projects/${project.slug}`}
                className="my-12 rounded-lg hover:scale-105 hover:border-pink-500 transition shadow-lg hover:shadow-pink-700 "
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg hover:*"
                  />
                )}
                <div className="mt-2 font-extrabold text-white font-secondary">
                  {project.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
