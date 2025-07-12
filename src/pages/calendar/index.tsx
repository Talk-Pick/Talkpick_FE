import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (<div>
    <Calendar 
  mode="single"
  selected={date}
    onSelect={setDate}
  className="shadow-lg w-full rounded-xl" /></div>);
};

export default CalendarPage;