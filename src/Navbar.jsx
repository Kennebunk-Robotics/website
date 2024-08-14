import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img className='logo' src='/images/RoboRamCutout.png' alt='KHS VEX Robotics Logo' />
            <h1>KHS VEX Robotics</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/34362A">34362A</a>
                <a href="/34362B">34362B</a>
            </div>
        </nav>
    );
}

export default Navbar;