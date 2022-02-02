import React from 'react'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`${className}`}>
      <h1 className="font-semibold text-3xl pt-10">React Sidebar App</h1>
    </header>
  )
}
