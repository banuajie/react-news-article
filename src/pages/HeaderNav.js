import { Link } from "react-router-dom";

function HeaderNav() {
    return (
        <>
            <header className="header">
                <div className="header-title">Website Article Banuajie</div>
                <nav className="nav">
                    <Link to="/" className="nav-item">
                        Home
                    </Link>
                    <Link to="/profile" className="nav-item">
                        Profile
                    </Link>
                    <Link to="/blog" className="nav-item">
                        Blog
                    </Link>
                    <Link to="/contact" className="nav-item">
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default HeaderNav;
