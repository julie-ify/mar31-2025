import { fireEvent, render, screen } from '@testing-library/react';
import AddTaskForm from '../AddTaskForm';

describe('Add task form', () => {
	test('should render the add task form', () => {
		// arrange
		render(<AddTaskForm />);
		const input = screen.getByTestId('new task');
		const button = screen.getByRole('button', { name: 'Add Task' });

		// assert
		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	test('should not submit the form when there is no title', () => {
		// jest mock
		const onAddMock = jest.fn();

		// arrange
		const { getByTestId, getByRole } = render(
			<AddTaskForm onAdd={onAddMock} />
		);
		const input = getByTestId('new task');
		const button = getByRole('button', { name: 'Add Task' });

		expect(input.value).toBe('');

		// act
		fireEvent.click(button);

		// assert
		expect(onAddMock).not.toHaveBeenCalled();
	});
});
