import React from 'react'
import { PersonContext } from '../../Contexts/Person/PersonContext'
import { PersonNavItem } from '../PersonNavItem/PersonNavItem'

interface SideBarProps {
  className?: string
}

export const SideBar: React.FC<SideBarProps> = ({ className = '' }) => {
  const { persons } = React.useContext(PersonContext)

  return (
    <nav className={`${className} px-2 text-lg text-gray-300 font-semibold`}>
      {persons.map(personInfo => (
        <PersonNavItem key={`sidebar-nav-${personInfo.id}`} className="bg-gray-800" personInfo={personInfo}/>
      ))}
    </nav>
  )
}
