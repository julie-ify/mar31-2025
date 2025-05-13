# What is React State?

## Todays's Menu:
- [x] React Component and Props Refresher
- [x] React State
- [x] Setting and Updating State
- [x] Differences between State and Props
- [x] Event Handling
- [x] Lifting State Up


## React Component
React components are independent, reusable pieces of UI code that return JSX elements.

Example of a functional component:

```jsx
// Header Component
const Header  = () => {
	return (
		<div>
			<h1>Hello John!</h1>
		</div>
	)
}

export default Header;
```

### Rules to follow when making a component;

- Use upper Camel case for file and function name
- File extension should be `.jsx `
- Component name should match file name
- Component should return JSX or null
- Component must return a single parent JSX element that encloses the children
- Export the component


## Props

props is short for properties. props are are a way to pass data from parent to child component, similar to function arguments.

They allow us to configure and customize components dynamically by providing values or functions as attributes.

When props changes, React re-renders the component to reflect updates.

Here's an example of how props can be used in React:


```jsx
// Parent component
const App = () => {
	return (
		<div>
			<Header username="Smith" />
		</div>
	);
}

// Child component
const Header = (props) => {
	return(
		<div>
			<h1>Hello {props.username}</h1>
		</div>
	)
}
```

This React code above defines two components: a parent (`App`) and a child (`Header`).

✅ What Happens:

- The `App` component renders a `Header` component.
- It passes a props to Header `username="Smith"`.
- The `Header` component receives the props object and displays the value

This demonstrates how props allow parent components to pass data to child components.


## React State

State is a core concept in React used to store dynamic data that can change over time and influence what’s rendered on the screen. It allows us to build dynamic and interactive components.

- State is typically used to manage local data within a component.
- State is local to each component instance.
- If you render the same component multiple times, each one gets its own isolated state.
- State is updated using a setter function

### useState Hook

Hooks are special functions that let you “hook into” React state and lifecycle features from functional components

Hooks make it easier to:

- Reuse logic across components
- Keep code concise and readable

The `useState` hook is the most commonly used hook and is used to create and manage state in functional components.

Example of React state:

```jsx
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};
```

- `count` is the current state value
- `setCount` is the setter function to update it. Each time we update count with setCount, this will trigger a rerender in our component. The rerender will fetch the new value of count and display it.
- `0` is the initial state value

### Rules of useSate Hook
- Call hooks at the top level of your component, not inside loops, conditions, or nested functions.
- Only call hooks in React function components or custom hooks
- State updates are asynchronous, so don’t rely on console.log immediately after calling a setter to show the updated value.
- When updating the state, we should never modify the state variable directly. Always use immutable update pattern

#### Summary: Props are for passing data from parent down to child component; state is for managing data that changes locally



### Lifting State Up
- When multiple components need to share or sync data, state should be lifted up.
- Move state to the closest common parent and pass data and callbacks via props.
- This keeps state management organized and components reusable

Useful link:

[React useState](https://react.dev/reference/react/useState)