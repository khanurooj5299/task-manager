import "./TaskList.css";

export default function TaskList({ onUpdate, taskList }) {
  return (
    <>
      {taskList.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Headline</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr>
                <td>{task.title}</td>
                <td>{task.deadline}</td>
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
