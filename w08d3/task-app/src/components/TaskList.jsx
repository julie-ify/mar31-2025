import { calculateCompletedTaks } from "../helpers/helpers";
const TaskList = ({ tasks, onDelete, onToggle }) => {
	return (
		<div>
			<span>Completed Task: {calculateCompletedTaks(tasks)}</span>
			<ul className="task-lists mb-20">
				{tasks.map((task) => (
					<li key={task.id} className="task-list ">
						<div className="d-flex">
							<div className="d-flex">
								<input
									type="checkbox"
									id="checkbox"
									className="mr-10"
									onChange={() => onToggle(task)}
									checked={task.completed}
								/>

								<h3 className={task.completed ? 'stroke' : ''}>{task.title}</h3>
							</div>

							<button
								onClick={() => onDelete(task.id)}
								className="btn delete-btn"
							>
								Delete
							</button>
						</div>
						<hr className="hr" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
