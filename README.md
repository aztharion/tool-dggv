### README

---

## **Auto Evaluation Script for SGU**

This script allows users to automate the evaluation of instructors on the SGU platform.

---

### **Instructions**

1. **Access the Evaluation Page**  
   Open your web browser and navigate to:  
   [https://thongtindaotao.sgu.edu.vn/public/#/home/danhgia](https://thongtindaotao.sgu.edu.vn/public/#/home/danhgia)

2. **Select an Instructor**  
   - Log in with your credentials if prompted.
   - Choose an instructor from the list to evaluate.

3. **Open Developer Tools**  
   - Press `F12` or `Ctrl + Shift + I` (on Windows/Linux) or `Cmd + Option + I` (on macOS) to open the Developer Tools.
   - Navigate to the **Console** tab.

4. **Copy and Paste the Code**  
   - Copy the following code and paste it into the Console:

```javascript
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
```

5. **Run the Script**  
   - Press `Enter` to execute the script.
   - The script will automatically:
     - Select the maximum number of stars (5 stars).
     - Fill in the feedback text with "Tuyệt vời".
     - Submit the evaluation after 3 seconds.


---

### **Disclaimers (Terms of Use)**

1. **Educational Purpose Only**  
   This script is created solely for educational purposes to demonstrate automation in web environments. Any use of this script should comply with SGU's terms and conditions.

2. **User Responsibility**  
   - The user assumes full responsibility for any actions taken with this script.
   - The author of this script is not liable for any misuse, unauthorized access, or actions that violate SGU's policies.

3. **No Warranty**  
   The script is provided "as is," without warranty of any kind. The author does not guarantee its accuracy, functionality, or reliability.

4. **Respect Platform Rules**  
   By using this script, you agree to respect the rules and guidelines of the SGU platform. Misuse of this script may result in consequences.

---

### **Contact**  
For any issues or questions, please contact: [Your Contact Email]