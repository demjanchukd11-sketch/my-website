
// Відкриття модального віконця

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

// Закриття всіх віконець

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Закриття при натисканні на фон

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Закриття клавішею Escape

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Випадкові побажання

const moods = [
    "Ти сонечко, яке освітлює цей світ! ☀️",
    "Нехай сьогодні станеться щось неймовірно хороше! 🌸",
    "Ти набагато сильніша, ніж думаєш! 💪",
    "У тебе обов'язково все вийде! 💗",
    "Ти заслуговуєш на найкрасивіше щастя! 🦋",
    "Не забувай посміхатися, тобі це дуже личить! 🥰",
    "Попереду на тебе чекає багато прекрасного! ✨",
    "Ти чиєсь найулюбленіше диво! 💕"
];

// Нове побажання

function newMood() {
    const random = Math.floor(Math.random() * moods.length);

    document.getElementById('mood-text').textContent = moods[random];
}

// Кнопка щастя

function showRandomMessage() {
    const random = Math.floor(Math.random() * moods.length);

    document.getElementById('random-message').textContent = moods[random];

    createConfetti();
}

// Літаючі сердечка

function createHeart() {
    const heart = document.createElement('div');

    heart.className = 'heart';

    heart.textContent = ['💗', '💕', '♡', '🌸'][
        Math.floor(Math.random() * 4)
        ];

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.animationDuration = (5 + Math.random() * 5) + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Автоматична поява сердечок

setInterval(createHeart, 1000);

// Святкові сердечка

function createConfetti() {
    for (let i = 0; i < 35; i++) {
        setTimeout(createHeart, i * 70);
    }
}
