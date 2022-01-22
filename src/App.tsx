import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list';

function App() {

  const [events, setEvents] = useState<Array<any>>([]);

  const handleDateClick = (arg: any) => {
    setEvents((prevState) => ([...prevState, { title: "hiyya", date: arg.dateStr }]))
    console.log('arg -> ', arg)
  }

  function renderEventContent(eventInfo: any) {
    console.log("event info -> ", eventInfo);
    eventInfo.backgroundColor = "grey";
    eventInfo.isDraggable = true;
    eventInfo.isDragging = true;
    return (
      <div className='date_box'>
        <button>{eventInfo.timeText}</button>
        <i>{eventInfo.event.title}</i>
      </div>
    )
  }

  const injectCellContent = (args: any) => {
    return (
      <div>
        <button>{args.dayNumberText}</button>
      </div>
    )
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        eventContent={renderEventContent}
        dayCellContent={injectCellContent}
        contentHeight={600}
        slotLabelContent={"asdfas"}
        aspectRatio={0.8}
      />
    </div>
  );
}

export default App;
