import { useEffect, useState } from "react";
import { gsap } from "gsap";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".home-container", { opacity: 0, y: 30, duration: 1, ease: "power2.out" });
    gsap.to(".home-container", { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.from("profile").select("*").single();
      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setUserProfile(data);
      }
    };
    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    navigate("/profile/edit");
  };

  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-pink-600">Welcome, {userProfile?.name || "User"}!</h1>
        <p className="text-gray-600 mt-2">Your profile is set up. Let's start matching!</p>

        {/* Profile Picture */}
        {userProfile?.image_url?.length > 0 && (
          <img
            src={userProfile.image_url[0]}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full mx-auto mt-4 border-4 border-pink-500 shadow-lg"
          />
        )}

        {/* Bio */}
        <p className="mt-4 text-gray-700 italic">{userProfile?.bio || "No bio added yet."}</p>

        {/* Preferences */}
        {Array.isArray(userProfile?.preferences) && userProfile.preferences.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Interests</h3>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {userProfile.preferences.map((pref, index) => (
                <span key={index} className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-sm">
                  {pref}
                </span>
              ))}
            </div>
          </div>
        ) : ""}


        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleEditProfile}
            className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            Edit Profile
          </button>
          <button
            onClick={() => navigate("/explore")}
            className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
          >
            Start Matching 💕
          </button>
          <button
            onClick={() => navigate("/profile/delete")}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Delete Profile ❌
          </button>

        </div>
      </div>
    </div>
  );
}
