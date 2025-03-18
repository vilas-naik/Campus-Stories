import { useState, useEffect } from "react";
import { gsap } from "gsap";
import supabase from "../../utils/supabase";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  const nextProfile = () => {
    gsap.to(".profile-card", { x: 100, opacity: 0, duration: 0.5, onComplete: () => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
      setCurrentImageIndex(0);
      gsap.fromTo(".profile-card", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
    }});
  };

  const nextImage = () => {
    if (profiles[currentIndex]?.image_url?.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % profiles[currentIndex].image_url.length);
    }
  };

  const prevImage = () => {
    if (profiles[currentIndex]?.image_url?.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + profiles[currentIndex].image_url.length) % profiles[currentIndex].image_url.length);
    }
  };

  const currentProfile = profiles[currentIndex];
  const imageSrc = Array.isArray(currentProfile?.image_url) && currentProfile.image_url.length > 0
    ? currentProfile.image_url[currentImageIndex]
    : "https://via.placeholder.com/150";

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      {profiles.length > 0 && (
        <div className="profile-card relative bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <div className="relative w-full h-48 flex items-center justify-center">
            <button onClick={prevImage} className="absolute left-2 text-gray-600 bg-white p-1 rounded-full shadow-md">
              <FaArrowLeft />
            </button>
            <img
              src={imageSrc}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button onClick={nextImage} className="absolute right-2 text-gray-600 bg-white p-1 rounded-full shadow-md">
              <FaArrowRight />
            </button>
          </div>
          <h2 className="text-xl font-bold mt-4">{currentProfile?.name}</h2>
          <p className="text-gray-600">{currentProfile?.bio}</p>
          <button onClick={nextProfile} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg">Next</button>
        </div>
      )}
    </div>
  );
}
