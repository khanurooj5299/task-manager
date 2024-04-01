import { getDateString } from "../../utilities";
import "./TaskList.css";

export default function TaskList({ setToUpdateTask, taskList }) {
  return (
    <>
      {taskList.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Deadline</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{getDateString(new Date(task.deadline))}</td>
                <td><button onClick={()=>{setToUpdateTask(task)}} className="btn btn-primary">Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!taskList.length && (
        <div className="text-center">No tasks added yet.</div>
      )}
    </>
  );
}
