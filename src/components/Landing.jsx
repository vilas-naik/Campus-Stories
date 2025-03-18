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
      <div className="relative h-screen flex items-center justify-between  overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1378723/pexels-photo-1378723.jpeg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-6 md:mx-12 lg:mx-20 text-left">
          <h1 className="hero-content text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            IGNITE YOUR <span className="text-purple-600 drop-shadow-xl">CAMPUS</span> LEGACY
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
      </div>

      {/* Features Section */}
      <section className="features-section flex flex-col bg-white mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Why Choose CAMPUS STORIES?
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex gap-80">
            <div className="feature-card relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-500 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <h3 className="relative text-2xl font-semibold text-purple-600 mb-4">Effortless Matches</h3>
              <p className="relative text-gray-600">Swipe and match with like-minded people in your area.</p>
            </div>

            <div className="h-[50vh] w-[50vh] overflow-hidden rounded-xl">
              <img
                src="https://i.pinimg.com/1200x/3a/a4/68/3aa4683d497db4bd1ea82b60a6e2845e.jpg"
                alt="Happy person with vibrant style"
                className="w-full object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="flex gap-80">
          <div className="h-[50vh] w-[50vh] overflow-hidden rounded-xl">

            <img
              src="https://i.pinimg.com/736x/38/6b/12/386b12487ce859fdbcba033a54e6b530.jpg"
              alt="Happy person with vibrant style"
              className="w-full object-cover rounded-lg shadow-2xl"
            />
            </div>
            <div className="feature-card relative p-8 bg-gray-200 rounded-2xl border ">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <h3 className="relative text-2xl font-semibold text-pink-600 mb-4">Authentic Connections</h3>
              <p className="relative text-gray-600">Designed to prioritize meaningful conversations.</p>
            </div>
          </div>


          <div className="flex gap-80">
            <div className="feature-card relative p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-yellow-500 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              <h3 className="relative text-2xl font-semibold text-yellow-600 mb-4">Privacy First</h3>
              <p className="relative text-gray-600">Your data is secure and your profile stays under your control.</p>
            </div>
            <div className="h-[50vh] w-[50vh] overflow-hidden rounded-xl">

            <img
              src="https://i.pinimg.com/1200x/4f/38/b6/4f38b6ef7173d8615f6615cdef049e90.jpg"
              alt="Happy person with vibrant style"
              className="object-cover w-full rounded-lg shadow-2xl"
            />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}