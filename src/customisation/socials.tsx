import { SocialLink } from "../lib/SocialLink.ts"
import { BsEnvelopeFill, BsGithub } from "react-icons/bs"

/**
 * Social links to be displayed in the contact section.
 * Follow the template below to add more social links.
 * @type {SocialLink[]}
 */

export const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    link: "https://github.com",
    description: "@myGithub",
  },
  {
    icon: <BsEnvelopeFill />,
    link: "mailto:mail@example.com",
    description: "mail@example.com",
  },
]
