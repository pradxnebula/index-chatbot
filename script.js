// document.addEventListener("DOMContentLoaded", function () {
//     const chatlogs = document.getElementById("chatlogs");
//     const userInput = document.getElementById("userInput");
//     const sendBtn = document.getElementById("sendBtn");

//     function showMessage(message, isUser) {
//         const messageDiv = document.createElement("div");
//         messageDiv.textContent = message;

//         if (isUser) {
//             messageDiv.classList.add("user-message");
//         } else {
//             messageDiv.classList.add("bot-message");
//         }

//         chatlogs.appendChild(messageDiv);
//     }

//     function handleUserInput() {
//         const userMessage = userInput.value.toLowerCase();
//         userInput.value = "";

//         showMessage(userMessage, true);

//         switch (userMessage) {
//             case "college":
//                 showMessage("Which course do you want notes for? (cs, economics, maths)", false);
//                 break;
//             case "cs":
//             case "economics":
//             case "maths":
//                 showMessage("Which semester do you want notes for? (1, 2, 3, 4)", false);
//                 break;
//             case "1":
//             case "2":
//             case "3":
//             case "4":
//                 showMessage("Here are some sample links for your selected subject and semester.", false);
//                 break;
//             case "school":
//                 showMessage("Which class do you want notes for? (11 or 12)", false);
//                 break;
//             case "11":
//             case "12":
//                 showMessage("Here are some sample links for your selected class.", false);
//                 break;
//             default:
//                 showMessage("I didn't quite understand your response. Please try again.", false);
//         }
//     }

//     sendBtn.addEventListener("click", handleUserInput);

//     showMessage("Welcome to the Study Material Chatbot! Type 'college' for college notes or 'school' for school notes.", false);
// });

document.addEventListener("DOMContentLoaded", function () {
    const chatlogs = document.getElementById("chatlogs");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const typingGif = document.getElementById("typingGif");

    function showMessage(message, isUser) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;

        if (isUser) {
            messageDiv.classList.add("user-message");
        } else {
            messageDiv.classList.add("bot-message");
        }

        chatlogs.appendChild(messageDiv);

        // Scroll to the bottom of chatlogs
        chatlogs.scrollTop = chatlogs.scrollHeight;

        // Check if there is a typing gif, and move it after the last message
        if (typingGif && chatlogs.contains(typingGif)) {
            chatlogs.removeChild(typingGif);
            chatlogs.appendChild(typingGif);
        }
    }

    function showTypingAnimation() {
        typingGif.style.display = "block";
        setTimeout(function () {
            typingGif.style.display = "none";
        }, 2000);
    }

    function handleUserInput() {
        const userMessage = userInput.value.toLowerCase();
        userInput.value = "";

        showMessage(userMessage, true);
        showTypingAnimation();

        setTimeout(function () {
            switch (userMessage) {
                case "college":
                    showMessage("Which course do you want notes for? (cs, economics, maths)", false);
                    break;
                case "cs":
                case "economics":
                case "maths":
                    showMessage("Which semester do you want notes for? (1, 2, 3, 4)", false);
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                    showMessage("Here are some sample links for your selected subject and semester.", false);
                    break;
                case "school":
                    showMessage("Which class do you want notes for? (11 or 12)", false);
                    break;
                case "11":
                case "12":
                    showMessage("Here are some sample links for your selected class.", false);
                    break;
                default:
                    showMessage("I didn't quite understand your response. Please try again.", false);
            }
        }, 2000);
    }

    sendBtn.addEventListener("click", handleUserInput);

    showMessage("Welcome to the Study Material Chatbot! Type 'college' for college notes or 'school' for school notes.", false);
});
