import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";

export default function DeleteProfilePage() {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { error } = await supabase.from("profile").delete().eq("id", 1); // Replace with actual user ID
    if (error) {
      console.error("Error deleting profile:", error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-600">Delete Profile</h1>
        <p className="mt-4 text-gray-700">Are you sure you want to delete your profile? This action cannot be undone.</p>
        <button
          onClick={handleDelete}
          className="w-full mt-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Yes, Delete My Profile
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full mt-3 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
