import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../TaskList';

const mockTasks = [
	{ id: 1, title: 'Buy groceries', completed: false },
	{ id: 2, title: 'Wash the car', completed: true },
	{ id: 3, title: 'Read a book', completed: false },
	{ id: 4, title: 'Walk the dog', completed: true },
];

describe('Task List component', () => {
	test('should render the correct tasks', () => {
		render(<TaskList tasks={mockTasks} />);
		const lists = screen.getAllByRole('listitem');

		expect(lists).toHaveLength(mockTasks.length);
		expect(screen.getByText('Buy groceries')).toBeInTheDocument();
	});

	test('should call onDelete when delete button is clicked', () => {
		const mockOnDelete = jest.fn();

		render(<TaskList tasks={mockTasks} onDelete={mockOnDelete} />);
		const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });

		fireEvent.click(deleteButtons[0]);

		expect(mockOnDelete).toHaveBeenCalledWith(1);
	});

	test('should call onToggle when checkbox is changed', () => {
		const mockOnToggle = jest.fn();

		render(<TaskList tasks={mockTasks} onToggle={mockOnToggle} />);
		const checkboxes = screen.getAllByRole('checkbox');

		fireEvent.click(checkboxes[0]);

		expect(mockOnToggle).toHaveBeenCalledWith(mockTasks[0]);
	});

	test('should test that checkbox is checked based on task completion', () => {
		render(<TaskList tasks={mockTasks} />);
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes[0].checked).toBe(false);
		expect(checkboxes[1].checked).toBe(true);
	});
});
