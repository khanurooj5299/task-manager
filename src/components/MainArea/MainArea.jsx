import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Count from "../Count/Count";
import AddOrUpdateTask from "../AddOrUpdateTask/AddOrUpdateTask";
import TaskList from "../TaskList/TaskList";
import Card from "../Card/Card";

import { getTaskList } from "../../http";

export default function MainArea() {
  //this state maintains the current taskList
  const [taskList, setTaskList] = useState([]);
  //this state identifies whether AddOrUpdateTask component is being used in add or update mode.
  //If null then add mode, otherwise if some task(which is to be updated) present then update mode
  const [toUpdateTask, setToUpdateTask] = useState(null);
  //state to maintain current count for update and add api hits
  const [count, setCount] = useState({ addCount: 0, updateCount: 0 });

  //get the task list from backend
  useEffect(() => {
    getTaskList(setTaskList);
  }, []);

  return (
    <PanelGroup direction="vertical">
      <Panel>
        <PanelGroup direction="horizontal">
          <Panel>
            <Card title="Count">
              <Count count={count} />
            </Card>
          </Panel>
          <PanelResizeHandle />
          <Panel>
            <Card title={toUpdateTask != null ? "Update Task" : "Add Task"}>
              <AddOrUpdateTask
                toUpdateTask={toUpdateTask}
                setToUpdateTask={setToUpdateTask}
                setTaskList={setTaskList}
                setCount={setCount}
              />
            </Card>
          </Panel>
          <PanelResizeHandle />
        </PanelGroup>
      </Panel>
      <PanelResizeHandle />
      <Panel>
        <Card title="Task List">
          <TaskList setToUpdateTask={setToUpdateTask} taskList={taskList} />
        </Card>
      </Panel>
      <PanelResizeHandle />
    </PanelGroup>
  );
}
