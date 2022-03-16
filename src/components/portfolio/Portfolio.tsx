import {FaGithub} from 'react-icons/fa';
import {VscPlay} from 'react-icons/vsc';
import {Link} from 'react-router-dom'
import Carousel from 'framer-motion-carousel';
import { projects } from './data';
import './portfolio.scss'


const Portfolio = () => {

    return(
        <div className='carousel'>
            <Carousel
            autoPlay={false} 
            interval={4} 
            loop={true}>
                {projects.map((item, i) => (
                    <div className='projectItem'>
                        <div className='projectInfo'>
                            <h4 className='projectName'>{item.name}</h4>
                            <span className='underline'></span>
                            <p className='projectDescription'>{item.description}</p>
                            <div className='links'>
                                <a href={item.gitHub}><FaGithub className='icon' /></a>
                                <a href={item.deployed}><VscPlay className='icon' /></a>
                            </div>
                        </div>
                        <Link to={item.deployed}>
                            <img
                                draggable={false}
                                className={`project ${item.findBy}`}
                                key={i}
                                alt={item.name}
                                src={item.image}
                            />
                        </Link>
                    </div>
                ) )}
            </Carousel>
        </div>
    )
}

export default Portfolio;