import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProfileCreation() {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [preferences, setPreferences] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      });
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div ref={formRef} className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-pink-600 text-center">Create Your Profile</h2>
        <div className="flex flex-col items-center mt-4">
          <label className="cursor-pointer relative">
            <input type="file" className="hidden" onChange={handleImageUpload} />
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-md">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">Upload</span>
              )}
            </div>
          </label>
        </div>
        <form className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          />
          <textarea
            placeholder="Short Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
          ></textarea>
          <div>
            <label className="block text-gray-600 mb-2">Select Preferences</label>
            <select
              multiple
              value={preferences}
              onChange={(e) =>
                setPreferences(Array.from(e.target.selectedOptions, (option) => option.value))
              }
              className="w-full p-3 border rounded-lg focus:ring-pink-400 focus:outline-none"
            >
              <option value="movies">Movies</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="travel">Travel</option>
              <option value="books">Books</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
