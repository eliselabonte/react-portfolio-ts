import CryptidImage from '../../images/portfolio-items/cryptid.png';
import CodeImage from '../../images/portfolio-items/code-quiz.png';
import ArtImage from '../../images/portfolio-items/art.png';
import DadImage from '../../images/portfolio-items/dad.png';
import PasswordImage from '../../images/portfolio-items/password.png';
import WeatherImage from '../../images/portfolio-items/weather_app.png';
import WorkImage from '../../images/portfolio-items/work-tracker.png';

export const projects = [
    {
        id: 1,
        name: 'Code Quiz',
        deployed: 'https://eliselabonte.github.io/timed-coding-quiz/',
        gitHub: 'https://github.com/eliselabonte/timed-coding-quiz',
        findBy: 'code-quiz',
        image: CodeImage
    },
    // {
    //     id: 2,
    //     name: 'Art Portfolio',
    //     deployed: 'https://codepen.io/elise-labonte/full/bGgrKjB',
    //     gitHub: '',
    //     findBy: 'art',
    //     image: ArtImage
    // },
    {
        id: 3,
        name: 'Crypt-ID',
        deployed: 'https://polar-earth-58321.herokuapp.com/',
        gitHub: 'https://github.com/rdupont1623/Crypt-ID',
        findBy: 'cryptid',
        image: CryptidImage
    },
    {
        id: 4,
        name: 'Who\'s Your Daddy?',
        deployed: 'https://eliselabonte.github.io/whos-your-daddy/',
        gitHub: 'https://github.com/eliselabonte/whos-your-daddy',
        findBy: 'dad',
        image: DadImage
    },
    {
        id: 5,
        name: 'Password Generator',
        deployed: 'https://eliselabonte.github.io/createAPassword/',
        gitHub: 'https://github.com/eliselabonte/createAPassword',
        findBy: 'password',
        image: PasswordImage
    },
    {
        id: 6,
        name: 'Weather Application',
        deployed: 'https://eliselabonte.github.io/weather-app/',
        gitHub: 'https://github.com/eliselabonte/weather-app',
        findBy: 'weather-app',
        image: WeatherImage
    },
    {
        id: 7,
        name: 'Productivity Tracker',
        deployed: 'https://eliselabonte.github.io/work-tracker/',
        gitHub: 'https://github.com/eliselabonte/work-tracker',
        findBy: 'work-tracker',
        image: WorkImage
    }
]