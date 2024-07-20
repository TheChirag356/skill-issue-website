import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';
import GoogleCalendar from './GoogleCalender';

function Upcoming() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay tuned for our upcoming CTF events and competitions. Join us as we continue our quest to become
                  the best in the world!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">CSAW CTF Qualification Round 2023</h3>
                  <p className="text-muted-foreground">
                    Join us as we compete in the qualification round of this prestigious CTF event. Show off your skills
                    and help us secure a spot in the finals!
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">October 1st, 2023</p>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">DefCon CTF Qualification Round 2024</h3>
                  <p className="text-muted-foreground">
                    We're gearing up for the DefCon CTF qualification round next year. Join our team and help us defend
                    our title as the champions!
                  </p>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">June 1st, 2024</p>
                  </div>
                </div>
              </div>
              <GoogleCalendar />
            </div>
          </div>
        </section>
    )
}

export default Upcoming
