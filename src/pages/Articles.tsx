import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { AccessibilityWidget } from '../components/AccessibilityWidget'
import { Button } from '../components/ui/button'

const WA_LINK = 'https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים'

const pillars = [
  {
    icon: '🦴',
    tag: 'כאב ותנועה',
    tagStyle: 'bg-red-50 text-red-700 border border-red-200',
    title: 'כאב ותנועה',
    desc: 'כאב גב, צוואר, כתפיים ופרקים — הבנת השורש וטיפול קלאסי שמחזיר את התנועה',
    href: 'articles/article-back-pain.html',
    image: '/images/article/article-headache.png',
  },
  {
    icon: '🌙',
    tag: 'בעיות שינה',
    tagStyle: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    title: 'בעיות שינה',
    desc: 'מתח כרוני, חרדה והפרעות שינה — כיצד רפואה סינית מחזירה את האיזון למערכת העצבים. רון סמרה מתאים את הטיפול אישית לכל מטופל — על פי תסמיניו הספציפיים, אורח חייו ומצבו הרגשי.',
    href: 'articles/article-sleep.html',
    image: '/images/article/article-sleep.png',
  },
  {
    icon: '🌸',
    tag: 'אלרגיה',
    tagStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    title: 'אלרגיה',
    desc: 'אלרגיה יכולה להתבטא בנזלת, גירויים בעור, עיטושים או קושי בנשימה — תגובה של מערכת החיסון לגורמים חיצוניים שמשפיעה על איכות החיים.',
    href: 'articles/article-allergies.html',
    image: '/images/article/article-allergies.png',
  },
  {
    icon: '🌸',
    tag: 'פריון ואישה',
    tagStyle: 'bg-pink-50 text-pink-700 border border-pink-200',
    title: 'פריון ואישה',
    desc: 'תמיכה בפריון, איזון מחזור, גיל המעבר ובריאות הורמונלית לאורך כל שלבי החיים',
    href: 'articles/article-fertility.html',
    image: '/images/article/article-fertility.png',
  },
  {
    icon: '🧠',
    tag: 'סטרס וחרדה',
    tagStyle: 'bg-blue-50 text-blue-700 border border-blue-200',
    title: 'סטרס, עומס נפשי וחרדה',
    desc: 'סטרס, עומס נפשי וחרדה יכולים להתבטא במתח מתמשך, חוסר שקט, עייפות, קשיי ריכוז, הפרעות שינה או תחושת הצפה — מצבים שמשפיעים על הגוף והנפש ועל איכות החיים ביום־יום.',
    href: 'articles/article-stress.html',
    image: '/images/article/article-gynecology.png',
  },
  {
    icon: '💧',
    tag: 'הזעת יתר',
    tagStyle: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    title: 'הזעת יתר',
    desc: 'הזעת יתר יכולה להופיע בידיים, בכפות הרגליים, בבית השחי או בפנים — וליצור תחושת אי נוחות וחוסר ביטחון ביום־יום.',
    href: 'articles/article-sweating.html',
    image: '/images/article/article-sweating.png',
  },
]

export default function Articles() {
  return (
    <>
      <Header page="articles" />

      {/* Page hero — dark, prominent */}
      <section className="bg-stone-900 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            ידע ורפואה
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            מאמרים ומדריכים
          </h1>
          <p className="mt-4 text-lg font-light text-stone-300 max-w-xl mx-auto">
            מידע מעמיק על רפואה סינית קלאסית — ישירות מהמרפאה
          </p>
          {/* Article count badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-stone-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {pillars.length} נושאים זמינים לקריאה
          </div>
        </div>
      </section>

      {/* Archive grid */}
      <main id="main" className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                >
                  {/* Tall cover image */}
                  <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                    {/* Category tag — overlaid on image */}
                    <span className={`absolute bottom-3 end-3 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${p.tagStyle} bg-white/90 backdrop-blur-sm`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Card body — archive style */}
                  <div className="flex flex-1 flex-col p-5 gap-3">
                    <h2 className="text-base font-bold text-foreground leading-snug group-hover:text-amber-800 transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <div className="pt-2 border-t border-border flex items-center justify-between">
                      <span className="text-sm font-semibold text-amber-700 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                        קראו את המאמר
                        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                      </span>
                      <span className="text-xl">{p.icon}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-center text-white">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-3xl font-bold">יש שאלה? בואו נדבר.</h2>
          <p className="mt-4 text-stone-300 font-light">
            שלחו הודעה ונקבע זמן שנוח לכם — בלי לחץ, בלי התחייבות.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-10 py-7 text-lg font-medium bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-xl shadow-amber-700/30"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                💬 שלחו הודעה עכשיו
              </a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-stone-400">
            <span>📍 מודיעין מכבים רעות</span>
            <span>🕘 ראשון–חמישי 09:00–18:00</span>
            <span>📞 052-351-8103</span>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <AccessibilityWidget />
    </>
  )
}
