import React from "react";
import Link from "next/link";
import { fetchProjects } from "../lib/sanity-utils";
import Image from "next/image";
import { GetStaticProps } from "next";
import { Project } from "../lib/types/Project";

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60, // Revalidate at most once every 60 seconds
  };
};

export default async function Projects() {
  const projects: Project[] = await fetchProjects();
  return (
    <section
      id="projects"
      className=" grid place-items-center text-sm lg:text-base"
    >
      <div className="lg:pt-5 lg:pb-10">
        <h2 className="text-center font-secondary mt-24 font-bold text-3xl text-white">
          My Projects
        </h2>
        <div className="container mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <div className="flex flex-col">
              <Link
                href={`/projects/${project.slug}`}
                className="my-12 rounded-lg hover:scale-105 hover:border-pink-500 transition shadow-white hover:shadow-md hover:shadow-white "
                key={project._id}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg hover:*"
                  />
                )}
                <div className="mt-2 font-extraboild text-pink-400">
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

{
  /* <div>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:items-center font-primary mt-6 hover:border-pink-700 border border-white hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    >
                      SOURCE CODE
                    </a>
                  )}
                </div> */
}
