import { getFeaturedEvents } from '../../dummy-data'
import EventItem from './EventItem'
export default function EventList() {
  const eventsData = getFeaturedEvents()
  console.log(eventsData)
  return (
    <div>
      <ul>
        {eventsData.map((event) => (
          <EventItem event={event} />
        ))}
      </ul>
    </div>
  )
}
