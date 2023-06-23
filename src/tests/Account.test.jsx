// When visiting the /accounts route,
// Expect the rendered content to include different things based on 
// whether or not the user is logged in or out.

// Import React testing methods that mock rendering a webpage
// This uses the customRender since the component we wanna test
// is a bit more complex and uses context data.
import {customRenderLoggedInUser, render, screen} from './customRender';

// Import a mock human that can do things like click around a virtual web page
import userEvent from '@testing-library/user-event';

// Import custom Jest matchers specific to React
import '@testing-library/jest-dom';

// Import the component to test
import Account from "../pages/Account";

// Start writing your tests
test("Displays a prompt to sign up or log in if no user is found.", async () => {
	// Arrange the page
	const {container} = render(<Account />);

	// If authData is falsey, expect:
	//		a div to be rendered with a classname "accountNotLoggedInPage"
	//		elements to be rendered with text "Create a new account" and "Log in to your existing account"
	let createAccountButton = screen.getByText("Create a new account");
	let loginButton = screen.getByText("Log in to your existing account");
	let foundHomeContainer = container.querySelectorAll(".accountNotLoggedInPage")[0];

	// Assert that the actions lead to expected results
	expect(createAccountButton).toBeTruthy();
	expect(loginButton).toBeTruthy();
	expect(foundHomeContainer.innerHTML).toBeTruthy();

});

// Start writing your tests
test("Displays a log-out button if the user is logged in.", async () => {
	// Arrange the page
	const {container} = customRenderLoggedInUser(<Account />);

	// Act like a human on the page
	// If authData exists, expect:
	// 		a button to be rendered containing text "Log out"
	//		a div to be rendered with a classname "accountPage"
	let seenContent = screen.getByText("Log out");
	let foundHomeContainer = container.querySelectorAll(".accountPage")[0];

	// Assert that the actions lead to expected results
	expect(seenContent).toBeTruthy();
	expect(foundHomeContainer.innerHTML).toBeTruthy();

});