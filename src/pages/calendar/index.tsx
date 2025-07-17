import { Calendar } from "@/components/ui/calendar";
import ResultCard from "@/widgets/ResultCard";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (<div>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="shadow-lg w-full rounded-xl" />
    <div className="flex justify-end">
      <ResultCard
        percent={100}
        title="테스트"
        tag="테스트"
        liked={true}
        onLikeToggle={() => { }}
      />

    </div>
  </div>);
};

export default CalendarPage;