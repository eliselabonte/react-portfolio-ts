import "./header.scss";

export default function Header () {
    return  (
        <header className="Header" id='header'>
            <h2>Front-End Web Developer</h2>
            <div className={'hamburger '}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        </header>
)}

// includes navigation and title