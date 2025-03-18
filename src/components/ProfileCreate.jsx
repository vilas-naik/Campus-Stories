import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tesseract from "tesseract.js";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCreation() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profilePics, setProfilePics] = useState([]);
  const [idCard, setIdCard] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [matchedPattern, setMatchedPattern] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    // Smooth fade-in animation for the form
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
      setEmail(data?.session?.user?.email || "");
    };
    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setEmail(session?.user?.email || "");
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleIdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIdCard(URL.createObjectURL(file));
      Tesseract.recognize(file, "eng").then(({ data: { text } }) => {
        setExtractedText(text);
        const regex = /1TJ\w{7}/g;
        const match = text.match(regex);
        if (match) {
          setMatchedPattern(match[0]);
        } else {
          alert("No valid ID detected.");
        }
      });
    }
  };

  const handleImageUpload = async (e) => {
    if (!matchedPattern) {
      alert("Upload your ID first!");
      return;
    }

    const files = Array.from(e.target.files);
    const uploadedUrls = await Promise.all(
      files.map(async (file, index) => {
        const fileName = `${matchedPattern}_image_${index}`;
        const { data, error } = await supabase.storage.from("profile").upload(fileName, file);

        if (error) {
          console.error("Upload error:", error);
          return null;
        }

        return `https://hwbpbherwdrosuxluope.supabase.co/storage/v1/object/public/profile/${fileName}`;
      })
    );

    setProfilePics((prev) => [...prev, ...uploadedUrls.filter((url) => url !== null)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!matchedPattern) {
      alert("USN is required!");
      return;
    }

    const { data: existingProfile } = await supabase.from("profile").select("usn").eq("usn", matchedPattern).single();

    if (existingProfile) {
      alert("Profile already exists.");
      return;
    }

    const { error } = await supabase.from("profile").insert([
      { name, bio, preferences, sem, branch, age, email, image_url: profilePics, usn: matchedPattern }
    ]);

    if (error) {
      console.error("Error saving profile:", error);
    } else {
      alert("Profile created!");
      navigate("/profile");
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen font-[Poppins, sans-serif] bg-yellow-400 text-gray-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x800')] bg-cover bg-center opacity-10"></div>
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-start min-h-[calc(100vh-200px)] p-6 pt-32">
        <section className="w-full max-w-4xl">
          <div ref={formRef} className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
            <h1 className="text-4xl font-extrabold text-purple-600 text-center mb-8">Build Your CAMPUS STORIES Profile</h1>

            {/* Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Profile Pictures */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Pictures</h3>
                <input
                  type="file"
                  id="profile"
                  multiple
                  onChange={handleImageUpload}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-white mb-4"
                />
                <div className="flex flex-wrap gap-4">
                  {profilePics.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Profile ${idx + 1}`}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>

              {/* ID Card */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">ID Verification</h3>
                <input
                  type="file"
                  id="idCard"
                  onChange={handleIdUpload}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-white mb-4"
                />
                {idCard && (
                  <img
                    src={idCard}
                    alt="ID Card"
                    className="w-full mt-4 rounded-xl shadow-md"
                  />
                )}
                <p className="mt-2 text-gray-700">USN: {!matchedPattern ? "Waiting..." : matchedPattern}</p>
              </div>
            </div>

            {/* Form Section */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-md font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-md font-semibold text-gray-800 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="sem" className="block text-md font-semibold text-gray-800 mb-2">
                  Semester
                </label>
                <input
                  type="text"
                  id="sem"
                  placeholder="e.g., 3"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="branch" className="block text-md font-semibold text-gray-800 mb-2">
                  Branch
                </label>
                <input
                  type="text"
                  id="branch"
                  placeholder="e.g., Computer Science"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="bio" className="block text-md font-semibold text-gray-800 mb-2">
                  Short Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-3 border rounded-xl focus:ring-purple-400 focus:outline-none bg-gray-50 h-32 resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-md font-semibold text-gray-700 mb-4">Email: {email}</p>
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}