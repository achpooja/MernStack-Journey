document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".calculator-screen"); // Updated to match the class used in the HTML
    const buttons = document.querySelectorAll(".calculator-keys button"); // Updated to match the button class used in the HTML
    
    let shouldResetDisplay=false;
    let lastInputWasOperator = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("value");
            
            if (value === "C") {
                // Clear the display
                display.value = "";
                shouldResetDisplay = false;
                lastInputWasOperator = false;
            } else if (value === "=") {
                // Calculate the result
                try {
                    display.value = eval(display.value); // Evaluate the expression
                    shouldResetDisplay = true;   
                    lastInputWasOperator = false;            
                } catch (error) {
                    display.value = "Error";
                }
            } else if (value==="Backspace"){
                display.value=display.value.slice(0,-1);
                lastInputWasOperator=false; 
            }

            else if (["/", "*", "+", "-","%"].includes(value)) {
                 // Handle operator input
                //   if (value === "-" || !lastInputWasOperator) {
                //      display.value += value;
                //       lastInputWasOperator = true; 
                //     }

                if (value === "-") {
                    if (!display.value || lastInputWasOperator) {
                        // Allow "-" at the beginning or after another operator
                        display.value += value;
                        lastInputWasOperator = true;
                        shouldResetDisplay = false;
                    } else if (!lastInputWasOperator) {
                        // Allow "-" after a valid digit
                        display.value += value;
                        lastInputWasOperator = true;
                        shouldResetDisplay = false;
                    }
                } else {
                    // Handle other operators (/, *, +, %)
                    if (display.value && !lastInputWasOperator) {
                        // Allow operator only if display is not empty and the last input was not an operator
                        display.value += value;
                        lastInputWasOperator = true;
                        shouldResetDisplay = false; // Prevent reset on operator input
                    }
                }
                }

             else {

                if (shouldResetDisplay) {
                     display.value = value; 
                    shouldResetDisplay = false; 
                } else {
                     display.value += value;
                     }

                 lastInputWasOperator = false;    
                
            }
        });
    });
});
