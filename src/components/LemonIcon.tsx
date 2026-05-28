import React from 'react'

interface LemonIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
}

export const LemonIcon: React.FC<LemonIconProps> = ({
  size = 'md',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 80 100"
      className={`${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      {/* leaf */}
      <path d="M 44 14 C 55 4, 70 6, 72 16 C 64 22, 50 22, 44 14 Z" fill="#7fa31f" />
      <path
        d="M 44 14 C 52 12, 62 12, 70 16"
        stroke="#5d7c14"
        strokeWidth="0.8"
        fill="none"
      />
      {/* body */}
      <path
        d="M 40 14 C 18 16, 6 38, 10 62 C 14 84, 28 94, 40 94 C 52 94, 66 84, 70 62 C 74 38, 62 16, 40 14 Z"
        fill="#d5f723"
      />
      {/* highlight */}
      <ellipse cx="28" cy="40" rx="10" ry="16" fill="#eaff6a" opacity="0.7" />
      {/* nipples */}
      <path d="M 38 12 C 38 10, 42 10, 42 12 L 42 18 L 38 18 Z" fill="#d5f723" />
      <path d="M 36 90 C 36 96, 44 96, 44 90 Z" fill="#b8d020" />
    </svg>
  )
}
