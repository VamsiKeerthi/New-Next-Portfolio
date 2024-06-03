import { Project } from "./types/Project";
import { Profile } from "./types/Profile";
import { Skill } from "./types/Skills";
import { createClient, groq } from "next-sanity";

export const revalidate = 30;

export async function fetchProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "z03n0ht0",
    dataset: "production",
    apiVersion: "2023-05-15",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "z03n0ht0",
    dataset: "production",
    apiVersion: "2023-05-09",
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        site,
        content,
    }`,
    { slug }
  );
}

export async function fetchProfileDetails(): Promise<Profile[]> {
  const client = createClient({
    projectId: "z03n0ht0",
    dataset: "production",
    apiVersion: "2023-05-09",
  });

  return client.fetch(
    groq`*[_type == "profile"]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        jobTitles,
        resume,
        content,
        contactInfo[]  { title, "image" : image.asset->url , link }
    }`
  );
}

export async function fetchSkills(): Promise<Skill[]> {
  const client = createClient({
    projectId: "z03n0ht0",
    dataset: "production",
    apiVersion: "2023-05-09",
  });

  return client.fetch(
    groq`*[_type == "skills"]| order(_createdAt asc){
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        level
    }`
  );
}
