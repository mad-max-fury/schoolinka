import Welcome from "./components/welcome";

export default function App() {
  return (
    <main className="max-w-[1276px] py-4 mx-auto">
      <Welcome
        greeting="Good morning!"
        taskHighlight="You got some task to do."
        createTask={() => null}
      />
    </main>
  );
}
