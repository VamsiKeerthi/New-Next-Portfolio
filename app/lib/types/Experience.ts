import { PortableTextBlock } from "next-sanity";

export type Experience = {
  _id: string;
  _createdAt: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  currentlyWorking: boolean;
  description: PortableTextBlock[];
  companyLogo?: string;
  skills?: string[];
};
