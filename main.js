// Function automatically evaluate instructors
const NUMBER_OF_STARS = 5; // Number of stars to rate
const FEEDBACK_TEXT = "Tuyệt vời"; // Feedback text to rate

const tbodies = document.querySelectorAll("tbody");

tbodies.forEach((tbody) => {
  const radioButtons = tbody.querySelectorAll('input[type="radio"]');

  if (radioButtons.length >= NUMBER_OF_STARS) {
    radioButtons[NUMBER_OF_STARS - 1].click();
  }
});

const textarea = document.getElementById("20");
textarea.value = FEEDBACK_TEXT;

const inputEvent = new Event("input", {
  bubbles: true,
  cancelable: true,
});
textarea.dispatchEvent(inputEvent);

setTimeout(() => {
  const buttons = document.querySelectorAll("button.btn.btn-outline-primary");

  buttons.forEach((button) => {
    if (button.textContent.includes("Gửi")) {
      button.click();
    }
  });
}, 3000);
