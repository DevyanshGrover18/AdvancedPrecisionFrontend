import { NavLink } from "react-router-dom";

const AdminSidebar = ({ sections, onLogout }) => {
  return (
    <aside className="h-full min-h-[calc(100vh-220px)] rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Sections
        </p>
      </div>

      <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-1">
        {sections.map((section) => (
          <NavLink
            key={section.id}
            to={section.to}
            end
            className={({ isActive }) =>
              `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                ? "bg-[#0f172a] text-white shadow-lg shadow-black/10"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <span>{section.label}</span>
          </NavLink>
        ))}
      </div>

      <button
        type="button"
        onClick={onLogout}
        className="mt-4 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#a4d145] hover:text-slate-900"
      >
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
