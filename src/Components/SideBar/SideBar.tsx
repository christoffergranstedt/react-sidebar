import React from 'react'
import { usePersonContext } from '../../Contexts/Person/PersonContext'
import { PersonNavItem } from '../PersonNavItem/PersonNavItem'

interface SideBarProps {
  className?: string
}

export const SideBar: React.FC<SideBarProps> = ({ className = '' }) => {
  const { persons } = usePersonContext()

  return (
    <nav className={`${className} px-2 text-lg text-gray-300 font-semibold`}>
      {persons.map(personInfo => (
        <div key={`sidebar-nav-${personInfo.id}`} className="bg-gray-800 rounded-md p-1">
          <PersonNavItem className="bg-gray-800" personInfo={personInfo}/>
        </div>
      ))}
    </nav>
  )
}
