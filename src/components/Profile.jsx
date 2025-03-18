import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import supabase from "../../utils/supabase";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SwipeCards() {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase.from("profile").select("*");
      if (!error) setProfiles(data);
    };
    fetchProfiles();
  }, []);

  // useEffect(() => {
  //   // Animation for the profile card
  //   const tl = gsap.timeline();
  //   tl.from(".profile-card", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: "power3.out",
  //   }).from(".profile-card .card-actions button", {
  //     opacity: 0,
  //     y: 20,
  //     duration: 0.5,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //   }, "-=0.5");

  //   // Animation for the quote section
  //   gsap.from(".quote-section", {
  //     opacity: 0,
  //     y: 30,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".quote-section",
  //       start: "top 80%",
  //     },
  //   });
  // }, [currentIndex]);

  const nextProfile = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    if (profiles[currentIndex]?.image_url?.length > 0) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + profiles[currentIndex].image_url.length) % profiles[currentIndex].image_url.length
      );
    }
  };

  const nextImage = () => {
    if (profiles[currentIndex]?.image_url?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % profiles[currentIndex].image_url.length);
    }
  };

  const likeProfile = () => {
    console.log("Liked profile:", profiles[currentIndex]?.name);
    nextProfile();
  };

  const currentProfile = profiles[currentIndex];
  const imageSrc = Array.isArray(currentProfile?.image_url) && currentProfile.image_url.length > 0
    ? currentProfile.image_url[currentImageIndex]
    : "https://via.placeholder.com/150";

  return (
    <div className="min-h-screen font-[Poppins, sans-serif] bg-yellow-400 text-gray-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-10"></div>
      <Header />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-300px)] p-6 pt-32">
        {/* Quote Section */}
        <div className="quote-section mb-12 text-center max-w-2xl">
          <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 italic">
            "Every swipe is a step toward your next campus adventure!" - Campus Stories Team
          </blockquote>
          <p className="mt-2 text-gray-600">
            Discover the stories that define your college experience and connect with like-minded souls.
          </p>
        </div>

        {profiles.length > 0 && (
          <div className="profile-card bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md text-center border border-gray-200">
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
              <button
                onClick={prevImage}
                className="absolute left-2 text-purple-600 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-all duration-300"
              >
                <FaArrowLeft />
              </button>
              <img
                src={imageSrc}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-xl shadow-lg"
              />
              <button
                onClick={nextImage}
                className="absolute right-2 text-purple-600 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-all duration-300"
              >
                <FaArrowRight />
              </button>
            </div>
            <h2 className="text-2xl font-bold mt-6 text-purple-600">{currentProfile?.name}</h2>
            <p className="text-gray-700 mt-2 text-base italic">{currentProfile?.bio || "No bio available."}</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {Array.isArray(currentProfile?.preferences) &&
                currentProfile.preferences.length > 0 &&
                currentProfile.preferences.map((pref, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
            </div>
            <div className="card-actions mt-6 flex justify-center gap-4">
              <button
                onClick={likeProfile}
                className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <FaHeart /> Like
              </button>
              <button
                onClick={nextProfile}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Additional Details Section */}
        <div className="quote-section mt-12 text-center max-w-2xl">
          <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 italic">
            "Your story starts with a connection—swipe to find it!"
          </blockquote>
          <p className="mt-2 text-gray-600">
            With over 10,000 campus connections made, CAMPUS STORIES is your gateway to unforgettable moments.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}