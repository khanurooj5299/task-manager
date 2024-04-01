import { addTask, getTaskList, updateTask } from '../../http';
import { getDateString } from '../../utilities';
import './AddOrUpdateTask.css';

export default function AddOrUpdateTask({updateId, setTaskList}) {
  const isUpdate = updateId!=null;

  async function handleClick() {
    const title = document.getElementById('task-title').value;
    const deadline = document.getElementById('task-deadline').value;
    let res;
    if(isUpdate) {
      res = await updateTask({title, deadline, updateId});
    } else {
      res = await addTask({title, deadline});
      console.log(res)
      //if task was succesfully added the api returns the newly created task
      if(res && res.status==200) {
        setTaskList((prevTaskList)=>{
          return [res, ...prevTaskList];
        });
      }
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
        <input type="date" className="form-control" min={getDateString(new Date())} id="task-deadline"/>
      </div>
      <button className="btn btn-primary" onClick={handleClick} type='button'>{isUpdate?"Update":"Add"}</button>
    </>
  );
}
