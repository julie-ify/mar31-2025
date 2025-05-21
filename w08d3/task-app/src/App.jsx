import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import useAppData from './hooks/useAppData';

const App = () => {
	const {
		tasks,
		deleteTask,
		addTask,
		toggleCompleted,
	} = useAppData();

	return (
		<div className="App">
			<div className="container">
				<h1 data-testid="header" className="mb-20">Task Manager</h1>
				<AddTaskForm onAdd={addTask} />
				<TaskList
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleCompleted}
				/>
			</div>
		</div>
	);
};

export default App;
