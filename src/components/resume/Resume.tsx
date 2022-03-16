import './resume.scss';
import { useInView } from 'react-intersection-observer';

export default function Resume(props:any)    {

        const { ref, inView, entry } = useInView({
          /* Optional options */
            threshold: 0,
        });

    return(
        <div className='resume' id='resume' ref={ref}>

            <span className='line-break'></span>
            <span>
                <p>please download my resume</p>
                <a href='https://docs.google.com/document/d/1Oa68MMDxUopVhyH8-1eIAFD4eu-scKV7YkHLRXEt11g/edit?usp=sharing' className='download' target="_blank" rel="noreferrer">HERE</a>
            </span>

            <div className={inView ? 'graph visible' : 'graph'}>
                <h3>proficiencies</h3>
                {/* use intersection-observer to animate on scroll */}
                <div className='proficiency-bar'>
                    <span className='bar css scale-in-hor-left'>CSS</span>
                    <p className='proficiency'>💅🏼</p>
                </div>
                <div className='proficiency-bar'>
                    <span className='bar js scale-in-hor-left'>Javascript</span>
                    <p className='proficiency'>✌🏼</p>
                </div>
                <div className='proficiency-bar'>
                    <span className='bar react scale-in-hor-left'>React</span>
                    <p className='proficiency'>💪🏼</p>
                </div>
            </div>

            <span className='line-break'></span>
        </div>
    )
}