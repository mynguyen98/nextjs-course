import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'

import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'
export default function FilterEventPage() {
  const router = useRouter()
  const slug = router.query.slug
  const year = +slug[0]
  const month = +slug[1]
  const filterData = getFilteredEvents({ year, month })
  console.log(filterData)
  if (!filterData || filterData.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(year, month - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filterData} />
    </>
  )
}
