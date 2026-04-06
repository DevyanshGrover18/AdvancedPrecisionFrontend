import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { clearAdminToken, getAdminToken } from "../../services/admin";

const sections = [
  { id: "overview", label: "Overview", to: "/admin/overview" },
  { id: "products", label: "Products", to: "/admin/products" },
  { id: "gallery", label: "Gallery", to: "/admin/gallery" },
];

const AdminLayout = () => {
  const token = getAdminToken();
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    clearAdminToken();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#50b8af]">
                Admin Panel
              </p>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Dashboard
              </h1>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid min-h-[calc(100vh-220px)] gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-stretch">
          <AdminSidebar sections={sections} onLogout={handleLogout} />

          <section className="space-y-6">
            <Outlet />
          </section>
        </div>
      </section>
    </main>
  );
};

export default AdminLayout;
