import Layout from "../../dj-app-music/components/Layout";
import { API_URL } from "../config/index";
import EventsItem from "../components/EventsItem";
import Link from "next/link";
export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcomping Events</h1>
      {
        events.length === 0 && <h3>No Events to Show</h3>
      }
      {
        events.map(evt => (
          // <h3 key={evt.id}>{evt.name}</h3>
          <EventsItem key={evt.id} evt={evt} />
        ))}
      {
        events.length > 0 && (
          <Link href='/events'>
            <button className="btn-secondary"> Veiw All Events</button>
          </Link>
        )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  }
}
