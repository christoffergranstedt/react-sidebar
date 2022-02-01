import React from 'react'

import { useRequest } from '../../Hooks/useRequest'
import { PersonInfo } from '../../Interfaces/PersonInfo'
import { PageHeading } from '../../PageHeading/PageHeading'
import { SideBar } from '../../Components/SideBar/SideBar'
import { HTTPMethod } from '../../Constants/HTTPMethod'

export const HomePage: React.FC = () => {
  const { sendRequest } = useRequest()
  const [personItems, setPersonItems] = React.useState<PersonInfo[]>([])

  React.useEffect(() => {
    const getSideBarItems = async () => {
      if (!process.env.REACT_APP_API_URL) throw new Error('REACT_APP_API_URL needs to be provided as a environment variable')
      const data = await sendRequest<PersonInfo[]>({ url: process.env.REACT_APP_API_URL, method: HTTPMethod.Get })
      setPersonItems(data)
      console.log(data)
    }

    getSideBarItems()
  }, [])

  return (
    <>
      <SideBar className="w-96 bg-red-400 h-full" personItems={personItems}/>
      <section className="w-full text-center">
        <PageHeading title="Main"/>
        <p>To display clicked event</p>
      </section>
    </>
  )
}
