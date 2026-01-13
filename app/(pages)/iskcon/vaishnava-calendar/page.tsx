'use client';

import useCalendarApi from '@/app/hooks/useCalendarApi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import VaishnavaCalendar, {
  VaishnavEvent,
} from '@/components/vaishnava-calendar';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar as CalendarIcon, Info } from 'lucide-react';

const VaishnavaCalendarPage = () => {
  const [events, setEvents] = useState<VaishnavEvent[]>([]);
  const { fetchCalendarEventsByMonthAndYear } = useCalendarApi();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<VaishnavEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleMonthChange = async (month: number, year: number) => {
    setIsLoading(true);
    setEvents([]);
    try {
      const payload = JSON.stringify({ month, year });
      const response = await fetchCalendarEventsByMonthAndYear(payload);

      if (response) {
        setEvents(response.events || []);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateClick = (events: VaishnavEvent[]) => {
    if (events.length > 0) {
      setSelectedEvents(events);
      setShowDialog(true);
    }
  };

  const selectedDate = selectedEvents[0]?.start;
  const formattedSelectedDate = selectedDate 
    ? new Date(selectedDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) setSelectedEvents([]);
    setShowDialog(open);
  };

  return (
    <main className="bg-cream-50 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/rath-yatra-1.jpg"
          fill
          className="object-cover object-center"
          alt="Vaishnava Calendar"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/50 to-transparent dark:from-black/90 dark:via-black/50" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cream-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Vaishnava <span className="text-gold-300">Calendar</span>
            </h1>
            <p className="text-cream-100 max-w-2xl mt-2 text-lg md:text-xl font-light">
              Important dates, festivals, and Ekadasi timings for your spiritual practice.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-cream-200 dark:border-zinc-800">
          <div className="p-4 md:p-6 bg-saffron-50 dark:bg-maroon-950/30 border-b border-cream-200 dark:border-zinc-800 flex items-start gap-4">
             <Info className="w-5 h-5 text-saffron-600 dark:text-saffron-400 mt-0.5 flex-shrink-0" />
             <p className="text-sm text-maroon-700 dark:text-zinc-300">
               Click on any date to view detailed festival information. Ekadasi days are highlighted in orange.
             </p>
          </div>
          
          <div className="p-4 md:p-8 min-h-[600px] relative">
            <VaishnavaCalendar
              events={events}
              onChangeMonth={handleMonthChange}
              onDateClick={handleDateClick}
            />
            
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-saffron-200 border-t-saffron-600 rounded-full animate-spin mb-4" />
                  <p className="text-maroon-800 dark:text-saffron-300 font-medium">Loading Calendar...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="max-w-md w-[90%] rounded-2xl p-0 overflow-hidden bg-white dark:bg-zinc-900 border-cream-200 dark:border-zinc-800">
          <DialogHeader className="bg-gradient-to-r from-saffron-500 to-gold-500 p-6 text-white">
            <div className="flex items-center gap-2 mb-1 opacity-90">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Festival Day</span>
            </div>
            <DialogTitle className="text-2xl font-heading text-white font-bold">
              {formattedSelectedDate}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <ul className="space-y-4">
              {selectedEvents.map((event, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                   <div className="w-2 h-2 mt-2 rounded-full bg-saffron-500 flex-shrink-0" />
                   <div>
                     <p className="text-lg font-medium text-maroon-800 dark:text-zinc-100 leading-snug">
                       {event.title}
                     </p>
                     {event.fasttype && event.fasttype !== 0 && (
                        <span className="inline-block mt-2 px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 text-xs font-semibold rounded-full">
                          Fasting Required
                        </span>
                     )}
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default VaishnavaCalendarPage;
