import React from "react"

export interface SocialLink {
  /**
   * The icon to be displayed for the social link.
   * This can be any React component - feel free to use a library like react-icons.
   */
  icon: React.ReactNode
  /**
   * The link to the social media profile.
   */
  link: string
  /**
   * The text to be displayed beside the icon.
   */
  description: string
}
