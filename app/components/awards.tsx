import { fetchCertificates } from "../lib/sanity-utils";
import { Awards } from "../lib/types/awards";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Certificates() {
  const certificates: Awards[] = await fetchCertificates();
  return (
    <section
      id="awards"
      className="h-fit lg:pt-20 pt-20 pb-20 lg:pb-20 flex flex-col font-secondary"
    >
      <div className="md:grid">
        <h2 className="font-secondary mb-12 text-center font-bold text-3xl text-white">
          Certifications
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate._id}
              className="flex flex-row p-5 border border-blue-300 rounded-lg flex-grow justify-between "
            >
              <div className="flex flex-col space-y-2">
                <div className="font-bold text-gray-300">
                  {certificate.name}
                </div>
                <div className="text-gray-500">
                  Issued By{" "}
                  <span className="text-blue-400">{certificate.issuer}</span>
                  <span className="text-blue-500 md:hidden flex">
                    <Link href={certificate.url}>Certificate*</Link>
                  </span>
                </div>
              </div>
              {certificate.image && (
                <div className="flex items-center">
                  <Link href={certificate.url} target="_blank">
                    <Image
                      src={certificate.image}
                      alt={certificate.alt}
                      width={100}
                      height={100}
                      className="object-cover hidden md:flex"
                    />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
