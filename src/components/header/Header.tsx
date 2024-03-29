import "./header.scss";

export default function Header (props: any) {
    const { navOpen, setNavOpen } = props

    return  (
        <header className="Header" id='header'>
            <h2>Front-End Web Development</h2>
            <div onClick={() => setNavOpen(!navOpen)} className={`hamburger ${navOpen ? 'active' : ''}`}>
                {/* hamburger menu below */}
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        </header>
)}
