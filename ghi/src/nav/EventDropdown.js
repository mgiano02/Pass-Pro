import { NavLink } from "react-router-dom";
import { useState } from "react";

function EventDropdown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="relative block text-2xl font-semibold hover:text-red-500"
        id="my-content-button"
      >
        Events
      </button>
      {open ? (
        <button
          onClick={handleOpen}
          className="fixed inset-0 h-full w-full cursor-default"
        ></button>
      ) : null}
      {open ? (
        <div className="absolute top-auto w-48 mt-2 py-2 bg-white rounded-lg shadow-xl">
          <NavLink
            onClick={handleOpen}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-lg"
            to="/events/list"
          >
            Events List
          </NavLink>
          <NavLink
            onClick={handleOpen}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-lg"
            to="/events"
          >
            Event Manager
          </NavLink>
          <NavLink
            onClick={handleOpen}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white hover:rounded-lg"
            to="/events/form"
            state={null}
          >
            New Event
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}
export default EventDropdown;
