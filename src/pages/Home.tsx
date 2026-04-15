import * as React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { AccessibilityWidget } from '../components/AccessibilityWidget'
import { AnimatedTextCycle } from '../components/AnimatedTextCycle'
import { Button } from '../components/ui/button'
import { cn } from '../lib/utils'

const WA_LINK = 'https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.106 1.523 5.83L0 24l6.335-1.508A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.012-1.374l-.36-.213-3.76.896.947-3.663-.235-.376A9.804 9.804 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}

/* ── shared scroll animation ───────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

/* ══════════════════════════════════════════════════════════════
   1. HERO  — split layout: text right (RTL), image left
══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-stone-50">
      {/* Ambient warm glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div style={{ background: 'radial-gradient(70% 80% at 80% 10%, #fef3c7 0%, transparent 65%)' }} className="absolute inset-0" />
        <div style={{ background: 'radial-gradient(50% 50% at 20% 90%, #f5f5f4 0%, transparent 70%)' }} className="absolute inset-0" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Text — right in RTL, order-2 so image shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-start"
          >
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-200/70 bg-amber-50 px-4 py-1.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold tracking-wide text-amber-800">
                BAc Lic Ac · I.C.O.M London · 35+ שנות ניסיון
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.1] text-stone-900 md:text-6xl xl:text-7xl">
              סובלים מ{' '}
              <AnimatedTextCycle
                words={['כאב', 'סטרס', 'שינה לא מאוזנת', 'מתח', 'חרדה', 'מיגרנות']}
                interval={3000}
                className="bg-gradient-to-l from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent"
              />
              <span className="text-stone-300">?</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-xl font-light leading-relaxed text-stone-600 lg:mx-0">
              טיפול מדויק שמכוון לשורש הבעיה — לא רק לסימפטום.
            </p>
            <p className="mt-2 text-sm text-stone-400">מודיעין מכבים רעות · מטפל מוסמך</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start">
              <Button
                asChild size="lg"
                className="rounded-2xl px-8 py-7 text-base font-medium bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/30"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WaIcon />
                  התייעצות חינם בוואטסאפ
                </a>
              </Button>
              <Button
                asChild size="lg" variant="ghost"
                className="rounded-2xl px-8 py-7 text-base text-stone-600 hover:bg-stone-100"
              >
                <a href="#treatments">איך הטיפול עובד ←</a>
              </Button>
            </div>
          </motion.div>

          {/* Image — left in RTL, order-1 so it shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Soft glow behind image */}
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-amber-100/60 blur-3xl" />

            <div className="relative mx-auto aspect-[3/4] max-w-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-stone-900/15 lg:max-w-none">
              <img
                src="/images/hero/ron-hero-mobile.jpg"
                alt="רון סמרה — מטפל ברפואה סינית"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Subtle bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <div className="absolute bottom-6 -start-3 rounded-2xl border border-stone-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
              <div className="font-['Frank_Ruhl_Libre'] text-2xl font-bold text-amber-700">35+</div>
              <div className="mt-0.5 text-xs text-stone-500">שנות ניסיון קליני</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   2. TRUST BAR
