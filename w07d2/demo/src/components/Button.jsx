const Button = (props) => {
	return (
		<div>
			<button onClick={props.handleClick}>Increment</button>
			<p>Count from Button Component {props.count}</p>
		</div>
	);
};

export default Button;
