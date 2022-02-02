import React from 'react'
import { Link } from 'react-router-dom'
import { PersonContext } from '../../Contexts/Person/PersonContext'
import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonNavItemProps {
  className?: string
  personInfo: PersonInfo
}

export const PersonNavItem: React.FC<PersonNavItemProps> = ({ className = '', personInfo }) => {
  const { setSelectedPerson } = React.useContext(PersonContext)
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)

  const selectPersonNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
    setSelectedPerson && setSelectedPerson(personInfo)
  }

  const showChildrens = isExpanded && personInfo.children.length > 0

  return (
    <div className={`${className} block bg-green-400 relative`}>
      <Link to="#" onClick={selectPersonNavItem} className="hover:text-gray-500">{personInfo.name}</Link>
      {personInfo.children.length > 0 && <span className="text-yellow-600 absolute right-2 cursor-pointer hover:text-lime-300 font-bold" onClick={() => setIsExpanded(!isExpanded)}>{!isExpanded ? <span>&#8910;</span> : <span>&#8911;</span>} </span>}
      {showChildrens && personInfo.children.map(person => (
        <PersonNavItem className="pl-4" key={`sidebar-nav-${person.id}`} personInfo={person}/>
      ))}
    </div>
  )
}
