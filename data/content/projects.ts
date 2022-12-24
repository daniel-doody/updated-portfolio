import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
  {
    id: 0,
    title: 'Danbnb',
    desc: 'A booking website with advanced search, date picker & mapbox functionality.',
    img: '/static/projects/danbnb.png',
    link: 'https://danbnb-git-main-daniel-doody.vercel.app/',
    github: 'https://github.com/daniel-doody/Danbnb',
    tags: ['React', 'NextJS', 'TailwindCSS'],
  },
  {
    id: 1,
    title: 'My Notes',
    desc: 'An note-taking app with categories/tags, markdown support, filtering, etc.',
    img: '/static/projects/my-notes.png',
    link: 'https://dans-notes-app.netlify.app',
    github: 'https://github.com/daniel-doody/my-notes-app',
    tags: ['React', 'Typescript', 'TailwindCSS', 'Bootstrap'],
  },
  {
    id: 2,
    title: 'The Learning Den',
    desc: 'A video streaming platform using YouTube API, displaying my favorite coding channels.',
    img: '/static/projects/video-streaming.png',
    link: 'https://dans-video-streaming.netlify.app/',
    github: 'https://github.com/daniel-doody/video-streaming-platform',
    tags: ['React', 'YoutubeAPI', 'Sass', 'MUI'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
