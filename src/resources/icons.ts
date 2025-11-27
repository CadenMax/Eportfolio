import { IconType } from "react-icons";

// Existing Imports
import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
  PiSparkleDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiLinux,
  SiUnity,
  SiGodotengine,
  SiSharp,
  SiPython,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaDatabase,
  FaCode,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,

  // Existing Tech
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,

  // New Icons Based on Your Skills
  react: SiReact,
  reactnative: SiReact,
  angular: SiAngular,
  html5: SiHtml5,
  css3: SiCss3,
  nodejs: SiNodedotjs,
  express: SiNodedotjs, // fallback
  database: FaDatabase,
  sql: FaDatabase,
  php: SiPhp,
  laravel: SiLaravel,
  aws: SiAmazon,
  docker: SiDocker,
  linux: SiLinux,
  unity: SiUnity,
  godot: SiGodotengine,
  csharp: SiSharp,
  python: SiPython,

  // API-related
  api: FaCode,
  openai: FaCode,

  // Procedural generation / sparkles
  sparkles: PiSparkleDuotone,

  // Socials
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
