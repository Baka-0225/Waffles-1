
const ingredientsInput = document.getElementById('ingredients');
const resultText = document.getElementById('resultText');

function suggestSmoothie() {
    const ingredients = ingredientsInput.value.trim();

    if (ingredients === "") {
        resultText.textContent = "Please enter some ingredients!";
        resultText.style.color = "red";
    } else {
        resultText.textContent = `Yum! A smoothie with ${ingredients} sounds delicious! `;
        resultText.style.color = "green";
    }
}

ingredientsInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        suggestSmoothie();
        document.querySelectorAll('.swap-img').forEach(img => {
            img.addEventListener('click', () => {
                let current = img.src;
                let alt = img.dataset.alt;
        
                img.src = alt;
                img.dataset.alt = current;
            });
        });
        
    }
});
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);
document.getElementById("themeToggle").addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
});

