import { addTask, getTaskList, updateTask } from "../../http";
import { getDateString } from "../../utilities";
import "./AddOrUpdateTask.css";

export default function AddOrUpdateTask({
  toUpdateTask,
  setToUpdateTask,
  setTaskList,
}) {
  const isUpdate = toUpdateTask != null;
  const titleInput = document.getElementById("task-title");
  const deadlineInput = document.getElementById("task-deadline");
  //prepopulate form in case of update
  if(toUpdateTask) {
    titleInput.value = toUpdateTask.title;
    deadlineInput.value = getDateString(new Date(toUpdateTask.deadline));
  }

  async function handleUpdate() {
    try {
      //extract the latest input values
      const title = titleInput.value;
      const deadline = deadlineInput.value;
      let res;
      if (isUpdate) {
        res = await updateTask({ title, deadline, _id: toUpdateTask._id });
        //the request did succeed but no such document was found in DB
        if(res.status==404){
          throw new Error(res.message);
        }
        //if it was update operation reset the UI to add
        setToUpdateTask(null);
        //update the taskList
        getTaskList(setTaskList);
      } else {
        res = await addTask({ title, deadline });
        // if task was succesfully added the api returns the newly created task
        // change tasklist state to reflect newly added task
        setTaskList((prevTaskList) => {
          return [res, ...prevTaskList];
        });
      }
      //finally reset the form
      document.getElementById("add-update-form").reset();
    } catch (err) {
      //handle error
    }
  }

  function handleCancel() {
    setToUpdateTask(null);
    document.getElementById("add-update-form").reset();
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
        </div>
      </form>
      <button className="btn btn-primary me-2" onClick={handleUpdate} type="button">
        {isUpdate ? "Update" : "Add"}
      </button>
      {isUpdate && (
        <button className="btn btn-danger" onClick={handleCancel} type="button">
          Cancel
        </button>
      )}
    </>
  );
}
