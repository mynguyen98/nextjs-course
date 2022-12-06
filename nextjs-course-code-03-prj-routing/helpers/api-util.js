export async function getAllEvents() {
  const data = await fetch(
    'https://nextjs-course-d2bf1-default-rtdb.firebaseio.com/events.json'
  )
    .then((response) => response.json())
    .then((data) => data)
  const events = []
  for (const key in data) {
    events.push(data[key])
  }
  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured)
}

// export function getAllEvents() {
//   return DUMMY_EVENTS
// }

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents()
  const { year, month } = dateFilter
  console.log(year, month)
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })
  console.log(filteredEvents)
  return filteredEvents
}

export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find((event) => event.id === id)
}
