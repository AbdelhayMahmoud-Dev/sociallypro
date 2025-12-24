import Link from "next/link";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 p-6">
        <ul className="space-y-4">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/orders">Orders</Link></li>
          <li><Link href="/admin">Admin</Link></li>
        </ul>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
