"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const login = async () => {
    await api.post("/auth/login", { email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">تسجيل الدخول</h2>

        <input
          className="w-full p-3 mb-4 rounded bg-slate-800 outline-none"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
        >
          دخول
        </button>
      </div>
    </div>
  );
}
