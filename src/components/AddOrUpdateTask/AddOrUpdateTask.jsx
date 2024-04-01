import { addTask, updateTask } from "../../http";
import { getDateString } from "../../utilities";
import "./AddOrUpdateTask.css";

export default function AddOrUpdateTask({ updateId, setUpdateId, setTaskList }) {
  const isUpdate = updateId != null;

  async function handleClick() {
    try {
      const title = document.getElementById("task-title").value;
      const deadline = document.getElementById("task-deadline").value;
      let res;
      if (isUpdate) {
        res = await updateTask({ title, deadline, updateId });
        //if it was update operation reset the UI to add
        setUpdateId(null);
      } else {
        res = await addTask({ title, deadline });
        //if task was succesfully added the api returns the newly created task
        //change tasklist state to reflect newly added task
        setTaskList((prevTaskList) => {
          return [res, ...prevTaskList];
        });
      }
      //finally reset the form
      document.getElementById('add-update-form').reset();
    } catch (err) {
      //handle error
    }
  }
  return (
    <>
    <form id="add-update-form">
      <div className="mb-3">
        <label className="form-label">Task Title</label>
        <input type="text" className="form-control" id="task-title" />
      </div>
      <div className="mb-3">
        <label className="form-label">Task Deadline</label>
        <input
          type="date"
          className="form-control"
          min={getDateString(new Date())}
          id="task-deadline"
        />
      </div></form>
      <button className="btn btn-primary" onClick={handleClick} type="button">
        {isUpdate ? "Update" : "Add"}
      </button>
    </>
  );
}
