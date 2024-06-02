import { getProject } from "@/app/lib/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div className="text-center mt-24">
        <h1 className="text-3xl font-bold text-pink-500">Project Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">
          Sorry, the project you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-5xl font-extrabold text-pink-500">
          {project.name}
        </h1>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-500 font-bold rounded-lg px-4 py-3 hover:text-pink-500 whitespace-nowrap hover:bg-slate-950 transition"
          >
            View Project
          </a>
        )}
      </header>
      {project.image && (
        <Image
          src={project.image}
          alt={project.alt || project.name}
          width={750}
          height={300}
          className="object-cover rounded-lg border border-gray-500"
        />
      )}
      <div className="mt-5 text-lg text-gray-700">
        {project.content && <PortableText value={project.content} />}
      </div>
    </div>
  );
}
