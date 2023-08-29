// Projects.tsx Props
export interface ProjectProps {
  projects: {
    src: string;
    title: string;
    description: string;
    code: string;
    live: string;
    builtWith: any;
  }[];
}

// NavBar.tsx Props
export interface NameProps {
  links: { title: string; href: string }[];
}

// MobileNavBar.tsx Props
export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;

  links: { title: string; href: string }[];
}

// Skills.tsx Props
export interface SkillProps {
  icons: {
    name: string;
    href: string;
    icon: any;
    color: string;
  }[];
}

// Contact.tsx Props
export interface ContactFormProps {
  contacts: {
    htmlFor: string;
    labelName: string;
    type: string;
    id: string;
    message: string;
  }[];
}
