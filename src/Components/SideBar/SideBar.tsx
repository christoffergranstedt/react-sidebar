import React from 'react'
import { Bars } from 'react-loader-spinner'
import { usePersonContext } from '../../Hooks/usePersonContext'
import { PersonNavItem } from '../PersonNavItem/PersonNavItem'

interface SideBarProps {
  className?: string
}

export const SideBar: React.FC<SideBarProps> = ({ className = '' }) => {
  const { persons, isLoading } = usePersonContext()

  return (
    <nav className={`${className} px-2 text-lg text-gray-300 font-semibold`}>
      {isLoading && <div className="flex justify-center"><Bars color="#CA8A04" height={40} width={40} /></div>}

      {persons.map(personInfo => (
        <div key={`sidebar-nav-${personInfo.id}`} className="bg-gray-800 rounded-md p-1">
          <PersonNavItem className="bg-gray-800" personInfo={personInfo}/>
        </div>
      ))}
    </nav>
  )
}
