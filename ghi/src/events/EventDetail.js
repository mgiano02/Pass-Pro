import { useSelector } from "react-redux";

function EventDetail() {
  const event = useSelector((state) => state.eventGrab.globalEvent);

  if (event == null) {
    return (
      <>
        <p>Something Went Wrong</p>-
      </>
    );
  }
  console.log(event);

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-4">
        <div className="flex flex-col items-center col-start-1 col-span-5 row-start-1 row-span-1">
          <img
            className="min-w-fit"
            src={event.event_image}
            alt={event.event_name}
          />
          <h1>{event.event_name}</h1>
        </div>
        <div className="flex col-start-1 col-span-3 row-start-2 row-span-2">
          <p>{event.description}</p>
        </div>
        <div className="flex flex-col col-start-4 col-span-2 row-start-2 row-span-2">
          <p>Add to Cart Widget</p>
          <p>{event.date}</p>
          <p>
            {event.start_time} to {event.end_time}
          </p>
        </div>
        <div className="flex items-center justify-center col-start-1 col-span-5 row-start-4 row-span-1">
          <p>list of like events</p>
        </div>
      </div>
    </>
  );
}
export default EventDetail;
