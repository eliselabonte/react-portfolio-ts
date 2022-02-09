import './portfolio.scss';
import {FaGithub} from 'react-icons/fa';
import {VscPlay} from 'react-icons/vsc';
import { projects } from './data';

export default function Portfolio()   {
    
    return (
            <div className='projectContainer' id='projects'>
            <h3 className="work-title">My Work</h3>
                { projects.map((item, i) => {
                    return (
                        <div key={i} className="projectItem">
                            <a href={item.deployed} rel='noreferrer' target="_blank"><img alt={item.findBy}src={item.image}/></a>
                            <div className='text'>
                                <h4>{item.name}</h4>
                                <div className='links'>
                                    <a href={item.gitHub}><FaGithub className='icon' /></a>
                                    <a href={item.deployed}><VscPlay className='icon' /></a>
                                </div>
                            </div>
                        </div>
                    )}
                )}
            </div>

    )
}