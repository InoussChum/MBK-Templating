import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties, JSX } from 'react'

const BrandPlayground = ({
  primary,
  secondary,
  success,
  warning,
  error,
  text,
  radius,
  spacing,
  fontSize,
}: {
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
  text: string
  radius: number
  spacing: number
  fontSize: number
}) => {
  const cardStyle: CSSProperties = {
    borderRadius: radius,
    padding: spacing,
    fontSize,
    color: text,
    border: '1px solid #e2e8f0',
    background: '#ffffff',
  }

  const chip = (label: string, background: string): JSX.Element => (
    <span
      style={{
        display: 'inline-block',
        padding: '6px 12px',
        borderRadius: radius,
        background,
        color: '#fff',
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {label}
    </span>
  )

  return (
    <div style={{ width: 900, display: 'grid', gap: 16 }}>
      <section style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>Brand palette preview</h3>
        <div>
          {chip('primary', primary)}
          {chip('secondary', secondary)}
          {chip('success', success)}
          {chip('warning', warning)}
          {chip('error', error)}
        </div>
      </section>

      <section style={cardStyle}>
        <h3 style={{ marginTop: 0 }}>Scale preview</h3>
        <p>radius: {radius}px</p>
        <p>spacing: {spacing}px</p>
        <p>font size: {fontSize}px</p>
        <button
          style={{
            borderRadius: radius,
            padding: `${Math.max(6, spacing / 2)}px ${spacing}px`,
            background: primary,
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sample CTA
        </button>
      </section>
    </div>
  )
}

const meta: Meta<typeof BrandPlayground> = {
  title: 'Brand/Playground',
  component: BrandPlayground,
  args: {
    primary: '#2563EB',
    secondary: '#14B8A6',
    success: '#16A34A',
    warning: '#D97706',
    error: '#DC2626',
    text: '#0F172A',
    radius: 10,
    spacing: 16,
    fontSize: 14,
  },
  argTypes: {
    primary: { control: 'color' },
    secondary: { control: 'color' },
    success: { control: 'color' },
    warning: { control: 'color' },
    error: { control: 'color' },
    text: { control: 'color' },
    radius: { control: { type: 'number', min: 0, max: 40, step: 1 } },
    spacing: { control: { type: 'number', min: 4, max: 40, step: 1 } },
    fontSize: { control: { type: 'number', min: 10, max: 24, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
