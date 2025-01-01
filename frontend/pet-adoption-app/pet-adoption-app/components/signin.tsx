import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token); // Store token
      router.push("/"); // Redirect to homepage
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
