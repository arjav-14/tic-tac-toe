

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".btn");
    const resetBtn = document.querySelector(".reset-btn");
    let turno = true; // Initial value for playerX's turn
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turno && box.innerText === "") {
                // Player X's turn
                box.innerText = "X";
                turno = false;
            } else if (!turno && box.innerText === "") {
                // Player O's turn
                box.innerText = "O";
                turno = true;
            }
            box.disabled = true;
            checkWinner(); // Check for winner after each move
            checkDraw(); // Check for draw after each move
        });
    });

    resetBtn.addEventListener("click", () => {
        // Reset the game
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        turno = true; // Reset the turn to playerX
    });


    document.addEventListener("DOMContentLoaded", function() {
        const restartButton = document.querySelector(".restart-game");
        const boxes = document.querySelectorAll(".btn");
    
        restartButton.addEventListener("click", function() {
            // Clear text content of all buttons
            boxes.forEach(function(box) {
                box.textContent = "";
                box.disabled = false; // Re-enable all buttons
            });
        });
    });
    
    function checkWinner() {
        // Check if any player has won
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            if (boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
                alert(`Player ${boxes[a].innerText} wins!`);
                // Disable all boxes after winning
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                return;
            }
        }
    }

    function checkDraw() {
        // Check if all buttons have been clicked and there's no winner
        let draw = true;
        boxes.forEach(function(box) {
            if (box.textContent === "") { // If any button is empty, the game is not a draw
                draw = false;
            }
        });
        if (draw) {
            alert("It's a draw!");
        }
    }
});
