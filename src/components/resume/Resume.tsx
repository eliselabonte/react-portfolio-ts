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
                <a href='https://docs.google.com/document/d/1Oa68MMDxUopVhyH8-1eIAFD4eu-scKV7YkHLRXEt11g/edit?usp=sharing' className='download' target="_blank">HERE</a>
            </span>

            <div className={inView ? 'graph visible' : 'graph'}>
                <h3>proficiencies</h3>
                {/* use intersection-observer to animate on scroll */}
                <span className='bar css scale-in-hor-left'>CSS <p className='proficiency'>comfortable</p></span>
                <span className='bar js scale-in-hor-left'>Javascript <p className='proficiency'>proficient</p></span>
                <span className='bar react scale-in-hor-left'>React <p className='proficiency'>learning</p></span>
            </div>

            <span className='line-break'></span>
        </div>
    )
}