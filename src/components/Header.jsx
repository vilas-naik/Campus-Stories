// Header.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate=useNavigate();

  useEffect(() => {
    // Simple fade-in animation for the header
    const header = document.querySelector(".header");
    if (header) {
      header.style.opacity = "0";
      setTimeout(() => {
        header.style.transition = "opacity 0.6s ease-in";
        header.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <header className="header fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-purple-600 cursor-pointer" onClick={()=>{
            navigate("/")
        }}>CAMPUS STORIES</div>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-purple-600" onClick={()=>{
            navigate("/features")
        }}>Features</a>
          <a href="#" className="hover:text-purple-600">The App</a>
          <a href="#" className="hover:text-purple-600">Events</a>
          <a href="#" className="hover:text-purple-600" onClick={()=>{
            navigate("/about")
        }}>About Us</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700" onClick={()=>{
            navigate("/auth")
        }}>Sign In</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;