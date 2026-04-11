import React from "react";
import { fetchExperience } from "../lib/sanity-utils";
import { Experience } from "../lib/types/Experience";
import Image from "next/image";
import { format } from "date-fns";
import { PortableText } from "next-sanity";

export default async function ExperienceSection() {
  const experiences: Experience[] = await fetchExperience();

  const formatDate = (dateString: string): string => {
    try {
      return format(new Date(dateString), "MMM yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <section
      id="experience"
      className="pt-20 pb-20 lg:pt-32 lg:pb-32 flex flex-col items-center font-secondary"
    >
      <div className="w-full max-w-4xl px-5">
        <h2 className="font-secondary mb-16 text-center font-bold text-3xl lg:text-4xl text-white">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp._id} className="flex gap-4 lg:gap-6">
              {/* Timeline connector - Hidden on mobile, visible on lg */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="relative">
                  {exp.companyLogo && (
                    <div className="w-20 h-20 relative">
                      <Image
                        src={exp.companyLogo}
                        alt={exp.company}
                        fill
                        className="object-fit rounded-full border-2 border-pink-600"
                      />
                    </div>
                  )}
                </div>
                {/* Vertical line */}
                {index !== experiences.length - 1 && (
                  <div className="w-1 bg-gradient-to-b from-pink-600 to-transparent h-24 lg:h-32 mt-4"></div>
                )}
              </div>

              {/* Experience Content */}
              <div className="flex-1 pb-8">
                <div className="p-6 rounded-lg border border-slate-700 hover:border-pink-600 transition-colors duration-300">
                  {/* Mobile Logo - Inside card */}
                  {exp.companyLogo && (
                    <div className="lg:hidden mb-4 flex items-center gap-3">
                      <div className="w-14 h-14 relative flex-shrink-0">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.company}
                          fill
                          className="object-fit rounded-full border-2 border-pink-600"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-pink-500 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Desktop Header */}
                  <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-pink-500 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {formatDate(exp.startDate)} —{" "}
                      {exp.currentlyWorking ? (
                        <span className="text-green-400 font-semibold">
                          Present
                        </span>
                      ) : (
                        formatDate(exp.endDate || "")
                      )}
                    </span>
                  </div>

                  {/* Mobile Date - Below header */}
                  <div className="lg:hidden text-sm text-gray-400 mb-3">
                    {formatDate(exp.startDate)} —{" "}
                    {exp.currentlyWorking ? (
                      <span className="text-green-400 font-semibold">
                        Present
                      </span>
                    ) : (
                      formatDate(exp.endDate || "")
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-3">
                    📍 {exp.location}
                  </p>

                  <div className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-p:m-0 prose-sm lg:prose-base">
                    <PortableText value={exp.description} />
                  </div>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700 text-pink-400 text-sm rounded-full border border-pink-500 border-opacity-30 hover:bg-pink-600 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
