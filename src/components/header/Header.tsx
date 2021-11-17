import "./header.scss";


// {navOpen}
// interface Props {
//     navOpen: Boolean;
//     setNavOpen: () => {}
// }

export default function Header (props: any) {
    const { navOpen, setNavOpen } = props

    return  (
        <header className="Header" id='header'>
            <h2>Front-End Web Development</h2>
            <div onClick={() => setNavOpen(!navOpen)} className={`hamburger ${navOpen ? 'active' : ''}`}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        </header>
)}

// includes navigation and title