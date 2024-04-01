const apiUrl = "http://localhost:3000";

export async function getTaskList(setTaskList) {
  try {
    const res = await fetch(`${apiUrl}/task/tasks`);
    if (res.ok) {
      const taskList = await res.json();
      setTaskList(taskList);
    } else {
      throw new Error(res.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function addTask(task) {
  try {
    const res = await fetch(`${apiUrl}/task/add-task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error(res.statusText);
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateTask(task) {
  try {
    const res = await fetch(`${apiUrl}/task/update-task/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error(res.statusText);
  } catch (err) {
    throw new Error(err);
  }
}
