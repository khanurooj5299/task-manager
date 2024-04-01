import "./App.css";
import Count from "./components/Count";
import AddOrUpdateTask from "./components/AddOrUpdateTask/AddOrUpdateTask";
import TaskList from "./components/TaskList";
import { Card } from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-container d-flex flex-column">
        <div className="d-flex">
          <Card title="Count">
            <Count />
          </Card>
          <Card title="Add Task">
            <AddOrUpdateTask />
          </Card>
        </div>
        <div>
          <Card title="Task List">
            <TaskList />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
