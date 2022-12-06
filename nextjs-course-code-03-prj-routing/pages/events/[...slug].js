import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

function FilteredEventsPage() {
  const [events, setEvents] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  console.log(router)
  const filterData = router.query.slug

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth
  console.log('run router')
  const fetchData = async () => {
    setIsLoading(true)
    const data = await getFilteredEvents({ year: numYear, month: numMonth })
    setEvents(data)
    setIsLoading(false)
  }
  useEffect(() => {
    console.log('run effect')
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className='center'>
        <h1>is Loading...</h1>
      </div>
    )
  }
  if (!events) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }
  const filteredEvents = events
  console.log(events)
  const date = new Date(numYear, numMonth - 1)
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
// export async function getServerSideProps(context) {
//   const { params } = context
//   const filterData = params.slug
//   const filteredYear = filterData[0]
//   const filteredMonth = filterData[1]

//   const numYear = +filteredYear
//   const numMonth = +filteredMonth

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//     }
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   })
//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   }
// }
