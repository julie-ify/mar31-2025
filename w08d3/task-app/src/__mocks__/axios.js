const mockTasks = [
	{ id: 1, title: 'Play piano', completed: false },
	{ id: 2, title: 'Attend classes', completed: true },
	{ id: 3, title: 'Buy groceries', completed: false },
	{ id: 4, title: 'Wash the car', completed: false },
];

const axios = {
	get: (url) => {
		return Promise.resolve({
			data: mockTasks,
		});
	},

	post: (url, { title }) => {
		return Promise.resolve({
			data: { id: 5, title: title, completed: false },
		});
	},

	put: (url) =>
		Promise.resolve({
			status: 200,
		}),

	delete: () =>
		Promise.resolve({
			status: 204,
		}),
};

export default axios;
