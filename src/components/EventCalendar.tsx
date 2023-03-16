import React, {FC} from 'react';
import {Badge, Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "momnet";
import {formatDate} from "../utils/date";

interface EventCalendarProps{
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
    function dateCellRender(value: any) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
        return (
           <div>
               {currentDayEvents.map((ev,index) =>
                   <div key={index}>{ev.description}</div>
               )}
           </div>
        )
    }
    return (
        <div>
            <Calendar dateCellRender={dateCellRender}/>
        </div>
    );
};

export default EventCalendar;