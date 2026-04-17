import * as React from 'react'
import { cn } from '../lib/utils'

interface Setting {
  key: string
  label: string
  cssClass: string
  icon: string
}

const settings: Setting[] = [
  { key: 'big-text',      label: 'הגדל טקסט',       cssClass: 'a11y-big-text',      icon: 'A+' },
  { key: 'high-contrast', label: 'ניגודיות גבוהה',   cssClass: 'a11y-high-contrast', icon: '◑'  },
  { key: 'grayscale',     label: 'גווני אפור',        cssClass: 'a11y-grayscale',     icon: '◐'  },
  { key: 'underline',     label: 'הדגש קישורים',     cssClass: 'a11y-underline',     icon: 'U'  },
  { key: 'readable',      label: 'פונט קריא',         cssClass: 'a11y-readable',      icon: 'Aa' },
]

export function AccessibilityWidget() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState<Record<string, boolean>>({})

  const toggle = (key: string, cssClass: string) => {
    const next = !active[key]
    setActive(prev => ({ ...prev, [key]: next }))
    if (next) {
      document.documentElement.classList.add(cssClass)
    } else {
      document.documentElement.classList.remove(cssClass)
    }
  }

  const reset = () => {
    settings.forEach(s => document.documentElement.classList.remove(s.cssClass))
    setActive({})
  }

  return (
    <>
      {/* Global a11y styles injected via <style> */}
      <style>{`
        .a11y-big-text      { font-size: 140% !important; }
        .a11y-high-contrast { filter: contrast(150%) !important; }
        .a11y-grayscale     { filter: grayscale(100%) !important; }
        .a11y-underline  a  { text-decoration: underline !important; }
        .a11y-readable      { font-family: Arial, sans-serif !important; letter-spacing: 0.05em !important; }
      `}</style>

      {/* Fixed button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Panel */}
        {open && (
          <div className="rounded-2xl border border-border bg-white shadow-xl p-4 w-52">
            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">נגישות</p>

            <ul className="space-y-1.5">
              {settings.map(s => (
                <li key={s.key}>
                  <button
                    onClick={() => toggle(s.key, s.cssClass)}
                    className={cn(
                      'w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors text-start',
                      active[s.key]
                        ? 'bg-amber-100 text-amber-800'
                        : 'hover:bg-stone-100 text-stone-700'
                    )}
                  >
                    <span className="w-6 text-center font-bold text-xs shrink-0">{s.icon}</span>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={reset}
              className="mt-3 w-full rounded-xl border border-border px-3 py-1.5 text-xs text-stone-400 hover:text-stone-600 hover:bg-stone-50 transition-colors"
            >
              איפוס הגדרות
            </button>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="תפריט נגישות"
          aria-expanded={open}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-white shadow-lg hover:bg-stone-700 transition-colors"
          title="נגישות"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6c1.1 0 2.1.4 2.9 1L17 11l2-1 1 1.7-2.4 1.4-.6 4.1 2 4.8-1.8.7-1.9-4.5h-2.6l-1.9 4.5-1.8-.7 2-4.8-.6-4.1L7 11.7 8 10l2 1 2.1-2c.8-.6 1.8-1 2.9-1h-3z" />
          </svg>
        </button>

      </div>
    </>
  )
}
