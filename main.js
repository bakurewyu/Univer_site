// Инициализация AOS
AOS.init({
    duration: 2000, // Длительность анимации (в миллисекундах)
    easing: 'ease-in-out', // Тип анимации
    mirror: true,
});





document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("save-form");
    const message = document.getElementById("saved-message");

    // Загрузка сохраненных данных
    const savedName = localStorage.getItem("username");
    const savedEmail = sessionStorage.getItem("useremail");

    if (savedName) message.textContent = `Привет, ${savedName}! Ваш email: ${savedEmail}`;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const useremail = document.getElementById("useremail").value;
        let message_text = document.getElementById("message_text").value;
        //сохранение в localStorage и sessionStorage
        localStorage.setItem("username", username,"message_text",message_text);
        sessionStorage.setItem("useremail", useremail);
        message.textContent = `${username}, Ваше сообщение отправлено!`;
    });
});


