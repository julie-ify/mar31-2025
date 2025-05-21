import { useState } from 'react';
import { isValidTitle } from '../helpers/helpers';

function AddTaskForm({ onAdd }) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!isValidTitle(title)) return;

		onAdd(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} className="add-task-form mb-20">
			<input
				data-testid="new task"
				type="text"
				placeholder="Add a new task"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button type="submit" className="btn add-btn">
				Add Task
			</button>
		</form>
	);
}

export default AddTaskForm;
