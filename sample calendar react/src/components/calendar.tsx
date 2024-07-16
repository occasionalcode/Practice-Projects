import React, { ChangeEvent, useState } from "react";
import { Calendar, momentLocalizer, SlotInfo, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const localizer = momentLocalizer(moment);

interface CustomEvent extends Event {
  start: Date;
  end: Date;
  headerColor: string;
  description: string;
}

const CalendarScheduler: React.FC = () => {
  const [events, setEvents] = useState<CustomEvent[]>([
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(moment().add(1, "hour").toDate()),
      headerColor: "red",
      description: "Description of the meeting",
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    headerColor: "red",
    description: "",
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);
    setEvents([
      ...events,
      {
        title: newEvent.title,
        start,
        end,
        headerColor: newEvent.headerColor,
        description: newEvent.description,
      },
    ]);
    setModalIsOpen(false);
  };

  const handleSelectSlot = ({ start, end }: SlotInfo) => {
    const title = window.prompt("New Event name");
    if (title) {
      const headerColor = window.prompt("Header color (red, blue, green)");
      const description = window.prompt("Event description");
      setEvents([
        ...events,
        {
          start,
          end,
          title,
          headerColor: headerColor || "red",
          description: description || "",
        },
      ]);
    }
  };

  const dayPropGetter = (date: Date) => {
    const firstDayOfMonth = moment(date).startOf("month").toDate();
    if (moment(date).isSame(firstDayOfMonth, "day")) {
      return {
        className: "red-background",
      };
    }
    return {};
  };

  return (
    <div className="h-full p-4">
      <button
        onClick={handleOpenModal}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Create Event
      </button>
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          dayPropGetter={dayPropGetter} // Add dayPropGetter here
          style={{ height: 500 }}
          components={{
            event: EventComponent, // Custom event component
          }}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Start Time:
            <input
              type="datetime-local"
              name="start"
              value={newEvent.start}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            End Time:
            <input
              type="datetime-local"
              name="end"
              value={newEvent.end}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Header Color:
            <select
              name="headerColor"
              value={newEvent.headerColor}
              onChange={handleChange}
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Create Event</button>
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

const EventComponent: React.FC<{ event: CustomEvent }> = ({ event }) => {
  return (
    <div style={{ backgroundColor: event.headerColor, padding: 10 }}>
      <strong>{event.title}</strong>
      <p>{event.description}</p>
      <p>{`Start: ${event.start.toLocaleString()}`}</p>
      <p>{`End: ${event.end.toLocaleString()}`}</p>
    </div>
  );
};

export default CalendarScheduler;
