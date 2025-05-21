const express = require('express');
const router = express.Router();
const {
	getTasks,
	addTask,
	deleteTask,
	updateCompleted,
} = require('../data/tasks');

router.get('/', (req, res) => {
	res.json(getTasks());
});

router.post('/', (req, res) => {
	const { title } = req.body;
	if (!title) return res.status(400).json({ error: 'Title is required' });
	const newTask = addTask(title);
	res.status(201).json(newTask);
});

router.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	const success = deleteTask(id);
	if (success) {
		res.status(204).end();
	} else {
		res.status(404).json({ error: 'Task not found' });
	}
});

router.put('/:id', (req, res) => {
	const id = Number(req.params.id);
	const { completed } = req.body;
	const task = updateCompleted(id, completed);
	if (!task) {
		res.status(404).json({ error: 'Task not found' });
	} else {
		res.json(task);
	}
});

module.exports = router;
