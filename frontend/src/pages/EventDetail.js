import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const params = useParams();

  return <EventItem event="" />;
}

export default EventDetailPage;
