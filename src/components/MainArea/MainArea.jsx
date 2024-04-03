import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Count from "../Count/Count";
import AddOrUpdateTask from "../AddOrUpdateTask/AddOrUpdateTask";
import TaskList from "../TaskList/TaskList";
import Card from "../Card/Card";

import { getCount, getTaskList } from "../../http";
import './MainArea.css';

export default function MainArea() {
  //this state maintains the current taskList
  const [taskList, setTaskList] = useState([]);
  //this state identifies whether AddOrUpdateTask component is being used in add or update mode.
  //If null then add mode, otherwise if some task(which is to be updated) present then update mode
  const [toUpdateTask, setToUpdateTask] = useState(null);
  //state to maintain current count for update and add api hits
  const [count, setCount] = useState(null);

  //get the task list from backend
  useEffect(() => {
    getTaskList(setTaskList);
    getCount(setCount);
  }, []);

  return (
    <>
    <PanelGroup direction="vertical" className="panel-group">
      <Panel className="Panel" defaultSize={50} minSize={10}>
        <PanelGroup direction="horizontal" className="panel-group">
          <Panel className="Panel" defaultSize={30} minSize={10}>
            <Card title="Count">
              {/* this component displayed the button click count for one session(until the browser is closed) */}
              <Count count={count} />
            </Card>
          </Panel>
          <PanelResizeHandle />
          <Panel className="Panel" defaultSize={70} minSize={10}>
            <Card title={toUpdateTask != null ? "Update Task" : "Add Task"}>
              <AddOrUpdateTask
                toUpdateTask={toUpdateTask}
                setToUpdateTask={setToUpdateTask}
                setTaskList={setTaskList}
                setCount={setCount}
              />
            </Card>
          </Panel>
        </PanelGroup>
      </Panel>
      <PanelResizeHandle />
      <Panel className="Panel" defaultSize={50} minSize={10}>
        <Card title="Task List">
          <TaskList setToUpdateTask={setToUpdateTask} taskList={taskList} />
        </Card>
      </Panel>
    </PanelGroup>
    </>
  );
}
