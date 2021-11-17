import './portfolio.scss';
import {FaGithub} from 'react-icons/fa';
import  {AiFillRocket} from 'react-icons/fa'
import { projects } from './data';

export default function Portfolio()   {
    
    return (
            <div className='projectContainer' id='projects'>
            <h3>My Work</h3>
                { projects.map((item, i) => {
                    return (
                        <div key={i} className={`${item.findBy} projectItem`}>
                            <h4>{item.name}</h4>
                            <div className='links'>
                                <a href={item.gitHub}><FaGithub /></a>
                                <a href={item.deployed}><AiFillRocket></a>
                            </div>
                                <img src={item.image}/>
                        </div>
                    )}
                )}
            </div>

    )
}