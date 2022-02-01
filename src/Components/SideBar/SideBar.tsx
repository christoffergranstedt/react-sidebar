import React from 'react'

interface SideBarProps {
  className?: string
}

export const SideBar: React.FC<SideBarProps> = ({ className }) => {
  return (
    <nav className={`${className && className}`}>
    </nav>
  )
}
