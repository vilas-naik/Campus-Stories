import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";

export default function EditProfilePage() {
  const [profile, setProfile] = useState({ name: "", bio: "", preferences: [], image_url: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.from("profile").select("name,bio").single();
      if (error) {
        console.error("Error fetching profile:", error);
      } else {
        setProfile(data);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const { error } = await supabase.from("profile").update(profile).eq("id", profile.id);
    if (error) {
      console.error("Error updating profile:", error);
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-pink-600 text-center">Edit Profile</h1>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mt-4 p-3 border rounded-lg"
        />
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="Your Bio"
          className="w-full mt-4 p-3 border rounded-lg"
        />
        <button
          onClick={handleSave}
          className="w-full mt-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
