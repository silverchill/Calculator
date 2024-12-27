// Function to append text to the displayScreen
const appendToDisplayScreen = (displayScreen, text) => {
    displayScreen.textContent += text;
    calculateResult();
};

// Function to clear the displayScreen
const clearDisplayScreen = (displayScreen, displayScreen2) => {
    displayScreen.textContent = "";
    displayScreen2.textContent = "";
};

// Function to delete the last character from the displayScreen
const deleteLast = (displayScreen) => {
    displayScreen.textContent = displayScreen.textContent.slice(0, -1);
    calculateResult();
};

// Function to calculate the result of the expression
const calculateResult = () => {
    const displayScreen = document.getElementById("display1");
    const displayScreen2 = document.getElementById("display2");
    try {
        // Evaluate the mathematical expression in the displayScreen
        const result = eval(displayScreen.textContent);
        displayScreen2.textContent = result;
    } catch (error) {
        displayScreen2.textContent = ""; // Show error if the expression is invalid
    }
};

// Main logic inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const displayScreen = document.getElementById("display1");
    const displayScreen2 = document.getElementById("display2");

    const buttons = document.querySelectorAll(".btns");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const span = button.querySelector("span");
            const value = span ? span.textContent.trim() : "";

            if (value === "cls") {
                clearDisplayScreen(displayScreen, displayScreen2); // Clear displayScreen for "cls"
            } else if (value === "DEL") {
                deleteLast(displayScreen, displayScreen2); // Delete last character for "DEL"
            } else if (value === "=") {
                calculateResult(displayScreen, displayScreen2); // Calculate the result when "=" is clicked
            } else {
                appendToDisplayScreen(displayScreen, value); // Add the clicked value to the displayScreen
            }
        });
    });
});