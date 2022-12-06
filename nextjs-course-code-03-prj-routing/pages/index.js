// import { getFeaturedEvents } from '../dummy-data'
import Head from 'next/head'
import Link from 'next/link'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
import { useEffect, useState } from 'react'

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents()
  // const [data, setData] = useState()
  // const [isLoading, setIsLoading] = useState(false)

  // const fetchData = async () => {
  //   setIsLoading(true)
  //   await fetch(
  //     'https://nextjs-course-d2bf1-default-rtdb.firebaseio.com/events.json'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const dataSet = []
  //       for (const key in data) {
  //         dataSet.push(data[key])
  //       }
  //       setData(dataSet)
  //       setIsLoading(false)
  //     })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // if (isLoading || !data) {
  //   return (
  //     <div>
  //       <h1>DATA NOT AVAILABLE YET...</h1>
  //     </div>
  //   )
  // }
  return (
    <div>
      <Head>
        <title>nextjs app</title>
        <meta name='description' content='find alot of event' />
      </Head>
      <EventList items={props.events} />
    </div>
  )
}

export default HomePage

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}
