import Layout from "../../components/Layout";
import EventsItem from "../../components/EventsItem";
import { API_URL } from "../../config";
export default function EventsPage({ events }) {
    return (
        <Layout>
            <h1>Events</h1>
            {
                events.length === 0 && <h3>No Events to Show</h3>
            }
            {
                events.map(evt => (
                    // <h3 key={evt.id}>{evt.name}</h3>
                    <EventsItem key={evt.id} evt={evt} />

                ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    return {
        props: { events },
        revalidate: 1,
    }
}
