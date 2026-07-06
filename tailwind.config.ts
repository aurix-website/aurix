import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          active: 'var(--color-primary-active)',
          disabled: 'var(--color-primary-disabled)',
        },
        ink: 'var(--color-ink)',
        body: 'var(--color-body)',
        muted: {
          DEFAULT: 'var(--color-muted)',
          soft: 'var(--color-muted-soft)',
        },
        hairline: {
          DEFAULT: 'var(--color-hairline)',
          soft: 'var(--color-hairline-soft)',
        },
        canvas: 'var(--color-canvas)',
        surface: {
          soft: 'var(--color-surface-soft)',
          card: 'var(--color-surface-card)',
          strong: 'var(--color-surface-strong)',
          dark: 'var(--color-surface-dark)',
          'dark-elevated': 'var(--color-surface-dark-elevated)',
        },
        'on-primary': 'var(--color-on-primary)',
        'on-dark': {
          DEFAULT: 'var(--color-on-dark)',
          soft: 'var(--color-on-dark-soft)',
        },
        'brand-accent': 'var(--color-brand-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        badge: {
          orange: 'var(--color-badge-orange)',
          pink: 'var(--color-badge-pink)',
          violet: 'var(--color-badge-violet)',
          emerald: 'var(--color-badge-emerald)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-serif-xl': ['clamp(3.25rem, 7vw, 5.75rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-serif-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-serif-md': ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-xl': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.25rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.1rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'title-lg': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'title-md': ['1.125rem', { lineHeight: '1.4' }],
        'title-sm': ['1rem', { lineHeight: '1.4' }],
        'body-md': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        caption: ['0.8125rem', { lineHeight: '1.4' }],
        btn: ['0.875rem', { lineHeight: '1' }],
        nav: ['0.875rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        display: '600',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: '9999px',
        full: '9999px',
        DEFAULT: 'var(--radius-md)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      padding: {
        section: 'var(--section-padding-y)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.05)',
        'card-md': '0 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
