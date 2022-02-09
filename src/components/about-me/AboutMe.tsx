import './about-me.scss';
import HeadshotImage from '../../images/headshot.png';

export default function AboutMe () {
    return  (
        <div className='about-me' id='about-me'>
            <h3>About Me</h3>
            <img src={ HeadshotImage } className='headshot' alt='Elise smiling'/>
            <h4>Artist, mariner, hiker, farmer, coder. Life is sometimes strange.</h4>
            <p className='about-body'>I left my home of Boston, MA after college to pursue a career on the waters of South East Alaska. There were bears. There were boats. Most importantly, there were Alaskans.
            <br></br>
            <br></br>
            After taking up coding as a hobby in my time off from shipping, I made moves to switch directions completely.
            <br></br>
            <br></br>
            One cross-country road trip, a summer working with farm animals, and many months of hard work (with more to come) later, I am happy to say that coding chose me.
            <br></br>
            <br></br>
            I am proud to be able to present a small but growing body of work from my studies.</p>
        </div>
)}
