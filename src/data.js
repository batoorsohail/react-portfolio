// importing Projects screenShots 
import rideEase from './Images/rideEase.JPG';
import cryptoWorld from './Images/crypto-world.JPG';
import bookStore from './Images/book-store.JPG';
import spaceTravelers from './Images/space-travlers.JPG';
import toDOList from './Images/todo-list.JPG';
import tvShow from './Images/tv-show.JPG';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiWebpack, SiRedux, SiRubyonrails, SiPostgresql } from "react-icons/si";
import { DiRuby } from "react-icons/di";

// Projects data
export const projects = [
  {
    id: 1,
    title: 'RideEase',
    description: 'RideEase is a car booking website that allows users to easily book a ride and travel to their desired destinations. Users can reserve a car from the available cars by providing the date and city. RideEase provides a seamless and reliable car booking experience.',
    image: rideEase,
    tags: ['Ruby on Rails', 'React', 'CSS'],
    liveUrl: 'https://rideease.onrender.com/',
    sourceUrl: 'https://github.com/batoorsohail/rideEase-front-end'
  },
  {
    id: 2,
    title: 'Crypto World',
    description: 'Crypto World is a website that uses an API to get the data and show the cryptocurrency. Users can search for a coin or go to the details page which displays more information about the currency.',
    image: cryptoWorld,
    tags: ['React', 'Redux', 'CSS'],
    liveUrl: 'https://crypto-world-microverse.netlify.app/',
    sourceUrl: 'https://github.com/batoorsohail/crypto-world'
  },
  {
    id: 3,
    title: 'Space Travelers Hub',
    description: 'Space Traveler is a React web application designed to provide users with an immersive experience of space exploration. This app allows users to explore a list of rockets dragons, and missions, enabling them to reserve or cancel their bookings, users can join or leave missions, and their reserved items',
    image: spaceTravelers,
    tags: ['React', 'Redux', 'CSS'],
    liveUrl: 'https://space-travelers-home.netlify.app/',
    sourceUrl: 'https://github.com/batoorsohail/react-redux-group-project'
  },
  {
    id: 4,
    title: 'Book Store',
    description: 'Book Store is a simple website where users can add a book with the authors name and category of the book. When a user adds a new book it will push the data inside an API and then it will load it for others as well.',
    image: bookStore,
    tags: ['HTML ', 'css', 'JavaScript'],
    liveUrl: 'https://book-store-microverse.netlify.app/',
    sourceUrl: 'https://github.com/batoorsohail/book-store'
  },
  {
    id: 5,
    title: 'To Do List',
    description: 'The React To-Do List is a web application designed to help users effectively manage their tasks and activities. Built with React and Vite, this application provides a seamless and intuitive user interface for adding, checking, and deleting tasks.',
    image: toDOList,
    tags: ['JavaScript', 'Webpack', 'CSS'],
    liveUrl: 'https://batoorsohail.github.io/to-do-list/dist/',
    sourceUrl: 'https://github.com/batoorsohail/to-do-list'
  },
  {
    id: 6,
    title: 'TV App',
    description: 'This is a Movie website that displays movies using API. You can like movies, and also you can add comments. We built this webpage using JavaScript, HTML, and CSS.',
    image: tvShow,
    tags: ['JavaScript', 'Webpack', 'CSS'],
    liveUrl: 'https://mertkantaroglu.github.io/JS-Capstone-Project/dist/index.html',
    sourceUrl: 'https://github.com/batoorsohail/JS-Capstone-Project'
  },
];
//skills 
// export const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'MySQL', 'Sass', 'PHP', 'TailwindCss', 'WebPack', 'Redux', 'Jest', 'Git', 'GitHub','Ruby','PostgreSQL'];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    icon: FaHtml5,
  },
  {
    id: 2,
    title: 'CSS',
    icon: FaCss3Alt,
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: IoLogoJavascript,
  },
  {
    id: 4,
    title: 'React',
    icon: FaReact,
  },
  {
    id: 5,
    title: 'TailwindCss',
    icon: SiTailwindcss,
  },
  {
    id: 6,
    title: 'WebPack',
    icon: SiWebpack,
  },
  {
    id: 7,
    title: 'Redux',
    icon: SiRedux,
  },
  {
    id: 8,
    title: 'Git',
    icon: FaGitAlt,
  },
  {
    id: 9,
    title: 'GitHub',
    icon: FaGithubSquare,
  },
  {
    id: 10,
    title: 'Ruby',
    icon: DiRuby,
  },
  {
    id: 11,
    title: 'RubyOnRails',
    icon: SiRubyonrails,
  },
  {
    id: 12,
    title: 'PostgreSQL',
    icon: SiPostgresql,
  },
];