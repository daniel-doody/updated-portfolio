import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
  {
    id: 0,
    title: 'SkaleSafe',
    desc: 'A Kubernetes monitoring & alerting tool for auto-scaling metrics',
    img: '/static/projects/exec-comp-analyzer.png',
    link: 'https://skalesafe.com/',
    github: 'https://github.com/oslabs-beta/SkaleSafe',
    tags: ['Kubernetes', 'TypeScript', 'NoSQL', 'GraphQL', 'Redis', 'React'],
  },
  {
    id: 1,
    title: 'AppAmp',
    desc: 'An Application progress tracker that incentivizes good practices ',
    img: '/static/projects/my-notes.png',
    link: 'https://app-amp-daniel-doody.vercel.app/',
    github: 'https://github.com/Application-Amplifier/appAmp',
    tags: ['React', 'Typescript', 'PostgreSQL', 'Next.js'],
  },
  {
    id: 2,
    title: 'Danbnb',
    desc: 'A booking website with advanced search, date picker & mapbox functionality.',
    img: '/static/projects/danbnb.png',
    link: 'https://danbnb-git-main-daniel-doody.vercel.app/',
    github: 'https://github.com/daniel-doody/Danbnb',
    tags: ['React', 'NextJS', 'TailwindCSS'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
