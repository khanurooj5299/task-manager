import "./App.css";
import Count from "./components/Count";
import AddOrUpdateTask from "./components/AddOrUpdateTask/AddOrUpdateTask";
import TaskList from "./components/TaskList/TaskList";
import { Card } from "./components/Card/Card";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { getTaskList } from "./http";

function App() {
  //this state maintains the current taskList
  const [taskList, setTaskList] = useState([]);
  //this state identifies whether AddOrUpdateTask component is being used in add or update mode. 
  //If null then add mode, otherwise if some id present then update mode
  const [updateId, setUpdateId] = useState(null);

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
            <Count />
          </Card>
          <Card title={updateId!=null?'Update Task':'Add Task'}>
            <AddOrUpdateTask updateId={updateId} setTaskList={setTaskList}/>
          </Card>
        </div>
        <div>
          <Card title="Task List">
            <TaskList setUpdateId={setUpdateId} taskList={taskList}/>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
