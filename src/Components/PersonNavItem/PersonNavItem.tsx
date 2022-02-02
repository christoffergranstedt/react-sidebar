import React from 'react'
import { Link } from 'react-router-dom'
import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonNavItemProps {
  className?: string
  personInfo: PersonInfo
}

export const PersonNavItem: React.FC<PersonNavItemProps> = ({ className = '', personInfo }) => {
  const selectPersonNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <div className={`${className}`}>
      <Link to="#" onClick={selectPersonNavItem}>{personInfo.name}</Link>
      {personInfo.children.length > 0 && personInfo.children.map(person => (
        <PersonNavItem key={`sidebar-nav-${person.id}`} personInfo={person}/>
      ))}
    </div>
  )
}
