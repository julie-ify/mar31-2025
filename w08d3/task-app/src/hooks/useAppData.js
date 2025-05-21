import { useEffect, useState } from 'react';
import axios from 'axios';

const useAppData = () => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		const res = await axios.get('/api/tasks');
		setTasks(res.data);
	};

	const addTask = async (title) => {
		const res = await axios.post('/api/tasks', { title });
		setTasks([...tasks, res.data]);
	};

	const deleteTask = async (id) => {
		await axios.delete(`/api/tasks/${id}`);
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleCompleted = async (task) => {
		const updated = { ...task, completed: !task.completed };
		await axios.put(`/api/tasks/${task.id}`, {
			completed: updated.completed,
		});

		setTasks(tasks.map((t) => (t.id === task.id ? updated : t)));
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return {
		tasks,
		deleteTask,
		addTask,
		toggleCompleted,
	};
};

export default useAppData;
