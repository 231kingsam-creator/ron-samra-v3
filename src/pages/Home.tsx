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
   1. HERO
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-amber-100/60 blur-3xl" />

            <div className="relative mx-auto aspect-[3/4] max-w-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-stone-900/15 lg:max-w-none">
              <img
                src="/images/hero/ron-hero-mobile.jpg"
                alt="רון סמרה — מטפל ברפואה סינית"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
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
   3. TREATMENTS / למי זה מתאים?
══════════════════════════════════════════════════════════════ */
const treatments = [
  { num: '01', title: 'כאב שלא עובר?',               desc: 'כאבי גב, צוואר, ראש ומפרקים — גם אחרי פיזיותרפיה ותרופות. הרפואה הסינית מטפלת בשורש הבעיה, לא רק בסימפטום.',      href: 'articles.html' },
  { num: '02', title: 'סטרס ועומס רגשי',              desc: 'מתח שלא עוזב, חרדה, עייפות כרונית, עומס במחשבות — הגוף נושא את הלחץ, והרפואה הסינית עוזרת לשחרר.',              href: 'articles.html' },
  { num: '03', title: 'שינה גרועה?',                  desc: 'קושי להירדם, התעוררויות באמצע הלילה, שינה לא מרעננת — שינה עמוקה וטבעית היא לא מותרות, היא חיונית.',             href: 'articles.html' },
  { num: '04', title: 'עייפות כרונית?',               desc: 'לא משנה כמה ישנת — עדיין מרגישים עייפות? אנרגיה נמוכה שמשפיעה על כל תחום בחיים, מהעבודה ועד לפנאי.',            href: 'articles.html' },
  { num: '05', title: '"הכל תקין" — אבל אתה לא?',     desc: 'הבדיקות יצאו תקינות, אבל אתה מרגיש שמשהו לא בסדר? הרפואה הסינית מקשיבה למה שהרגיל לפעמים מפספס.',             href: 'articles.html' },
  { num: '06', title: 'בעיות הורמונליות ופוריות?',    desc: 'מחזור לא סדיר, תסמיני מנופאוזה, תמיכה בתהליך פוריות — גישה טבעית, עדינה ומותאמת אישית.',                         href: 'articles.html' },
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">למי זה מתאים?</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">לאנשים שסבלו מספיק</h2>
          <p className="mt-4 text-stone-500 text-base">שלא מוכנים להמשיך לחיות עם הכאב ומוכנים לשנות. הגוף מדבר — לפעמים דרך כאב, עייפות או מתח.</p>
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

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="mb-2 text-base font-semibold text-stone-700">מזהים את עצמכם?</p>
          <p className="mb-6 text-sm text-stone-500">שלחו הודעה קצרה — נשמח לשמוע ולבדוק יחד איך אפשר לעזור.</p>
          <Button
            asChild size="lg"
            className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/20"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              שלחו הודעה בוואטסאפ
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   4. PROCESS / איך זה עובד?
══════════════════════════════════════════════════════════════ */
const processSteps = [
  { num: '01', title: 'אבחון אישי ומדויק',            sub: 'Personal Diagnosis',    desc: 'שיחה קצרה והבנה של מה שעובר עליך — כאב, שינה, סטרס או תחושה כללית בגוף. מסתכלים על התמונה המלאה, לא רק על הסימפטום.' },
  { num: '02', title: 'טיפול מותאם לגוף ולנפש שלך',  sub: 'Personalized Treatment', desc: 'הדיקור נעשה בעדינות ובהתאמה אישית, במטרה להחזיר זרימה ואיזון למערכת. רוב המטופלים חווים טיפול רגוע ונעים.' },
  { num: '03', title: 'שיפור הדרגתי ויציב',           sub: 'Gradual Improvement',   desc: 'הגוף מתחיל להגיב, והתהליך מוביל להפחתת סימפטומים ולתחושה כללית טובה יותר. לעיתים ניתן להרגיש שינוי כבר אחרי מספר טיפולים.' },
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
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">איך זה עובד?</h2>
          <p className="mt-4 text-stone-400">התהליך פשוט, ברור ומותאם אליך אישית</p>
        </motion.div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/5 rounded-2xl overflow-hidden">
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

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild size="lg"
            className="rounded-2xl px-8 py-7 text-base font-semibold bg-gradient-to-l from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-stone-900 border-0 shadow-xl shadow-amber-500/20"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              רוצה לבדוק אם זה מתאים לך?
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   5. ABOUT / למה לבחור בי?
══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const credentials = [
    'B.Ac. Lic. Ac — קולג\' בינלאומי לרפואה סינית, לונדון',
    'חבר באיגוד הבריטי לרפואה סינית (B.Ac.C)',
    'ממקימי האגודה לרפואה סינית בישראל (1995)',
    'מרצה באוניברסיטה העברית (2005–2021)',
    'מטפל מוסמך בכללית משלימה (מ-1997)',
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
              למה לבחור בי?<br />
              <span className="text-amber-700">כי טיפול טוב מתחיל בהקשבה</span>
            </h2>

            <blockquote className="my-8 border-s-2 border-amber-400 ps-5">
              <p className="font-['Frank_Ruhl_Libre'] text-xl italic text-stone-600 leading-relaxed">
                "אני רון סמרה, מטפל ברפואה סינית עם ניסיון של מעל 35 שנה. לאורך השנים ליוויתי מטופלים רבים עם כאב, סטרס, בעיות שינה וחוסר איזון — כל אחד עם הסיפור שלו."
              </p>
            </blockquote>

            <div className="space-y-3.5 text-stone-600 leading-relaxed">
              <p>כילד גדלתי בצל הרפואה: אבי היה רופא בכיר בתל השומר. נחשפתי להתרגשות ולעבודתו המסורה של אדם שמצליח לעזור לאחרים ולתת תקווה. רציתי לעסוק ברפואה.</p>
              <p>דרכי הובילה אותי ללונדון, שם למדתי רפואה סינית בקולג' הבינלאומי לרפואה סינית (I.C.O.M) — המוביל באירופה. 4 שנות לימוד ו-3 שנות עבודה כמנחה קליני.</p>
              <p>הגישה שלי פשוטה: לא רק לטפל בסימפטום — אלא להבין מה עומד מאחוריו. כל טיפול מותאם אישית, בקצב שנכון לך, ובמטרה להחזיר את הגוף לאיזון.</p>
              <p>אני מאמין בטיפול מדויק, קשוב ולא אגרסיבי — כזה שהגוף יכול לקבל ולהגיב אליו. בעבודתי אני משלב דיקור סיני, טווינה, מוקסה, כוסות רוח וייעוץ תזונתי.</p>
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
   6. TESTIMONIALS
══════════════════════════════════════════════════════════════ */
const testimonials = [
  { text: 'כבר אחרי כמה טיפולים הרגשתי הקלה משמעותית בכאבי הגב. רון הקשיב באמת לגוף שלי!',                             author: 'דינה', context: 'כאבי גב · גיל 42' },
  { text: 'סטרס ועייפות שנראו בלתי פתירים נעלמו כמעט לגמרי. אני ישן טוב יותר והתחושה שלי השתנתה.',                      author: 'יוסי', context: 'סטרס ועייפות · גיל 35' },
  { text: 'הדיקור הסיני עזר לי לאזן את המחזור ולהרגיש יותר אנרגיה וחיוניות. ממליצה בחום!',                              author: 'שרה', context: 'איזון הורמונלי · גיל 50' },
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
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">מה המטופלים שלי אומרים</h2>
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

        <div className="mt-12 text-center">
          <Button
            asChild size="lg"
            className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/20"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              רוצה לבדוק איך אפשר לעזור גם לך?
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   7. WHY ACUPUNCTURE WORKS
══════════════════════════════════════════════════════════════ */
const acupuncturePoints = [
  { q: 'אבחון שלם',       a: 'שיחה אמיתית: מה הגוף מרגיש ומה החיים אומרים, לא רק רשימת סימפטומים. האבחון מאפשר להבין את שורש הבעיה ולא רק את מה שנראה על פני השטח.' },
  { q: 'טיפול בשורש',     a: 'הדיקור מפעיל נקודות שמשפיעות על כל מערכות הגוף — לא רק על הסימפטום, אלא על מה שגורם לו.' },
  { q: 'גוף ונפש ביחד',   a: 'סטרס ורגשות מתבטאים בגוף; הטיפול מאזן גם את הממד הרגשי ולא רק את הפיזי.' },
  { q: 'תוצאה מורגשת',    a: 'רוב המטופלים מדווחים על שיפור כבר לאחר 2–3 טיפולים. השיפור הדרגתי, מצטבר ויציב לאורך זמן.' },
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
          className="mb-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">דיקור סיני</p>
          <h2 className="mt-3 text-4xl font-bold text-stone-900 md:text-5xl">למה דיקור סיני עובד?</h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto leading-relaxed">
            דיקור סיני פותח חסימות באנרגיה, משחרר מתח ומאזן את מערכות הגוף והנפש. כך ניתן להשפיע על כאב, עייפות, סטרס ושינה — ולטפל בשורש, לא רק בסימפטום.
          </p>
        </motion.div>

        <ul className="mt-12 space-y-3">
          {acupuncturePoints.map((item, i) => (
            <li key={i} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start font-semibold text-stone-900 hover:bg-stone-50/80 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base">{item.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="border-t border-stone-100 px-6 pb-5 pt-4 text-sm text-stone-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-stone-400">רוצה לבדוק אם זה מתאים לך?</p>
          <Button
            asChild size="lg"
            className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              שלח הודעה בוואטסאפ
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
    href:  'articles.html',
  },
  {
    tag: 'שינה וסטרס',
    tagStyle: 'bg-indigo-50 text-indigo-600',
    title: 'סטרס ושינה — כיצד רפואה סינית מאזנת את מערכת העצבים',
    desc:  'הקשר בין מתח, שינה ובריאות כוללת — ומה אפשר לעשות',
    href:  'articles.html',
  },
  {
    tag: 'עיכול וחיסון',
    tagStyle: 'bg-emerald-50 text-emerald-700',
    title: 'עיכול ואיזון — הקשר בין מעיים, חיסון ואנרגיה',
    desc:  'כיצד מערכת העיכול משפיעה על כל הגוף ואיך לחזק אותה',
    href:  'articles.html',
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
        <ProcessSection />
        <AboutSection />
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
