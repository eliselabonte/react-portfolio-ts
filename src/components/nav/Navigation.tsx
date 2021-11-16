import './navigation.scss';

export default function Navigation()   {
    return  (
        <div className='Nav'>
            <nav>
                <ul className='nav-list'>
                    {/* TODO: list functionality */}
                    <li><a href='#about-me'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#resume'>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}