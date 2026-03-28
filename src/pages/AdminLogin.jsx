import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  clearAdminToken,
  getAdminToken,
  loginAdmin,
  setAdminToken,
} from "../services/admin";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = getAdminToken();

  useEffect(() => {
    setError("");
  }, [username, password]);

  if (token) {
    return <Navigate to="/admin/overview" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const adminToken = await loginAdmin({ username, password });
      setAdminToken(adminToken);
      navigate("/admin/overview", { replace: true });
    } catch (err) {
      clearAdminToken();
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full gap-8">
          
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border w-2/5 border-slate-200 bg-white p-6 text-slate-900 shadow-2xl shadow-black/10 sm:p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Admin Login</h2>
              <p className="mt-1 text-sm text-slate-600">
                Use your username and password to get a JWT token.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Username
                </span>
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  autoComplete="username"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                  placeholder="Enter username"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                  placeholder="Enter password"
                  required
                />
              </label>
            </div>

            {error ? (
              <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
