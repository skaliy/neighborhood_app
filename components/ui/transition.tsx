"use client"

import React from 'react'

interface TransitionProps {
  show: boolean
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  duration?: number
  className?: string
}

export function Transition({
  show,
  children,
  className = '',
}: TransitionProps) {
  // Simply render or don't render based on show prop
  if (!show) {
    return null
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
} 