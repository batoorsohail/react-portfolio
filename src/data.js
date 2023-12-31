// importing Projects screenShots 
import rideEase from './assets/rideEase.jpg';
import cryptoWorld from './assets/crypto-world.jpg';
import bookStore from './assets/book-store.jpg';
import spaceTravelers from './assets/space-travlers.jpg';
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
];
//skills 
export const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'MySQL', 'Sass', 'PHP', 'TailwindCss', 'WebPack', 'Redux', 'Jest', 'Git', 'GitHub','Ruby','PostgreSQL'];
