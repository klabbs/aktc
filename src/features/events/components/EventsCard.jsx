
const EventsCard = ({ eventsData = {} }) => {
  const { name = "No Event Name", description = "No Description" } = eventsData;
  
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EventsCard;