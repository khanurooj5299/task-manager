export async function getTaskList() {
    const res = await fetch('http://localhost:3000/task/tasks');
    return await res.json();
}