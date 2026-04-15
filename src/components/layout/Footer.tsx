export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">

          {/* Brand */}
          <div>
            <div className="font-['Frank_Ruhl_Libre'] text-lg font-bold text-white">
              רון סמרה
            </div>
            <div className="text-xs tracking-wider text-amber-400 mt-0.5 mb-3">
              רפואה סינית
            </div>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              BAc. Lic. Ac — I.C.O.M London<br />
              מודיעין מכבים רעות · ראשון–חמישי 09:00–19:00
            </p>
            <p className="mt-3 text-xs text-stone-500">
              מטפל מוסמך בכללית משלימה
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="ניווט תחתון">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">ניווט</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'אודות',        href: '#about' },
                { label: 'טיפולים',      href: '#treatments' },
                { label: 'תהליך',        href: '#process' },
                { label: 'שאלות נפוצות', href: '#faq' },
                { label: 'מאמרים',       href: 'articles.html' },
                { label: 'צור קשר',      href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">יצירת קשר</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>📍 מודיעין מכבים רעות</li>
              <li>📞 052-351-8103</li>
              <li>🕘 ראשון–חמישי 09:00–19:00</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-stone-400 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
              >
                💬 וואטסאפ
              </a>
              <a
                href="https://www.facebook.com/samraron71"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-stone-400 hover:text-amber-400 hover:border-amber-400/30 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 space-y-4">
          {/* Policy links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-stone-500">
            <a href="/privacy.html"       className="hover:text-amber-400 transition-colors">מדיניות פרטיות</a>
            <a href="/terms.html"         className="hover:text-amber-400 transition-colors">תנאי שימוש</a>
            <a href="/accessibility.html" className="hover:text-amber-400 transition-colors">הצהרת נגישות</a>
            <a href="/disclaimer.html"    className="hover:text-amber-400 transition-colors">הצהרת אחריות רפואית</a>
          </div>
          <div className="flex flex-col gap-2 text-xs text-stone-600 md:flex-row md:justify-between">
            <p>&copy; {year} רון סמרה. כל הזכויות שמורות. מודיעין מכבים רעות.</p>
            <p className="text-stone-700 max-w-md">
              רון סמרה מחזיק בתעודת מטפל מוסמך ברפואה סינית BAc. Lic. Ac ואינו רופא MD.
              המידע באתר אינו מהווה המלצה רפואית. תוצאות הטיפול משתנות מאדם לאדם.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
