import { isValidTitle, calculateCompletedTaks } from '../helpers';

describe('Valid title', () => {
	test('should return false when title is invalid', () => {
		const title = '';
		const result = isValidTitle(title);

		expect(result).toBeFalsy();
	});

	test('should return true when title is valid', () => {
		const title = 'Go to class';
		const result = isValidTitle(title);

		expect(result).toBeTruthy();
	});
});

describe('calculate completed tasks', () => {
	test('should return 0 when there are no tasks', () => {
		const tasks = [];
		const result = calculateCompletedTaks(tasks);

		expect(result).toBe(0);
	});

	test('should return 0 when there are no completed tasks', () => {
		const tasks = [
			{ id: 1, title: 'Buy groceries', completed: false },
			{ id: 2, title: 'Wash the car', completed: false },
			{ id: 3, title: 'Read a book', completed: false },
			{ id: 4, title: 'Walk the dog', completed: false },
		];
		const result = calculateCompletedTaks(tasks);

		expect(result).toBe(0);
	});

	test('should return the correct number of completed tasks', () => {
		const tasks = [
			{ id: 1, title: 'Buy groceries', completed: false },
			{ id: 2, title: 'Wash the car', completed: true },
			{ id: 3, title: 'Read a book', completed: false },
			{ id: 4, title: 'Walk the dog', completed: true },
		];

		const result = calculateCompletedTaks(tasks);

		expect(result).toBe(2);
	});
});
