import "./App.css";
import Count from "./components/Count";
import AddOrUpdateTask from "./components/AddOrUpdateTask/AddOrUpdateTask";
import TaskList from "./components/TaskList/TaskList";
import { Card } from "./components/Card/Card";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { getCount, getTaskList } from "./http";

function App() {
  //this state maintains the current taskList
  const [taskList, setTaskList] = useState([]);
  //this state identifies whether AddOrUpdateTask component is being used in add or update mode.
  //If null then add mode, otherwise if some task(which is to be updated) present then update mode
  const [toUpdateTask, setToUpdateTask] = useState(null);
  //state to maintain current count for update and add api hits
  const [count, setCount] = useState({addCount: 0, updateCount: 0});

  //get the task list from backend
  useEffect(() => {
    getTaskList(setTaskList);
  }, []);

  return (
    <>
      <Header />
      <div className="main-container d-flex flex-column">
        <div className="d-flex">
          <Card title="Count">
            <Count count={count}/>
          </Card>
          <Card title={toUpdateTask != null ? "Update Task" : "Add Task"}>
            <AddOrUpdateTask
              toUpdateTask={toUpdateTask}
              setToUpdateTask={setToUpdateTask}
              setTaskList={setTaskList}
              setCount={setCount}
            />
          </Card>
        </div>
        <div>
          <Card title="Task List">
            <TaskList setToUpdateTask={setToUpdateTask} taskList={taskList} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
