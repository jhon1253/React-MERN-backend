import { Navbar } from "../componenets/Navbar";
import { Calendar } from "react-big-calendar";
import { addHours} from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from "../../helpers/calendarLocalizer";
import { getMessagesES } from "../../helpers/getMessages";
import { CalendarEvent } from "../componenets/CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "../componenets/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabAddNew } from "../componenets/FabAddNew";
import { FabDelete } from "../componenets/FabDelete";


export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = ( event, start, end, isSelected ) => {

      const style = {
        backgroundColor: '#347CF7',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white'
      }

      
      
      return {
        style
      }
    }
    
    const onDoubleClick = ( event ) => {
      // console.log({doubleClick: event})
      openDateModal()
    }

    const onSelect = ( event ) => {
      // console.log({click: event})
      setActiveEvent(event)
    }

    const onViewChanged = ( event ) => {
      localStorage.setItem('lastView', event);
      setLastView( event )
    }

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        defaultView={lastView}
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={onViewChanged}
      />
      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    </>
  );
};
