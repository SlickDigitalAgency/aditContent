import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import { ButtonProps } from "../types";
import {
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Sparkles,
} from "lucide-react";

// Button data for the Call to Action section
// This data is used to render the buttons dynamically
// in the CallToAction component
// Each button has properties like label, variant, icon, type, href, and alignment
// The variant determines the button's style
// The type determines if the button is internal or external
// The href is the link the button points to
// The alignment determines the button's position in the layout

export const buttonData: ButtonProps[] = [
  {
    label: "Let's Collaborate",
    variant: "primary",
    icon: Sparkles,
    type: "internal",
    href: "/contact",
    align: "center", // 👈 new
  },
  {
    label: "Connect on WhatsApp",
    variant: "glass",
    icon: MessageSquare,
    type: "external",
    href: "https://wa.me/+923472788527",
    align: "center",
  },
  {
    label: "LinkedIn",
    variant: "outline",
    icon: Linkedin,
    type: "external",
    href: "https://linkedin.com/company/adit-content",
    align: "center",
  },
  {
    label: "Instagram",
    variant: "ghost",
    icon: Instagram,
    type: "external",
    href: "https://instagram.com/adit.content",
    align: "center",
  },
  {
    label: "Facebook",
    variant: "ghost",
    icon: Facebook,
    type: "external",
    href: "https://facebook.com/aditcontent",
    align: "center",
  },
];

export const ctaContent = {
  headline: "Let's Craft Your Next Masterpiece",
  subtext:
    "Collaborate with Adit Content — a boutique team of editors pushing boundaries.",
  buttons: buttonData,
};
export const footerData = {
  email: "contact@aditcontent.com",
  copyright: "© 2024 Adit Content. All rights reserved.",
  socialLinks: [
    {
      label: "Twitter",
      href: "https://twitter.com/aditcontent",
      icon: Twitter,
      ariaLabel: "Follow us on Twitter",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/aditcontent",
      icon: Instagram,
      ariaLabel: "Follow us on Instagram",
    },
    {
      label: "Facebook",
      href: "https://facebook.com/aditcontent",
      icon: Facebook,
      ariaLabel: "Follow us on Facebook",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/aditcontent",
      icon: Youtube,
      ariaLabel: "Subscribe to our YouTube channel",
    },
  ],
};