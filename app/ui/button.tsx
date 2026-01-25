export function Button({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      className={`rounded bg-primary px-4 py-2 text-white hover:bg-interactive ${className}`}
    >
      {children}
    </button>
  )
}
