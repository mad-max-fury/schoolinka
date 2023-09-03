import DatesLister from "./components/datesLister";
import TaskCard from "./components/taskCard";
import Welcome from "./components/welcome";

export default function App() {
  return (
    <main className="max-w-[1276px] py-4 mx-auto">
      <Welcome
        greeting="Good morning!"
        taskHighlight="You got some task to do."
        createTask={() => null}
      />
      <DatesLister
        month={"January 2023"}
        dates={[
          { day: "Mon", date: "1" },
          { day: "Tue", date: "2" },
          { day: "Wed", date: "3" },
          { day: "Thu", date: "4" },
          { day: "Fri", date: "5" },
          { day: "Sat", date: "6" },
          { day: "Sun", date: "7" },
        ]}
      />
      <TaskCard />
    </main>
  );
}
