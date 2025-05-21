let tasks = [
	{ id: 1, title: 'Buy groceries', completed: false },
	{ id: 2, title: 'Wash the car', completed: false },
	{ id: 3, title: 'Read a book', completed: false },
	{ id: 4, title: 'Walk the dog', completed: false },
	{ id: 5, title: 'Learn React state', completed: false },
	{ id: 6, title: 'Solve coding challenge', completed: false },
];

const getTasks = () => tasks;

const addTask = (title) => {
	const newTask = { id: 7, title, completed: false };
	tasks.push(newTask);
	return newTask;
};

const deleteTask = (id) => {
	const index = tasks.findIndex((t) => t.id === id);
	if (index !== -1) {
		tasks.splice(index, 1);
		return true;
	}
	return false;
};

const updateCompleted = (id, completed) => {
	const task = getTasks().find((t) => t.id === id);
	if (task) {
		task.completed = completed;
		return task;
	} else {
		return null;
	}
};

module.exports = {
	getTasks,
	addTask,
	deleteTask,
	updateCompleted,
};
