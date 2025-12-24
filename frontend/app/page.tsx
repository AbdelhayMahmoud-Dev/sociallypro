import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        SociallyPro Marketplace
      </h1>
      <p className="text-gray-400 max-w-xl mb-8">
        منصة احترافية لشراء وإدارة خدمات السوشيال ميديا
        والمنتجات الرقمية بسرعة وأمان.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          تسجيل الدخول
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition"
        >
          لوحة التحكم
        </Link>
      </div>
    </main>
  );
}
