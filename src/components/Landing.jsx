import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

export default function AtomicLanding() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Hero animation
  //   gsap.fromTo(".hero-content", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1.2,
  //     ease: "power3.out",
  //   });

  //   // Feature animation
  //   gsap.fromTo(".feature-card", {
  //     opacity: 0,
  //     y: 30,
  //     duration: 0.8,
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: ".features-section",
  //       start: "top 80%",
  //     },
  //   });
  // }, []);

  return (
    <div className="min-h-screen font-[Poppins, sans-serif] bg-gray-50 text-gray-900 overflow-hidden">
      <Header />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-between bg-yellow-400 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-6 md:mx-12 lg:mx-20 text-left">
        <h1 className="hero-content text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
  IGNITE YOUR <span className="text-purple-600">CAMPUS</span> LEGACY
</h1>
          <p className="hero-content text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            You deserve meaningful connections, so we’ve crafted a seamless way to date more and stress less.
          </p>
          <button
            onClick={() => navigate('/auth')}
            className="hero-content relative inline-flex items-center px-8 py-3 text-lg font-semibold bg-gray-900 text-yellow-400 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 hover:opacity-20 rounded-full transition-opacity"></span>
          </button>
        </div>
        <div className="relative z-10 hidden md:block w-1/2">
          <img
            src="https://i.pinimg.com/736x/c5/e4/69/c5e4690829e02ddecae65fb4b1cce965.jpg"
            alt="Happy person with vibrant style"
            className="object-cover h-[80vh] rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section py-24 px-6 md:px-12 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Why Choose CAMPUS STORIES?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="feature-card relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-500 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            <h3 className="relative text-2xl font-semibold text-purple-600 mb-4">Effortless Matches</h3>
            <p className="relative text-gray-600">Swipe and match with like-minded people in your area.</p>
          </div>
          <div className="feature-card relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-pink-500 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            <h3 className="relative text-2xl font-semibold text-pink-600 mb-4">Authentic Connections</h3>
            <p className="relative text-gray-600">Designed to prioritize meaningful conversations.</p>
          </div>
          <div className="feature-card relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-yellow-500 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            <h3 className="relative text-2xl font-semibold text-yellow-600 mb-4">Privacy First</h3>
            <p className="relative text-gray-600">Your data is secure and your profile stays under your control.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}