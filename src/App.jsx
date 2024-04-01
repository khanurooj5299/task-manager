import "./App.css";
import Count from "./components/Count";
import AddOrUpdateTask from "./components/AddOrUpdateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <Count />
        <AddOrUpdateTask />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
