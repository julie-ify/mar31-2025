import { useState } from 'react';
import Button from './Button';

const Counter = () => {
	// The convention is to name this pair like const [something, setSomething]. 
	// You could name it anything you like, but conventions make things easier to understand across projects.
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		// Calling the set function does not change the current state in the already executing code
		// It only affects what useState will return starting from the next render.
		console.log('count', count + 1);
	};

	return (
		<div>
			<h1>Counter: {count}</h1>
			<Button handleClick={handleClick} count={count}/>
		</div>
	);
};

export default Counter;
