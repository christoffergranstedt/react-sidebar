import React from 'react'
import { PersonInfo } from '../../Interfaces/PersonInfo'
import { PersonNavItem } from '../PersonNavItem/PersonNavItem'

interface SideBarProps {
  className?: string
  personItems: PersonInfo[]
}

export const SideBar: React.FC<SideBarProps> = ({ className, personItems }) => {
  return (
    <nav className={`${className && className}`}>
      {personItems.map(personInfo => (
        <PersonNavItem key={`sidebar-nav-${personInfo.id}`} personInfo={personInfo}/>
      ))}
    </nav>
  )
}
