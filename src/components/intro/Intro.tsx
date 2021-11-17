import './intro.scss';
import { GrPrevious, GrNext } from "react-icons/gr";

function Intro () {
    return  (
        <div className='intro-card'>
            <section>
                <h1 className="intro">ELISE MARIE LABONTE</h1>
                <h1 className='tagline'><GrPrevious className='carat'/>junior software engineer<GrNext className='carat'/></h1>
            </section>
            <span className='mountain-background'></span>
        </div>
        
            
)}

export default Intro;

// includes name and mountain graphic