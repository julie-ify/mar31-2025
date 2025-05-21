export const isValidTitle = (title) => {
	return title.trim().length > 0;
};

export const calculateCompletedTaks = (tasks) => {
	return tasks.filter((task) => task.completed === true).length;
};
