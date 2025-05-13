import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Form from './components/Form';
import { useState } from 'react';

function App() {
	const [username, setUsername] = useState('');

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	return (
		<div>
			<Header username={username} />
			<Form username={username} handleChange={handleChange}/>
			<Counter />
		</div>
	);
}

export default App;
