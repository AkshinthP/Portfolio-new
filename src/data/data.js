import { AiOutlineHome, AiOutlineCalculator, AiOutlineSetting, AiOutlineShareAlt } from "react-icons/ai"
import { RiToolsLine, RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast, FaLinkedin, FaGithub } from "react-icons/fa"
import { CgCardClubs, CgDatabase } from "react-icons/cg"
import { TbMailOpened, TbTool } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { GiChart, GiPaper, GiPinballFlipper } from "react-icons/gi"
import { FiLayers } from "react-icons/fi"
import { BsPhone } from "react-icons/bs"
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping, MdToll } from "react-icons/md"
import { BiLaptop, BiLibrary } from "react-icons/bi"

// export const menu = [
//   {
//     id: 1,
//     text: "home",
//     url: "/",
//     icon: <AiOutlineHome />,
//   },
//   {
//     id: 2,
//     text: "resume",
//     url: "/resume",
//     icon: <RiUserLine />,
//   },
//   {
//     id: 3,
//     text: "portfolio",
//     url: "/portfolio",
//     icon: <FaRegLightbulb />,
//   },
//   {
//     id: 4,
//     text: "blog",
//     url: "/blog",
//     icon: <CgCardClubs />,
//   },
//   {
//     id: 5,
//     text: "contact",
//     url: "/contact",
//     icon: <TbMailOpened />,
//   },
// ]

// www.linkedin.com/in/akshinth-p-12a17531b

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
    
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    class: "twitter",
    link:"https://www.linkedin.com/in/akshinth-p-12a17531b"
  },
  {
    id: 3,
    icon: <FaGithub />,
    class: "dribbble",
    link:"https://github.com/AkshinthP"
  },
  {
    id: 4,
    icon: <FaInstagram/>,
    class: "instagram",
    link:"https://www.instagram.com/the_akz__?igsh=NGJ5OG91bXM5aG94"
  },
]

export const side = [
  {
    id: 1,
    num:40,
    text: "Backend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 95,
    text: "Frontend Development",
    class: "skill2",
  },
  {
    id: 3,
    num: 85,
    text: "Web Design",
    class: "skill3",
  },
]

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "Akshinth P",
        icon: <RiUserLine />,
      },
      { text: "Date_of_birth", value: "24-11-2000", icon: <AiOutlineCalculator /> },
      { text: "Email Address", value: "akshinthachu999@gmail.com", icon: <GoMail /> },
      { text: "Phone Number", value: "9447713698", icon: <BsPhoneVibrate /> },
      { text: "Address", value: "Leena Nivas, Malot, Kannadiparamba ", icon: <MdShareLocation /> },
    ],
    bio: [
      {
        para1: "I’m a self-taught frontend developer passionate about crafting clean, responsive, and user-friendly web interfaces. Over the past few months, I’ve completed two major projects and several mini projects, focusing on building real-world applications that enhance the user experience.",
        para2: "My main projects include a Kerala Tourism website built with React.js, showcasing tourist destinations with a clean and interactive UI, and a Food Recipe App that lets users filter dishes by category. I’ve also worked on several mini projects to further improve my frontend development skills.",
        para3: "I specialize in technologies like React.js, HTML, CSS, and JavaScript, and I’m currently dedicating my time to improving my frontend skills through hands-on projects. I'm a quick learner, always exploring new tools and techniques to stay up-to-date with modern web development trends. Creating beautiful and functional websites is what I love to do.",
        images: "./images/bio.png",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <BiLaptop />,
        title: "Programming",
        
        text: "fundamental stack ",
        decs: "JavaScript, HTML, CSS+Sass",
      
      },
      {
        id: 2,
        icon: <TbTool />,
        title: "Tools",
        text: "collection of tools and technologies ",
        decs: "Git, Postman, Figma",
       
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "Frameworks ",
        text: "technology stack for web applications",
        decs: " Node.js, Express.js, REST API",
        
      },
      {
        id: 4,
        icon: <BiLibrary />,
        title: "Libraries",
        text: "modern technology stack",
        decs: "React, Redux, ContextAPI, Material-UI, Axios, Bootstrap,React Router",
      },
      {
        id: 5,
        icon: <CgDatabase />,
        title: "Database",
        text: "Data collection",
        decs: "MongoDB ",
        
      },
      {
        id: 6,
        icon: <RiToolsLine />,
        title: "View Engines ",
        text: "generate dynamic HTML content",
        decs: " HBS, EJS",   
        
      },
      {
        id: 7,
        icon: <GiChart />,
        title: "Familiar  ",
        text: "Basic language",
        decs: " C, C++, Java  ",  
       
        
      },
    ],

    review: [
      {
        id: 1,
        desc: ` A React-based web application for exploring and filtering food recipes by category. 
        Built with a clean and structured layout, the app uses dynamic rendering with React components to display various dishes based on user-selected filters. 
        The focus was on layout consistency and smooth functionality to enhance the browsing experience.`,
        name: "Food Recipe App",
        link: "Online food selecting application",
        // cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OpsCLto4sXJMMRg3o_x4Gfe3lwYQ5lwx1A&usqp=CAU",
        sourceCode:"https://github.com/AkshinthP/Food-Recipes.git",
      },
      {
        id: 2,
        desc: `A React-based web application showcasing the beauty and culture of Kerala.
         Designed with a focus on user experience and responsiveness, the platform features dynamic routing with React Router and a clean, modern UI. 
         Visitors can explore various tourist destinations, view images, and get brief descriptions of each location. Styled using CSS and React components to ensure a smooth and interactive experience.`,
        name: "Kerala Tourism",
        link: "Tourism website",
        // cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3g5SfVO9v7LbzxWA_ym6crhwLQrGFqKZpKNnJrEAwqvFSIL_Dvo8R2b-2568Ss_rz19Y&usqp=CAU",
        sourceCode:"https://github.com/AkshinthP/Tourismkerala.git",
      },
      // {
      //   id: 3,
      //   desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
      //   name: "Edward Johnson",
      //   link: "gorkcoder.com",
      //   cover: "./images/aut3.jpg",
      // },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
]
