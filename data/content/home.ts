type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "Go",
    icon: "https://iili.io/tNWMle.th.png",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "PostgreSQL",
    icon: "https://iili.io/ZBLzEN.th.png",
  },
  {
    title: "AWS",
    icon: "https://iili.io/tNj9ol.th.jpg",
  },
  {
    title: "Kubernetes",
    icon: "https://iili.io/ZBLnQR.th.png",
  },
  {
    title: "Docker",
    icon: "https://iili.io/tNXZTx.th.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    name: "John Woods",
    job: " ",
  },
  {
    quote:
      "“Give someone a program, frustrate them for a day. Teach someone to program, frustrate them for a lifetime.",
    name: "Muhammad Waseem",
    job: " ",
  },
  {
    quote:
      "Some of the best programming is done on paper, really. Putting it into the computer is a minor detail.",
    name: "Max Kanat-Alexander",
    job: " ",
  },
];
