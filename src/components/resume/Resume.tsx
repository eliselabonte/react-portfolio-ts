import './resume.scss';

export default function Resume()    {
    return(
        <div className='resume' id='resume'>

            <span className='line-break'></span>
            <span>
                <p>please download my resume</p>
                <a href='/LaBonte-Resume.pdf' download className='download'>HERE</a>
            </span>
            <div className='graph'>
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