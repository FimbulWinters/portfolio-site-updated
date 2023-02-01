import experience from "sanity/schemas/experience";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profiilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: striing;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: striing;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrent: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
