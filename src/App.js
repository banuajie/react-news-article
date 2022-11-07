import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <div className="title-header">Website Article Banuajie</div>
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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
