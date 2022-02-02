import React from 'react'
import { Link } from 'react-router-dom'
import { PersonContext } from '../../Contexts/Person/PersonContext'
import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonNavItemProps {
  className?: string
  personInfo: PersonInfo
}

export const PersonNavItem: React.FC<PersonNavItemProps> = ({ className = '', personInfo }) => {
  const { setSelectedId } = React.useContext(PersonContext)

  const selectPersonNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
    setSelectedId && setSelectedId(personInfo.id)
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
