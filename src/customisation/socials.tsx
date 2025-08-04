import { SocialLink } from "../lib/SocialLink.ts"
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs"

/**
 * Social links to be displayed in the contact section.
 * Follow the template below to add more social links.
 * @type {SocialLink[]}
 */

export const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    link: "https://github.com/privatekai",
    description: "@privatekai",
  },
  {
    icon: <BsEnvelopeFill />,
    link: "mailto:rukaiya.nameera@gmail.com",
    description: "rukaiya.nameera@gmail.com",
  },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/rukaiya-khondaker-5131ab289/",
    description: "@rukaiya-khondaker",
  },
]
