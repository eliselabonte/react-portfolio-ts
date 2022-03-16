import CryptidImage from '../../images/portfolio-items/cryptid.png';
import BookSearchImage from '../../images/portfolio-items/book-search.png';
import DadImage from '../../images/portfolio-items/dad.png';
import PasswordImage from '../../images/portfolio-items/password.png';
import WeatherImage from '../../images/portfolio-items/weather_app.png';
import WorkImage from '../../images/portfolio-items/work-tracker.png';

export const projects = [
    {
        id: 1,
        name: 'Crypt-ID',
        deployed: 'https://calm-tundra-54931.herokuapp.com/',
        gitHub: 'https://github.com/eliselabonte/cryptid2',
        findBy: 'cryptid',
        description: 'A forum site for those passionate about the unknown. Written in a MERN stack.',
        image: CryptidImage
    },
    {
        id: 2,
        name: 'Who\'s Your Daddy?',
        deployed: 'https://eliselabonte.github.io/whos-your-daddy/',
        gitHub: 'https://github.com/eliselabonte/whos-your-daddy',
        findBy: 'dad',
        description: 'A front-end only joke generator for people who hate having friends',
        image: DadImage
    },
    {
        id: 3,
        name: 'Productivity Tracker',
        deployed: 'https://eliselabonte.github.io/work-tracker/',
        gitHub: 'https://github.com/eliselabonte/work-tracker',
        findBy: 'work-tracker',
        description: 'Log tasks to complete and store data across uses',
        image: WorkImage
    },
    {
        id: 4,
        name: 'Google Books Search',
        deployed: 'https://enigmatic-inlet-56405.herokuapp.com/',
        gitHub: 'https://github.com/eliselabonte/book-search-engine',
        findBy: 'book-search',
        description:'A search engine that uses the Google Books API and Apollo Server',
        image: BookSearchImage
    }
    // {
    //     id: 5,
    //     name: 'Password Generator',
    //     deployed: 'https://eliselabonte.github.io/createAPassword/',
    //     gitHub: 'https://github.com/eliselabonte/createAPassword',
    //     findBy: 'password',
    //     description: ,
    //     image: PasswordImage
    // },
    // {
    //     id: 6,
    //     name: 'Weather Application',
    //     deployed: 'https://eliselabonte.github.io/weather-app/',
    //     gitHub: 'https://github.com/eliselabonte/weather-app',
    //     findBy: 'weather-app',
    //     description:,
    //     image: WeatherImage
    // },
]