══════════════════════════════════════════════════════════════ */
function TrustBar() {
  const items = [
    { num: '35+',    label: 'שנות ניסיון קליני' },
    { num: 'אלפי',  label: 'מטופלים' },
    { num: 'מייסד', label: 'האגודה לרפואה סינית בישראל' },
    { num: 'מרצה',  label: 'באוניברסיטה העברית' },
  ]
  return (
    <div className="border-y border-stone-200/60 bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <ul className="grid grid-cols-2 gap-y-8 text-center md:grid-cols-4">
          {items.map((item) => (
            <li key={item.num} className="flex flex-col items-center gap-1.5">
              <span className="font-['Frank_Ruhl_Libre'] text-3xl font-bold text-amber-700">{item.num}</span>
              <span className="text-xs text-stone-500 leading-snug max-w-[100px]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   3. TREATMENTS
══════════════════════════════════════════════════════════════ */
const treatments = [
  { num: '01', title: 'כאב גב, צוואר וכתפיים', desc: 'כאב כרוני, נוקשות ומתח שמגבילים את היומיום',   href: '/articles/pillar-pain.html' },
  { num: '02', title: 'כאבי ראש ומיגרנות',     desc: 'הקלה על מיגרנות חוזרות וכאבי ראש כרוניים',   href: '/articles/pillar-pain.html' },
  { num: '03', title: 'סטרס וחרדה',             desc: 'מתח מתמשך, דאגנות ותחושת עומס שלא מרפה',     href: '/articles/pillar-stress-sleep.html' },
  { num: '04', title: 'הפרעות שינה',            desc: 'קושי להירדם, שינה קטועה ועייפות למחרת',      href: '/articles/pillar-stress-sleep.html' },
  { num: '05', title: 'אסטמה וקוצר נשימה',     desc: 'הפחתת תדירות ועוצמת הסימפטומים',              href: '/articles/pillar-digestion.html' },
  { num: '06', title: 'פריון ובריאות האישה',   desc: 'תמיכה בפריון, מחזור ואיזון הורמונלי',         href: '/articles/pillar-fertility.html' },
]

function TreatmentsSection() {
  return (
    <section id="treatments" className="py-28">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">תחומי טיפול</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">מה הגוף מנסה לומר</h2>
          <p className="mt-4 text-stone-500 text-base">רפואה סינית קלאסית מטפלת בשורש, לא רק בסימפטום</p>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <motion.li
              key={t.title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <a
                href={t.href}
                className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-xl hover:shadow-amber-900/5"
              >
                <span className="mb-5 font-mono text-xs font-bold tracking-widest text-amber-400/80">{t.num}</span>
                <h3 className="text-base font-bold text-stone-900 leading-snug">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm text-stone-500 leading-relaxed">{t.desc}</p>
                <span className="mt-5 flex items-center gap-1 text-xs font-semibold text-amber-700">
                  <span>למאמר</span>
                  <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   4. ABOUT
══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const credentials = [
    'BAc. Lic. Ac — I.C.O.M London',
    '7 שנים בלונדון (4 לימוד + 3 הדרכה קלינית)',
    'ממקימי האגודה לרפואה סינית בישראל (1995)',
    'מטפל מוסמך בכללית משלימה',
    'חבר באיגוד הבריטי לרפואה סינית (B.Ac.C)',
    'מרצה באוניברסיטה העברית',
  ]

  return (
    <section id="about" className="py-28 bg-stone-50/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] md:items-center">

          {/* Portrait */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-amber-100/50 blur-3xl" />
            <div className="overflow-hidden rounded-3xl aspect-[4/5] shadow-xl shadow-stone-900/10">
              <img
                src="/images/clinic/ron-portrait-clinic.jpg"
                alt="רון סמרה — מטפל ברפואה סינית"
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                  const next = e.currentTarget.nextElementSibling as HTMLElement | null
                  if (next) next.style.display = 'flex'
                }}
              />
              <div className="hidden h-full items-center justify-center text-stone-400 text-sm" aria-hidden="true">
                תמונת פורטרט
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">אודות</p>
            <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl leading-tight">
              35 שנה של ידע,<br />
              <span className="text-amber-700">בשירות הגוף שלך</span>
            </h2>

            <blockquote className="my-8 border-s-2 border-amber-400 ps-5">
              <p className="font-['Frank_Ruhl_Libre'] text-xl italic text-stone-600 leading-relaxed">
                "הרגשתי שהגעתי הביתה, שמצאתי את הדרך שלי לעזור לאחרים לשפר את בריאותם ואיכות חייהם."
              </p>
            </blockquote>

            <div className="space-y-3.5 text-stone-600 leading-relaxed">
              <p>כילד הסתכלתי על אבי כשחזר הביתה מדי ערב — רופא בכיר ומנהל מחלקה פנימית בבית חולים תל השומר. למרות העייפות, היה על פניו אור של מי שהצליח לעזור להרבה אנשים. זה ריגש אותי עמוקות.</p>
              <p>לאחר תואר ראשון בביולוגיה באוניברסיטה העברית, טסתי לאנגליה וסיימתי לימודים בקולג' הבינלאומי לרפואה סינית (I.C.O.M) — המוביל בלימודי אקופונקטורה באירופה. שם נחשפתי לעולם חדש: רפואה המבוססת על היחסים ההרמוניים בין האדם ליקום, ועל החיבור בין גוף ונפש.</p>
              <p>מזה 35+ שנים אני מטפל במסגרת ציבורית ופרטית, כולל הוראה בתכנית לרפואה סינית עתיקה באוניברסיטה העברית. בעבודתי אני משלב דיקור סיני, טווינה, מוקסה, כוסות רוח וייעוץ תזונתי.</p>
              <p>בשנים האחרונות אני מלווה אנשים רבים המחפשים דרך אחרת להתמודד עם לחץ, מתח נפשי, וקשיים פיזיים ורגשיים.</p>
            </div>

            <ul className="mt-7 space-y-2.5">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 font-bold text-amber-600">✓</span>
                  <span className="text-stone-700">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button
                asChild size="lg"
                className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/20"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WaIcon />
                  שאלו אותי ישירות
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   5. PROCESS
══════════════════════════════════════════════════════════════ */
const processSteps = [
  { num: '01', title: 'אבחון חוקתי',   sub: 'Constitutional Diagnosis', desc: 'שיחה מעמיקה ואבחון על-פי שיטת Stems & Branches — חיפוש שורש חוסר האיזון, לא רק הסימפטום.' },
  { num: '02', title: 'שחרור הזרימה',  sub: 'Flow Restoration',          desc: 'דיקור מדויק לשחרור חסימות אנרגטיות ושחזור זרימת ה-Qi בערוצי הגוף.' },
  { num: '03', title: 'התיקון המבני',  sub: 'The Structural Fix',         desc: 'טיפול ממוקד בשורש הבעיה — צמחי מרפא, טווינה ומוקסה בהתאם לצרכים האישיים.' },
  { num: '04', title: 'חוסן ושמירה',   sub: 'Resilience & Maintenance',   desc: 'בניית עמידות הגוף, מניעת הישנות ושמירה על האיזון שהושג לאורך זמן.' },
]

function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-stone-950 text-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120,53,15,0.25) 0%, transparent 70%)' }} className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">תהליך הטיפול</p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">התהליך פשוט, ברור ומותאם אישית</h2>
          <p className="mt-4 text-stone-400">טיפול טוב מתחיל בהקשבה</p>
        </motion.div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-white/5 rounded-2xl overflow-hidden">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-stone-950 p-8 hover:bg-stone-900/60 transition-colors"
            >
              <div className="font-['Frank_Ruhl_Libre'] mb-6 text-5xl font-bold text-amber-500/25">{step.num}</div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-amber-400/70">{step.sub}</p>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   6. TESTIMONIALS
══════════════════════════════════════════════════════════════ */
const testimonials = [
  { text: 'הצלחת להביאני למצב בריא. אתה כישרון אמיתי.',                                                                                   author: 'חנה תבל', context: 'פציאליס וחרדה · תוך חודש ימים' },
  { text: 'מאז השתמשתי פעמים ספורות בלבד במשאף. השיפור היה מורגש תוך כמה מפגשים בלבד.',                                                   author: 'א.י',      context: 'אסטמה · תוך 5 טיפולים' },
  { text: 'בפעם הראשונה בשנים אני קם בבוקר ומרגיש נח. כאב שלא נתן לי לישון — נעלם כמעט לגמרי.',                                          author: 'דני ל.',   context: 'נדודי שינה כרוניים · תוך 4 טיפולים' },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">ביקורות</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">מה מטופלים אומרים</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-amber-400 text-base tracking-wide">★★★★★</span>
            <span className="text-sm text-stone-400">Google Reviews</span>
          </div>
        </motion.div>

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.author}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-stone-100/80"
              style={{ boxShadow: '0 4px 32px 0 rgba(28,25,23,0.06)' }}
            >
              <div className="mb-5 text-sm tracking-widest text-amber-400">★★★★★</div>
              <p className="flex-1 text-base leading-relaxed text-stone-700">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">{t.author}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{t.context}</div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   7. FAQ
══════════════════════════════════════════════════════════════ */
const faqs = [
  { q: 'האם דיקור סיני כואב?',                      a: 'בדרך כלל לא. המחטים דקות מאוד — רוב המטופלים כמעט לא מרגישים אותן. ייתכן עקצוץ קל בלבד. רוב האנשים נרגעים ולעיתים אף נרדמים במהלך הטיפול.' },
  { q: 'כמה טיפולים צריך?',                          a: 'בעיות חדשות ואקוטיות: בדרך כלל 3–5 טיפולים. בעיות כרוניות שנמשכות שנים: בדרך כלל 6–10 טיפולים. אקבע אומדן מדויק יותר לאחר האבחון הראשון.' },
  { q: 'תוך כמה זמן מרגישים שיפור?',                a: 'מטופלים רבים מדווחים על שיפור כבר לאחר 1–3 טיפולים. בבעיות ותיקות השיפור נוטה להיות הדרגתי ומצטבר.' },
  { q: 'האם אפשר לשלב עם טיפול רפואי רגיל?',        a: 'כן, בהחלט. רפואה סינית משלימה את הטיפול הרפואי הקונבנציונלי ולא מחליפה אותו. חשוב ליידע את הרופא המטפל.' },
  { q: 'מה כלול בטיפול הראשון?',                    a: 'הטיפול הראשון כולל: אבחון קונסטיטוציונלי מלא, תשאול רפואי מקיף, בניית תוכנית טיפול אישית, וטיפול דיקור ראשון. סה"כ 60–75 דקות.' },
]

function FaqSection() {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <section id="faq" className="py-28 bg-stone-50/50">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">שאלות נפוצות</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">שאלות ותשובות</h2>
        </motion.div>

        <ul className="space-y-3">
          {faqs.map((faq, i) => (
            <li key={i} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start font-semibold text-stone-900 hover:bg-stone-50/80 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="border-t border-stone-100 px-6 pb-5 pt-4 text-sm text-stone-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-stone-400">יש שאלה נוספת?</p>
          <Button
            asChild size="lg"
            className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              שאלו אותי בוואטסאפ
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   8. ARTICLES PREVIEW
══════════════════════════════════════════════════════════════ */
const articlePreviews = [
  {
    tag: 'כאב ותנועה',
    tagStyle: 'bg-red-50 text-red-600',
    title: 'כאב גב וצוואר — מה הרפואה הסינית אומרת ואיך היא מטפלת',
    desc:  'הבנת שורש הכאב הכרוני ודרכי הטיפול הקלאסיות',
    href:  '/articles/pillar-pain.html',
  },
  {
    tag: 'שינה וסטרס',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    title: 'סטרס ושינה — כיצד רפואה סינית מאזנת את מערכת העצבים',
    desc:  'הקשר בין מתח, שינה ובריאות כוללת — ומה אפשר לעשות',
    href:  '/articles/pillar-stress-sleep.html',
  },
  {
    tag: 'עיכול וחיסון',
    tagStyle: 'bg-emerald-50 text-emerald-700',
    title: 'עיכול ואיזון — הקשר בין מעיים, חיסון ואנרגיה',
    desc:  'כיצד מערכת העיכול משפיעה על כל הגוף ואיך לחזק אותה',
    href:  '/articles/pillar-digestion.html',
  },
]

function ArticlesPreviewSection() {
  return (
    <section id="articles" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">ידע ורפואה</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">מאמרים מהמרפאה</h2>
          <p className="mt-4 text-stone-500">מדריכים מעמיקים על רפואה סינית, הגוף, ובריאות כוללת</p>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articlePreviews.map((a, i) => (
            <motion.li
              key={a.title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={a.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5"
              >
                {/* Amber top accent */}
                <div className="h-1 bg-gradient-to-l from-amber-400 to-amber-600" />
                <div className="flex flex-1 flex-col p-7">
                  <span className={`mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${a.tagStyle}`}>
                    {a.tag}
                  </span>
                  <h3 className="flex-1 text-base font-bold text-stone-900 leading-snug">{a.title}</h3>
                  <p className="mt-3 text-sm text-stone-500 leading-relaxed">{a.desc}</p>
                  <span className="mt-5 flex items-center gap-1 text-xs font-semibold text-amber-700">
                    <span>לקריאה</span>
                    <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-2xl border-stone-300 text-stone-700 hover:bg-stone-50">
            <a href="articles.html">כל המאמרים ←</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   9. LOCATION
══════════════════════════════════════════════════════════════ */
function LocationSection() {
  return (
    <section className="py-28 bg-stone-50/50">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">מיקום</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">איך מגיעים</h2>
          <p className="mt-3 text-stone-500">מודיעין מכבים רעות — מיקום מרכזי ונוח</p>
        </motion.div>

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '🅿️', text: 'חניה חופשית בסביבה' },
            { icon: '📍', text: 'מיקום מרכזי במודיעין' },
            { icon: '🚗', text: 'דקות ממרכז העיר' },
            { icon: '🌿', text: 'קליניקה שקטה ונגישה' },
          ].map((item) => (
            <div key={item.text} className="flex flex-col items-center gap-2 rounded-xl border border-stone-200/70 bg-white py-4 px-3 text-center shadow-sm">
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium text-stone-600">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Map + navigation */}
        <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-md bg-white">
          <iframe
            title="מיקום מרפאת רון סמרה"
            src="https://maps.google.com/maps?q=31.893533620558788,35.005875575375136&z=15&output=embed"
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex gap-3 p-4">
            <a
              href="https://waze.com/ul?ll=31.893533620558788,35.005875575375136&navigate=yes"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              ניווט ב-Waze
            </a>
            <a
              href="https://maps.app.goo.gl/fk16SLyG2tZwzfD56"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   10. CTA
══════════════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section id="contact" className="py-28 bg-stone-950 text-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(120,53,15,0.45) 0%, transparent 70%)' }} className="absolute inset-0" />
        <div style={{ background: 'radial-gradient(ellipse 40% 40% at 50% -10%, rgba(217,119,6,0.08) 0%, transparent 70%)' }} className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 mb-4">צרו קשר</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl leading-tight">
            מוכנים להתחיל?
          </h2>
          <p className="mt-5 text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
            שלחו הודעה קצרה בוואטסאפ — אחזור אליכם תוך שעות ספורות לתיאום פגישת ייעוץ ראשונה.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              asChild size="lg"
              className="rounded-2xl px-10 py-7 text-base font-semibold bg-gradient-to-l from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-stone-900 border-0 shadow-xl shadow-amber-500/20"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <WaIcon />
                התייעצות חינם בוואטסאפ
              </a>
            </Button>
            <Button
              asChild size="lg" variant="ghost"
              className="rounded-2xl px-10 py-7 text-base text-stone-400 hover:text-white hover:bg-white/10"
            >
              <a href="tel:+972523518103">052-351-8103</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-500">
            <span>📍 מודיעין מכבים רעות</span>
            <span>🕘 ראשון–חמישי 09:00–19:00</span>
            <span>📞 052-351-8103</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Header page="home" />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentsSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ArticlesPreviewSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <AccessibilityWidget />
    </>
  )
}
