import './resume.scss';

export default function Resume()    {
    return(
        <div className='resume' id='resume'>
            <span>
                <p>please download my resume</p>
                <a href='resume.pdf' download='LaBonte-Resume.pdf' className='download'>HERE</a>
            </span>
            <div className='graph'>
                <h4>proficiencies</h4>
                <span className='bar css scale-in-hor-left'>CSS</span>
                <span className='bar js scale-in-hor-left'>Javascript</span>
                <span className='bar react scale-in-hor-left'>React</span>
            </div>
        </div>
    )
}