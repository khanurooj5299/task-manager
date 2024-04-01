import { addTask, getTaskList, updateTask } from '../http';
import './AddOrUpdateTask.css';

function getToday() {
  const date = new Date();
  // Get year, month, and day
  const year = date.getFullYear();
  // Add 1 to the month because getMonth() returns 0-based index (0 for January, 1 for February, etc.)
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  // Construct the yyyy-mm-dd format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
export default function AddOrUpdateTask({updateId, setTaskList}) {
  const isUpdate = updateId!=null;

  async function handleClick() {
    const title = document.getElementById('task-title').value;
    const deadline = document.getElementById('task-deadline').value;
    let res;
    if(isUpdate) {
      res = await updateTask({title, deadline});
    } else {
      res = await addTask({title, deadline, updateId});
    }
    if(res.status==200) {
      getTaskList(setTaskList);
    }
  }
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Task Title</label>
        <input type="text" className="form-control" id="task-title"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Task Deadline</label>
        <input type="date" className="form-control" min={getToday()} id="task-deadline"/>
      </div>
      <button className="btn btn-primary" onClick={handleClick} type='button'>{isUpdate?"Update":"Add"}</button>
    </>
  );
}
