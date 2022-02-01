import React from 'react'
import { Link } from 'react-router-dom'
import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonNavItemProps {
  className?: string
  personInfo: PersonInfo
}

export const PersonNavItem: React.FC<PersonNavItemProps> = ({ className, personInfo }) => {
  return (
    <div className={`${className && className}`}>
      <Link to="#">{personInfo.name}</Link>
      {personInfo.children.length > 0 && personInfo.children.map(person => (
        <PersonNavItem key={`sidebar-nav-${person.id}`} personInfo={person}/>
      ))}
    </div>
  )
}
