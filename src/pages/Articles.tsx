import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { AccessibilityWidget } from '../components/AccessibilityWidget'
import { Button } from '../components/ui/button'

const WA_LINK = 'https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים'

const pillars = [
  {
    icon: '🦴',
    title: 'כאב ותנועה',
    desc: 'כאב גב, צוואר, כתפיים ופרקים — הבנת השורש וטיפול קלאסי שמחזיר את התנועה',
    href: 'articles/article-back-pain.html',
    image: '/images/article/article-headache.png',
  },
  {
    icon: '🌙',
    title: 'שינה וסטרס',
    desc: 'מתח כרוני, חרדה והפרעות שינה — כיצד רפואה סינית מחזירה את האיזון למערכת העצבים',
    href: 'articles/article-sleep.html',
    image: '/images/article/article-sleep.png',
  },
  {
    icon: '🌿',
    title: 'עיכול וחיסון',
    desc: 'מעי רגיש, נפיחות, ריפלוקס ומחסות חלושה — הגישה הסינית לחיזוק הגוף מבפנים',
    href: 'articles/article-allergies.html',
    image: '/images/article/article-allergies.png',
  },
  {
    icon: '🌸',
    title: 'פריון ואישה',
    desc: 'תמיכה בפריון, איזון מחזור, גיל המעבר ובריאות הורמונלית לאורך כל שלבי החיים',
    href: 'articles/article-fertility.html',
    image: '/images/article/article-fertility.png',
  },
  {
    icon: '🧒',
    title: 'ילדים ועצבים',
    desc: 'טיפול עדין לילדים — קשיי שינה, כאבי בטן, חרדות ובעיות מערכת עצבים',
    href: 'articles/article-stress.html',
    image: '/images/article/article-gynecology.png',
  },
  {
    icon: '✨',
    title: 'עור ופנים',
    desc: 'אקנה, אקזמה, פסוריאזיס ועור יבש — הקשר בין עור לאיזון פנימי בראייה הסינית',
    href: 'articles/article-sweating.html',
    image: '/images/article/article-sweating.png',
  },
]

export default function Articles() {
  return (
    <>
      <Header page="articles" />

      {/* Page hero */}
      <section className="bg-stone-900 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            ידע ורפואה
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            מאמרים ומדריכים
          </h1>
          <p className="mt-4 text-lg font-light text-stone-300">
            מידע מעמיק על רפואה סינית קלאסית — מישירות מהמרפאה
          </p>
        </div>
      </section>

      <main className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                >
                  {/* Cover image */}
                  <div className="relative h-44 w-full overflow-hidden bg-amber-50">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Card body */}
                  <div className="flex flex-1 flex-col items-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 border border-amber-100 text-2xl -mt-9 shadow-sm">
                      {p.icon}
                    </div>
                    <h2 className="mt-3 text-lg font-bold text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <span className="mt-4 text-sm font-bold text-amber-600">
                      לקריאה ←
                    </span>
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
