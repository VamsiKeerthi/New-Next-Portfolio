import React from "react";
import { fetchSkills } from "../lib/sanity-utils";
import { Skill } from "../lib/types/Skills";
import Image from "next/image";

export default async function Skills() {
  const skills: Skill[] = await fetchSkills();
  const renderStars = (level: any) => {
    if (level === "beginner") {
      return <span>⭐⭐⭐</span>;
    } else if (level === "intermediate") {
      return <span>⭐⭐⭐⭐</span>;
    } else if (level === "advanced") {
      return <span>⭐⭐⭐⭐⭐</span>;
    } else {
      return null;
    }
  };
  return (
    <section
      id="skills"
      className="h-fit lg:pt-20 pt-20 pb-20 lg:pb-20 flex flex-col"
    >
      <div className="hidden md:grid">
        <h2 className="font-secondary mb-12 text-center font-bold text-3xl text-white">
          Skills
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="flex flex-row p-5 border border-purple-800 hover:scale-105 hover:border-purple-950 rounded-lg transition-all duration-300 flex-grow justify-between"
            >
              <div className="font-extrabold text-gray-500">{skill.name}</div>
              <div className="flex items-center">
                {renderStars(skill.level)}
              </div>
              {skill.image && (
                <div className="flex items-center">
                  <Image
                    src={skill.image}
                    alt={skill.alt}
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <h2 className="md:hidden font-secondary mb-12 text-center font-bold text-3xl text-white">
        Skills
      </h2>
      {skills.length > 0 && (
        <div className="md:hidden mt-5 grid grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-pink-700 border-pink-500 p-2 flex justify-center items-center rounded-md"
              style={{
                animation: `up-down 2s infinite ease-in-out`,
                animationDelay: `${index * 0.7}s`,
              }}
            >
              {skill.image && (
                <Image
                  src={skill.image}
                  alt={skill.alt}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
