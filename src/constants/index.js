import {
  facebook,
  instagram,
  twitter,
  linkedin,
  buildings,
  rocket,
  stonks,
  robot,
  man_in_yellow,
  woman_zebra,
  fashion_woman,
  baker_woman,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  two_woman,
  people_handshake,
  people_walking,
  woman_looking,
} from "../assets"

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "about_us",
    title: "About Us",
    path: "/about",
  },
  {
    id: "contact_us",
    title: "Contact Us",
    path: "/contact",
  },
  { id: "privacy_policy", title: "Privacy Policy", path: "/privacy" },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
]

export const catagories = [
  {
    id: 1,
    icon: buildings,
    title: "Business",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    icon: rocket,
    title: "Startup",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 3,
    icon: stonks,
    title: "Economy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 4,
    icon: robot,
    title: "Technology",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
]

export const authors = [
  {
    id: 1,
    name: "Floyd Miles",
    icon: man_in_yellow,
    job: "Content Writer @Company",
    socialMedia: [
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
    ],
  },
  {
    id: 2,
    icon: woman_zebra,
    name: "Dianne Russell",
    job: "Content Writer @Company",
    socialMedia: [
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
    ],
  },
  {
    id: 3,
    icon: fashion_woman,
    name: "Jenny Wilson",
    job: "Content Writer @Company",
    socialMedia: [
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
    ],
  },
  {
    id: 4,
    icon: baker_woman,
    name: "Leslie Alexander",
    job: "Content Writer @Company",
    socialMedia: [
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
    ],
  },
]

export const logos = [
  { id: 1, icon: logo_1 },
  { id: 2, icon: logo_2 },
  { id: 3, icon: logo_3 },
  { id: 4, icon: logo_4 },
  { id: 5, icon: logo_5 },
]

export const blogsCards = [
  {
    id: 1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: two_woman,
  },
  {
    id: 2,
    category: "BUSINESS",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: people_handshake,
  },
  {
    id: 3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: woman_looking,
  },
  {
    id: 4,
    category: "TECHNOLOGY",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: people_walking,
  },
  {
    id: 5,
    category: "ECONOMY",
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: two_woman,
  },
]

export const blogText = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
  list: [
    { id: 1, text: "Lorem ipsum dolor sit amet" },
    { id: 2, text: "Non blandit massa enim nec scelerisque" },
    { id: 3, text: "Neque egestas congue quisque egestas" },
  ],
}

export const whatToRead = [
  {
    id: 1,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students: ",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: two_woman,
  },
  {
    id: 2,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students: ",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: people_handshake,
  },
  {
    id: 3,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students: ",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    photo: woman_looking,
  },
]
