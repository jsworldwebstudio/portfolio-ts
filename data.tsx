import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { MdDeveloperMode } from 'react-icons/md'
import { FaServer } from 'react-icons/fa'
import { BsCircleFill } from 'react-icons/bs'
import { IProject, IService, ISkill } from './type'

export const services:IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Developer",
    about: 
      "I can build a beautiful and scalable Web application using <b>HTML</b>,<b> CSS</b> and <b>React.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend Developer",
    about: 
      "Build databases, servers, apis using <b>Node</b>, <b>Express</b>, <b>Mongo DB</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "Fullstack Development",
    about: 
      "Develop robust Fullstack applications using <b>Next Js</b> and Headless CMS such as <b>Strapi</b>",
  },
  {
    Icon: RiComputerLine,
    title: "Mobile Developer",
    about: 
      "Build beautiful and scalable applications for Android and iOS mobile devices using <b>React Native</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about: 
      "Stunning user interface designer using <b>Figma</b> and <b>Framer</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Logo Designer",
    about: 
      "Allow me to build a custom logo to distinguish your brand in <b>Figma</b>",
  },
]

export const languages:ISkill[] = [
  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill
  },
  {
    name: 'JavaScript',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'React Native',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Node/Express',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'NextJs',
    level: '80%',
    Icon: BsCircleFill
  },
  {
    name: 'Bootstrap',
    level: '60%',
    Icon: BsCircleFill
  },
]

export const tools:ISkill[] = [
  {
    name: 'Figma',
    level: '85%',
    Icon: BsCircleFill
  },
  {
    name: 'Sketch',
    level: '45%',
    Icon: BsCircleFill
  },
  {
    name: 'Illustrator',
    level: '40%',
    Icon: BsCircleFill
  },
  {
    name: 'Framer',
    level: '45%',
    Icon: BsCircleFill
  },
]

export const portfolios:IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view of the corona virus across the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"]
  },
  {
    id: 2,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 3,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },
  {
    id: 4,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  }
]