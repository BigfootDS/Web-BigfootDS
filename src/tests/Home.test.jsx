// When visiting the root route,
// Expect the rendered content to include the word "Welcome!" as per
// the contents of Home.jsx

// Import React testing methods that mock rendering a webpage
import {render, screen} from '@testing-library/react';

// Import a mock human that can do things like click around a virtual web page
import userEvent from '@testing-library/user-event';

// Import custom Jest matchers specific to React
import '@testing-library/jest-dom';

// Import the component to test
import Home from "../pages/Home";

// Because this project uses localisation, we must import the instance for that too
import "../i18n";

// Start writing your tests
test("Displays a welcome message on the homepage", async () => {
	// Arrange the page
	const {container} = render(<Home />);

	// Act like a human on the page
	let seenContent = screen.getByText("Welcome!");
	let foundHomeContainer = container.querySelectorAll(".homeContainer")[0];

	// Assert that the actions lead to expected results
	expect(seenContent).toBeTruthy();
	expect(foundHomeContainer.innerHTML).toContain("Welcome!");
});