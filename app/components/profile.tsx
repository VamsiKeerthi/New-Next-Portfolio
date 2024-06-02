import React from "react";
import { fetchProfileDetails } from "../lib/sanity-utils";
import { Profile } from "../lib/types/Profile";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function ProfileInfo() {
  const profiles: Profile[] = await fetchProfileDetails();
  return (
    <section id="home" className="mb-8 lg:mb-28">
      {profiles.map((profile: Profile) => (
        <div
          key={profile._id}
          className="flex flex-col-reverse justify-between md:flex-row "
        >
          <div className="flex-grow">
            <h1 className="lg:mt-0 mt-6 font-primary sm:py-2 text-2xl font-arima text-white font-bold ">
              Hello, I am
            </h1>
            <h2 className="font-secondary text-3xl sm:text-2xl md:text-6xl lg:text-7xl text-white font-extrabold">
              {profile.name}
            </h2>
            <div className="relative h-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full animate-move">
                {profile.jobTitles.map((title: string, index: number) => (
                  <div
                    key={index}
                    className="h-12 font-bold text-pink-700 flex items-center text-2xl"
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6 font-secondary container mt-5 text-lg text-gray-400 max-w-sm">
              <h2>
                <PortableText value={profile.content} />
              </h2>
            </div>
            <div>
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:items-center font-primary mt-6 hover:border-pink-700 border border-white hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
          {profile.image && (
            <div className="flex">
              <Image
                src={profile.image}
                alt={profile.alt}
                width={300}
                height={100}
                className="w-full  object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
