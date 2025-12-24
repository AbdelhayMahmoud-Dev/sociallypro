/**
 * الصفحة الرئيسية للمنصة (Landing Page)
 * تصميم عصري باستخدام Tailwind CSS مع دعم الثيم الداكن
 */
"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Container الرئيسي */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        
        {/* العناوين الرئيسية */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          أدر خدماتك الرقمية <span className="text-blue-500">باحتراف</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          منصة موثوقة لإدارة وبيع خدمات السوشيال ميديا بسهولة وأمان. 
          نحن نوفر لك الأدوات اللازمة للنمو بسرعة فائقة.
        </p>

        {/* أزرار الانتقال (Call to Action) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 w-full md:w-auto"
          >
            ابدأ الآن مجاناً
          </a>
          
          <a 
            href="#features" 
            className="border border-slate-700 hover:bg-slate-800 text-gray-300 px-8 py-4 rounded-xl font-bold text-lg transition-all w-full md:w-auto"
          >
            تعرف أكثر
          </a>
        </div>

        {/* قسم إحصائيات سريعة (اختياري للجمالية) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800/50 pt-16">
          <div>
            <h4 className="text-3xl font-bold text-white">+50k</h4>
            <p className="text-gray-500 text-sm">طلب مكتمل</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">24/7</h4>
            <p className="text-gray-500 text-sm">دعم فني</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">+100</h4>
            <p className="text-gray-500 text-sm">خدمة نشطة</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white">99.9%</h4>
            <p className="text-gray-500 text-sm">وقت تشغيل</p>
          </div>
        </div>
      </main>
    </div>
  );
}