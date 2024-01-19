import portfolio_img from '../assets/portfolio.png';
import airport_haven from '../assets/airport-haven.png';
import buyin_img from '../assets/buyin.png';
import flikpulse_img from '../assets/flickpulse.png';
import spotify_clone_img from '../assets/spotify-clone.png';


export const all_projects = [
    {
        id: 0,
        name: 'My Portfolio',
        stack: ['ReactJs', 'Tailwind'],
        image: portfolio_img,
        href1: '#',
        href2: '#'
    },
    {
        id: 1,
        name: 'Airport Haven',
        stack: ['ReactJs', 'Tailwind', 'Amadeuse API,'],
        image: airport_haven,
        href1: 'https://airport-haven.netlify.app/',
        href2: 'https://github.com/terri-miles/airport-haven'
    },
    {
        id: 2,
        name: 'Buyin Ecommerce',
        stack: ['ReactJs', 'Tailwind'],
        image: buyin_img,
        href1: 'https://buyintoday.netlify.app/',
        href2: 'https://github.com/terri-miles/Buyin-Ecommerce'
    },
    {
        id: 3,
        name: 'FlickPulse Website',
        stack: ['ReactJs', 'Tailwind', 'TMDB API', 'Firebase'],
        image: flikpulse_img,
        href1: 'https://my-flickpulse.netlify.app/',
        href2: 'https://github.com/terri-miles/Vite-FlickPulse'
    },
    {
        id: 4,
        name: 'Spotify Account Clone',
        stack: ['ReactJs', 'Tailwind', 'Spotify Web API'],
        image: spotify_clone_img,
        href1: 'https://spotify-clone-me.netlify.app/',
        href2: 'https://github.com/terri-miles/my-spotify-clone'
    },
]

