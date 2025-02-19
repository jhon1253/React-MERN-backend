import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const {events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async( calendarEvent ) => {
        //tot backend
        //todo bibrn

        if(calendarEvent._id) {
            //actualizado
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {
            dispatch(onAddNewEvent( {...calendarEvent, _id: new Date().getTime() } ));
        }

    }

    const startDeleteEvent = () => {
        //todo llega al backend
        dispatch(onDeleteEvent())
    }

  return {
    //propiedades
    events, 
    activeEvent,
    hasEventSelected: !!activeEvent,
    //metodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  }
}
