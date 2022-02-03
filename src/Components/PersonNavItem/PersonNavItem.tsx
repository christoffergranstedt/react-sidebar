import React from 'react'
import { Link } from 'react-router-dom'
import { usePersonContext } from '../../Contexts/Person/PersonContext'
import { PersonInfo } from '../../Interfaces/PersonInfo'

interface PersonNavItemProps {
  className?: string
  personInfo: PersonInfo
}

export const PersonNavItem: React.FC<PersonNavItemProps> = ({ className = '', personInfo }) => {
  const { setSelectedPerson, selectedPerson } = usePersonContext()
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)

  const selectPersonNavItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
    setSelectedPerson && setSelectedPerson(personInfo)
  }

  const hasChildrens = personInfo.children.length > 0
  const shouldShowChildrens = isExpanded && hasChildrens

  return (
    <>
    <div className={`${className} ${selectedPerson?.id === personInfo.id && 'bg-gray-600'} rounded-md relative py-4 hover:bg-gray-600`}>
      <Link to="#" onClick={selectPersonNavItem} className="hover:text-gray-200 pl-2">{personInfo.name}</Link>
      {hasChildrens && <Link to="#" className="text-yellow-600 absolute right-2 cursor-pointer hover:text-yellow-400 font-bold inline-block" onClick={() => setIsExpanded(!isExpanded)}>{!isExpanded ? <span>&#8910;</span> : <span>&#8911;</span>} </Link>}
    </div>
      {shouldShowChildrens && personInfo.children.map(person => (
        <div key={`sidebar-nav-${person.id}`} className="pl-4">
          <PersonNavItem className="my-1" personInfo={person}/>
        </div>
      ))}
    </>
  )
}
