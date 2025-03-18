import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Tesseract from "tesseract.js";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

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
    gsap.from(formRef.current, { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" });
    gsap.to(formRef.current, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div ref={formRef} className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-pink-600 text-center">Create Your Profile</h2>
<label for='profile'>Upload Images</label>
        <input type="file" multiple onChange={handleImageUpload} className="w-full p-2 border rounded-lg mt-4" name="profile"/>
        <div className="flex flex-wrap gap-3 mt-2">
          {profilePics.map((src, idx) => (
            <img key={idx} src={src} alt="Profile" className="w-16 h-16 object-cover rounded-lg shadow-md" />
          ))}
        </div>
        <label for='idCard'>Upload ID Card</label>

        <input type="file" onChange={handleIdUpload} className="w-full p-2 border rounded-lg mt-4" name="idCard"/>
        {idCard && <img src={idCard} alt="ID Card" className="w-full mt-2 rounded-lg shadow-md" />}
<p>USN:{!matchedPattern?"Waiting":matchedPattern}</p>
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Short Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full p-3 border rounded-lg"></textarea>
          <input type="text" placeholder="Semester" value={sem} onChange={(e) => setSem(e.target.value)} className="w-full p-3 border rounded-lg" />
          <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full p-3 border rounded-lg" />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 border rounded-lg" />
          <p className="text-md font-semibold text-gray-800">Email: {email}</p>
          <button type="submit" className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg">Save Profile</button>
        </form>
      </div>
    </div>
  );
}
