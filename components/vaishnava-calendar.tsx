'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

import { EventSourceInput } from '@fullcalendar/core/index.js';
import IskconLogoIcon from './icons/iskcon-logo-icon';

export interface VaishnavEvent {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
  text?: string;
  prio?: number;
  dispItem?: number;
  fasttype?: number;
  fastsubject?: string;
  spec?: string;
  isEkadasi?: boolean;
}

type Props = {
  events: VaishnavEvent[];
  onChangeMonth?: (month: number, year: number) => void;
  onDateClick?: (events: VaishnavEvent[]) => void;
};

const VaishnavaCalendar: React.FC<Props> = ({
  events,
  onChangeMonth,
  onDateClick,
}) => {
  const handleDateClick = (arg: DateClickArg) => {
    const clickedEvents = events?.filter((event) => {
      return event.start === arg.dateStr;
    });
    onDateClick && onDateClick(clickedEvents);
  };
  return (
    <div className="relative calendar-wrapper">
      <style jsx global>{`
        .fc {
          --fc-border-color: #e5e7eb;
          --fc-button-text-color: #7f1d1d;
          --fc-button-bg-color: transparent;
          --fc-button-border-color: #fed7aa;
          --fc-button-hover-bg-color: #fff7ed;
          --fc-button-hover-border-color: #f97316;
          --fc-button-active-bg-color: #fdba74;
          --fc-button-active-border-color: #f97316;
          --fc-today-bg-color: #fff7ed;
          --fc-page-bg-color: #ffffff;
          --fc-neutral-bg-color: #f9fafb;
          --fc-list-event-hover-bg-color: #f3f4f6;
          --fc-event-bg-color: #7c3aed;
          font-family: var(--font-sans);
        }
        .dark .fc {
           --fc-border-color: #27272a;
           --fc-button-text-color: #fb923c;
           --fc-button-border-color: #3f3f46;
           --fc-button-hover-bg-color: #18181b;
           --fc-button-hover-border-color: #f97316;
           --fc-button-active-bg-color: #3f3f46;
           --fc-today-bg-color: #451a03;
           --fc-page-bg-color: #09090b;
           --fc-neutral-bg-color: #18181b;
           --fc-list-event-hover-bg-color: #27272a;
        }
        .fc .fc-toolbar-title {
          font-family: var(--font-heading);
          font-weight: 700;
          color: #7f1d1d;
        }
        .dark .fc .fc-toolbar-title {
          color: #fb923c;
        }
        .fc-theme-standard td, .fc-theme-standard th {
          border-color: var(--fc-border-color);
        }
        .fc-daygrid-day-number {
          color: #4b5563;
          font-weight: 500;
        }
        .dark .fc-daygrid-day-number {
           color: #a1a1aa;
        }
        .fc-col-header-cell-cushion {
          color: #7f1d1d;
          font-weight: 600;
          padding: 8px 0;
        }
        .dark .fc-col-header-cell-cushion {
          color: #fdba74;
        }
        .fc-event {
          cursor: pointer;
          background-color: #fef3c7;
          border: none;
          border-left: 3px solid #f59e0b;
          color: #78350f;
          padding: 2px 4px;
          border-radius: 2px;
          margin-bottom: 2px;
          transition: all 0.2s;
        }
        .dark .fc-event {
           background-color: #422006;
           border-left-color: #f97316;
           color: #fdba74;
        }
        .fc-event:hover {
          background-color: #fde68a;
          transform: translateY(-1px);
        }
        .dark .fc-event:hover {
           background-color: #5c2b0b;
        }
        .ekadasi {
           background-color: #ffedd5 !important;
           border-left-color: #ea580c !important;
        }
        .dark .ekadasi {
           background-color: #7c2d12 !important;
           border-left-color: #fb923c !important;
        }
        .fc-button {
           border-radius: 0.5rem !important;
           text-transform: capitalize;
           font-weight: 500;
           transition: all 0.2s;
        }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events as EventSourceInput}
        nowIndicator={true}
        height={'auto'}
        contentHeight={800}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
        eventClassNames={(arg) => {
          return arg.event.title.toLowerCase().includes('ekadasi')
            ? ['ekadasi']
            : [''];
        }}
        datesSet={(arg) => {
          const currentMonth = arg.view.currentStart.getMonth() + 1;
          const currentYear = arg.view.currentStart.getFullYear();
          onChangeMonth && onChangeMonth(currentMonth, currentYear);
        }}
        eventClick={(arg) => {
          const clickedDate = arg.event.startStr;
          const clickedEvents = events.filter((event) => {
            return event.start === clickedDate;
          });

          onDateClick && onDateClick(clickedEvents);
        }}
      />
    </div>
  );
};

export default VaishnavaCalendar;
