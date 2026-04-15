import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const WA_LINK = 'https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים'

interface NavItem { label: string; href: string }

interface HeaderProps {
  page?: 'home' | 'articles'
}

export function Header({ page = 'home' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = page === 'articles' ? '/' : ''

  const navItems: NavItem[] = [
    { label: 'אודות',        href: `${base}#about` },
    { label: 'טיפולים',      href: `${base}#treatments` },
    { label: 'תהליך',        href: `${base}#process` },
    { label: 'שאלות נפוצות', href: `${base}#faq` },
    { label: 'מאמרים',       href: 'articles.html' },
  ]

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            scrolled &&
              'bg-background/60 max-w-4xl rounded-2xl border border-border backdrop-blur-lg shadow-sm lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">

            {/* Logo + mobile toggle */}
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href={page === 'articles' ? '/' : '#'} className="flex flex-col leading-tight" aria-label="דף הבית">
                <span className="font-['Frank_Ruhl_Libre'] text-lg font-bold text-foreground">
                  רון סמרה
                </span>
                <span className="text-xs font-semibold tracking-wider text-primary">
                  רפואה סינית
                </span>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
                aria-expanded={menuOpen}
                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
              >
                {menuOpen ? (
                  <X className="size-6 text-foreground" />
                ) : (
                  <Menu className="size-6 text-foreground" />
                )}
              </button>
            </div>

            {/* Desktop center nav */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={cn(
                        'block duration-150 transition-colors',
                        page === 'articles' && item.href === 'articles.html'
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(scrolled && 'hidden')}
              >
                <a href="tel:+972523518103">התקשר עכשיו</a>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  💬 וואטסאפ
                </a>
              </Button>
            </div>

          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mx-2 mt-1 rounded-2xl border border-border bg-card shadow-xl p-6 lg:hidden"
            >
              <ul className="space-y-4 mb-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-base font-medium text-foreground border-b border-border pb-3 last:border-0"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href="tel:+972523518103">📞 התקשר עכשיו</a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-l from-amber-600 to-amber-500 text-white border-0"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    💬 שלח וואטסאפ
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
