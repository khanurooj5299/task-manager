const apiUrl = "http://localhost:3000";

export async function getTaskList(setTaskList) {
  //credentials options is important as this is a cors request and for setting and recieving cookies from cors origin this option is important
  const res = await fetch(`${apiUrl}/task/tasks`, { credentials: "include" });
  if (res.ok) {
    const taskList = await res.json();
    setTaskList(taskList);
  } else {
    throw new Error(res.statusText);
  }
}

export async function addTask(task) {
  const res = await fetch(`${apiUrl}/task/add-task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
    credentials: "include",
  });
  if (res.ok) {
    return await res.json();
  }
  throw new Error(res.statusText);
}

export async function updateTask(task) {
  const res = await fetch(`${apiUrl}/task/update-task/${task._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
    credentials: "include",
  });
  if (res.ok) {
    return await res.json();
  }
  throw new Error(res.statusText);
}

export async function getCount(setCount) {
  const res = await fetch(`${apiUrl}/task/count`, { credentials: "include" });
  if (res.ok) {
    const count = await res.json();
    setCount(count);
  } else {
    throw new Error(res.statusText);
  }
}
