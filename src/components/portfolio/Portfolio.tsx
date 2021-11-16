// import { VscGithub } from "react-icons/fa";
import './portfolio.scss';

export default function Portfolio()   {
    const projects =    [
        {
            id: 1,
            name: 'Code Quiz',
            deployed: 'https://eliselabonte.github.io/timed-coding-quiz/',
            gitHub: '',
            findBy: 'code-quiz'
        },
        {
            id: 2,
            name: 'Art Portfolio',
            deployed: 'https://codepen.io/elise-labonte/full/bGgrKjB',
            gitHub: '',
            findBy: 'art'
        },
        {
            id: 3,
            name: 'Crypt-ID',
            deployed: 'https://polar-earth-58321.herokuapp.com/',
            gitHub: '',
            findBy: 'cryptid'
        },
        {
            id: 4,
            name: 'Who\'s Your Daddy?',
            deployed: 'https://eliselabonte.github.io/whos-your-daddy/',
            gitHub: '',
            findBy: 'dad'
        },
        {
            id: 5,
            name: 'Password Generator',
            deployed: 'https://eliselabonte.github.io/createAPassword/',
            gitHub: '',
            findBy: 'password'
        },
        {
            id: 6,
            name: 'Weather Application',
            deployed: 'https://eliselabonte.github.io/weather-app/',
            gitHub: '',
            findBy: 'weather-app'
        },
        {
            id: 7,
            name: 'Productivity Tracker',
            deployed: 'https://eliselabonte.github.io/work-tracker/',
            gitHub: '',
            findBy: 'work-tracker'
        }
    ]

    const item1 = projects[0];
    const item2 = projects[1];
    const item3 = projects[2];

    return (
        <div className='projectContainer'>
            <div className={`${item1.findBy} projectItem`}>
                <h4>{item1.name}</h4>
                <div className='links'>
                    <a href={item1.gitHub}>🙀</a>
                    <a href={item1.deployed}>🚀</a>
                </div>
            </div>
            <div className={`${item2.findBy} projectItem`}>
                <h4>{item2.name}</h4>
                <div className='links'>
                    <a href={item2.gitHub}>🙀</a>
                    <a href={item2.deployed}>🚀</a>
                </div>
            </div>
            <div className={`${item3.findBy} projectItem`}>
                <h4>{item3.name}</h4>
                <div className='links'>
                    <a href={item3.gitHub}>🙀</a>
                    <a href={item3.deployed}>🚀</a>
                </div>
            </div>
            
        </div>
    )

    
}
