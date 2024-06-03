import { getProject } from "@/app/lib/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="p-5">
      <h1 className="text-center text-4xl text-white font-secondary font-extrabold lg:start-0 place-items-center">
        {project.name}
      </h1>
      <br></br>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10">
        {project.image && (
          <div>
            <Image
              src={project.image}
              alt={project.alt || project.name}
              width={500}
              height={1000}
              className="w-full h-auto object-cover rounded border border-black shadow-lg hover:shadow-pink-700"
            />
            <div className="flex lg:flex-row justify-around items-center mt-6 gap-4 lg:gap-6">
              <div>
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:items-center font-primary mt-6 hover:border-pink-700 border border-white hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                )}
              </div>
              <div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:items-center font-primary mt-6 hover:border-pink-700 border border-white hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col">
          <h1 className="font-bold font-primary text-2xl text-pink-700 mb-4">
            About my project
          </h1>
          <div className="w-full text-md lg:text-lg text-gray-400 leading-7 lg:leading-8 space-y-4">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
