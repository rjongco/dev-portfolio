'use client';
import dynamic from 'next/dynamic';
import Button from './buttons/Button';
import DarkModeButton from './buttons/DarkModeButton';
import Link from './buttons/Link';
import NavButton from './buttons/NavButton';
import ListItem from './lists/ListItem';
import TabList from './lists/TabList';
import Skill from './skills/Skill';
import SkillIcon from './skills/SkillIcon';
import SocialIcon from './socials/SocialIcon';
import SocialLink from './socials/SocialLink';
import AuthorImage from './ui/AuthorImage';
import Cursor from './ui/Cursor';
import ProjectCard from './ui/ProjectCard';
// import ShowLottie from './ui/ShowLottie';
import Sidebar from './ui/Sidebar';
import Wrapper from './ui/Wrapper';
import Hidden from './ui/Hidden';
import Decoder from './ui/Decoder';
import BoxReveal from './ui/Boxreveal';
import SubHeading from './ui/SubHeading';
// import TechCloud from './ui/TechCloud';
import { Timeline } from './ui/Timeline';
import Intro from './ui/Intro';

const TechCloud = dynamic(() => import('./ui/TechCloud'), { 
  ssr: false 
});
const ShowLottie = dynamic(() => import('./ui/ShowLottie'), { 
  ssr: false 
});

export {
  AuthorImage,
  Button,
  Cursor,
  DarkModeButton,
  Link,
  ListItem,
  NavButton,
  ProjectCard,
  ShowLottie,
  Sidebar,
  Skill,
  SkillIcon,
  SocialIcon,
  SocialLink,
  TabList,
  Wrapper,
  Hidden,
  Decoder,
  BoxReveal,
  SubHeading,
  TechCloud,
  Timeline,
  Intro
};
