import EventsSearch from '../../components/events/EventSearch'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-data'
import EventItem from '../../components/events/EventItem'
export default function EventPage() {
  const allEvents = getAllEvents()
  const router = useRouter()
  console.log(allEvents)
  function onSearch(year, month) {
    router.push(`events/${year}/${month}`)
  }
  return (
    <div>
      <EventsSearch onSearch={onSearch} />
      <ul>
        {allEvents.map((event) => (
          <EventItem event={event} />
        ))}
      </ul>
    </div>
  )
}
