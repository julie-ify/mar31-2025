## W08D3 - Unit & Integration Testing

### To Do
- [ ] Introduction to Testing in React
- [ ] Tools for Testing React App
- [ ] Add Features/Test to our App
- [ ] `prettyDOM()` and `debug()`
- [ ] Mocking AJAX Request and Functions
- [ ] Coverage Reports

### What is Testing?
Testing means checking if our code works the way we expect. In React apps, we write tests to make sure components show the right things and behave correctly.

#### Types of Testing:
- Static Test: 
	* It is used to test for typos and syntax errors (Eslint)

- Unit Test:
	* Used to test a specific function or component in isolation

- Integration Test:
	* Used to test the logic at the intersection of multiple components
	* Is the process of proving that two or more units of code work together
 
- End-to-End Test:
	* Used to simulate user interaction and provide the most confidence.
	* It is the most expensive way to test code.


#### Setup & Teardown
- Tests should represent how a user (or other code) would interact with our application
- It's important to properly setup the test conditions to isolate the piece of functionality under test
- Once the test has been executed, tear down all setup to leave no traces for the next test
- It's important to scope variables appropriately to make sure that there won't be leaks or interference with other tests
- `afterEach(cleanup)`, `beforeEach(clean)`;

#### Why Testing Matters:
- Helps prevent bugs.
- Makes refactoring safe.
- Gives confidence that the app works.

### Tools for Testing React App:
- [Jest](https://jestjs.io/)
	* Jest is the framework we use to run our tests => command line test runner
	* Jest expect() provide general JS assertions `toBe()`, `toHaveBeenCalled()`
	* Comes with `create-react-app`, so no need to configure
	* `npm run test` will start Jest in watch mode and run the tests

- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro/)
	* Provides functions for querying the DOM
	* The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
	* Built on top of DOM Testing Library.
	* It provides utilities specific to testing React components
	* Allows us to test like the way our app is used

- [JestDOM](https://github.com/testing-library/jest-dom)
	* JestDOM provides matchers that are useful for DOM testing
	* It adds custom matchers that make it easier to check for things in the browser-like UI. 
	* Checking for an element's attributes, its text content, its css classes. (like `.toBeInTheDocument()`, `.toHaveClass()` or `.toBeVissible()`)


### Add features/tests to our 90% completed app
- TDD: unit test
	* We will test the helper method isValidTitle
	* We will test the helper method calculateCompletedTasks

- TDD: integration test
	* We will test the AddTaskForm.jsx
	* We will test the TaskList.jsx

- Mocking
	* Test fetching tasks by mocking the axios library in the App.js


#### getBy, queryBy, and findBy
In React Testing Library, we use `query functions` to find elements on the screen during testing. These are grouped into 3 main families based on how they behave and when they should be used.

- `getBy` – Synchronous & Throws Error
	* It immediately looks for an element.
	* If the element is not found, the test fails immediately with an error
	* Use this when you expect the element to be present right away.

- `queryBy` – Synchronous & Returns null
	* It also looks for the element immediately.
	* If the element is not found, it returns null (instead of throwing an error) and test fails.
	* Useful when you expect an element not to be in the DOM.

- `findBy` – Asynchronous & Waits
	* It waits asynchronously for the element to appear.
	* Returns a Promise, and waits up to a default timeout (e.g., 1000ms).
	* If the element is not found after the delay, test fails with an error
	* Use this when an element appears after a delay (e.g., after an API call).


#### Test Coverage
- Test coverage is the practice of measuring how much of your code is covered by tests.
- `npm run test -- --coverage` runs Jest in coverage mode.
- Aim for 80% overall test coverage

#### Verbose mode
`npm run test -- --verbose` show more information about the test

#### Skipping Tests
- You can skip a test by using the `test.skip` function.
- You can skip a test suite by using the `describe.skip` function.

#### Useful Links
- [Jest ](https://jestjs.io/)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [Jest Matchers](https://jestjs.io/docs/expect)
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [React Testing Library Cheatsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet)
- [Testing Library Async Functions](https://testing-library.com/docs/dom-testing-library/api-async)


