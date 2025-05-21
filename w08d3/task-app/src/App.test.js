import {
	render,
	screen,
	waitFor,
	fireEvent,
	cleanup,
} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('App component', () => {
	test('should load and display mocked tasks from axios mock', async () => {
		render(<App />);

		expect(await screen.findByText('Play piano')).toBeInTheDocument();
		expect(await screen.findByText(/Attend classes/i)).toBeInTheDocument();
	});

	test('should add a new task and clear the input', async () => {
		render(<App />);
		const input = screen.getByPlaceholderText(/Add a new task/i);
		const button = screen.getByText(/Add Task/i);

		fireEvent.change(input, { target: { value: 'Buy milk' } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(screen.getByText('Buy milk')).toBeInTheDocument();
		});

		expect(input.value).toBe('');
	});

	test('deletes a task when delete button is clicked', async () => {
		render(<App />);

		expect(await screen.findByText(/Play piano/i)).toBeInTheDocument();

		const deleteButtons = await screen.findAllByRole('button', {
			name: /Delete/i,
		});

		fireEvent.click(deleteButtons[0]);

		await waitFor(() =>
			expect(screen.queryByText('Play piano')).not.toBeInTheDocument()
		);
	});

	test('should toggle completed state when checkbox is clicked', async () => {
		render(<App />);
		const checkbox = await screen.findAllByRole('checkbox');
		expect(checkbox[0].checked).toBe(false);

		fireEvent.click(checkbox[0]);

		// Wait for checkbox to be updated after async state change
		await waitFor(() => {
			expect(checkbox[0]).toBeChecked();
		});
	});
});
