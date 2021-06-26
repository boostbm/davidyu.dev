import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Welcome to David Yu's Website.", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "David Yu's Portfolio Website.", // e.g: Welcome to my website
  image: 'https://davidyu.dev/static/adc1498a16897494283ef420877aa787/89f4f/profile.jpg',
  siteTitle: "Welcome to David Yu's Website.",
  siteName: "David Yu's Website.",
  socialTitle: `Portfolio`,
  siteUrl: `https://www.davidyu.dev`,
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'David Yu',
  subtitle: 'I am YOUR Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tune & Flying Home Studio',
    info: 'Tune & Flying Home Studio is a personal website for Architecture and Interior Design services.',
    info2: 'GATSBY / REACT, STYLED COMPONENTS, GRAPHQL.',
    url: 'https://flyinghomestudio.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Pure Func',
    info: 'Pure Func is a modern web development agency committed to making blazing fast websites. From static e-commerce sites for small companies to full-stack solutions for large organizations, we offer development solutions of all shapes and sizes. Above all else, we believe in crafting websites built for today’s fast-paced, global economy by leveraging cutting-edge technology and emphasizing international compatibility.',
    info2: 'VITE / REACT, SASS, GRAPHQL',
    url: 'https://purefunc.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Code My Menu',
    info: 'Code My Menu Offers contactless solutions from the safety of your phone, smart analytics to help you optimize engagement, and limitless design options, Code My Menu connects your offline audience to all your online experiences.',
    info2: 'GATSBY / REACT, STYLED COMPONENTS, GRAPHQL.',
    url: 'https://codemymenu.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/boostbm',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/boostbm',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/boostbm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
