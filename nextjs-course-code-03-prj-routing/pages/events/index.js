import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'

function AllEventsPage(props) {
  const router = useRouter()
  // const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  )
}
export default AllEventsPage

export async function getStaticProps() {
  const events = await getAllEvents()
  return {
    props: { events: events },
  }
}
