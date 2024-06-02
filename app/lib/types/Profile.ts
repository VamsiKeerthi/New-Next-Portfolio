import { PortableTextBlock } from "next-sanity";

export type Profile = {
  _id: string;
  _createdAt: string;
  name: string;
  image: string;
  alt: string;
  jobTitles: string[];
  resume: string;
  content: PortableTextBlock;
  contactInfo: any;
};
