document.addEventListener("DOMContentLoaded", function () {
    // Небольшая аномалия: текст может иногда меняться
    const messages = [
        "Добро пожаловать в WITD",
        "Ты уверен, что хочешь здесь быть?",
        "Некоторые вещи лучше не находить...",
        "Они наблюдают."
    ];
    
    let h2 = document.querySelector("h2");
    setInterval(() => {
        if (Math.random() > 0.9) { // Иногда меняем текст
            h2.textContent = messages[Math.floor(Math.random() * messages.length)];
        }
    }, 5000);
});
