import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      {/* القائمة الجانبية (Sidebar) */}
      <aside className="w-64 bg-slate-900 p-6 border-r border-slate-800">
        <h3 className="text-xl font-bold mb-10 text-blue-500 font-mono italic">SociallyPro</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="hover:text-blue-400 transition cursor-pointer font-medium border-l-2 border-transparent hover:border-blue-500 pr-2">📊 نظرة عامة</li>
          <li>
            <Link href="/orders" className="hover:text-blue-400 transition font-medium block pr-2">
              📦 الطلبات
            </Link>
          </li>
          <li className="hover:text-blue-400 transition cursor-pointer font-medium pr-2">🛠️ الخدمات</li>
          <li className="hover:text-blue-400 transition cursor-pointer font-medium text-sm pt-4 border-t border-slate-800 pr-2">⚙️ الإعدادات</li>
        </ul>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-gray-400 mb-2">إجمالي الطلبات</p>
            <span className="text-3xl font-bold">12</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-gray-400 mb-2">الطلبات النشطة</p>
            <span className="text-3xl font-bold text-blue-500">5</span>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-gray-400 mb-2">المكتملة</p>
            <span className="text-3xl font-bold text-green-500">7</span>
          </div>
        </div>
      </main>
    </div>
  );
}