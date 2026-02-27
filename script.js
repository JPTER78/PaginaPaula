// Important Dates
const metDate = new Date('2023-12-31T00:00:00');
const talkDate = new Date('2025-07-25T00:00:00');
const nightDate = new Date('2025-07-31T00:00:00');
const giftDate = new Date('2025-08-28T00:00:00');
const commentDate = new Date('2025-09-20T00:00:00');
const letterDate = new Date('2025-12-31T00:00:00');
const facesDate = new Date('2025-12-31T00:00:00');
const confessedDate = new Date('2026-01-30T00:00:00');
const handDate = new Date('2026-02-08T00:00:00');
const biteDate = new Date('2026-02-25T00:00:00');
const cheekDate = new Date('2026-02-25T00:00:00');
const callDate = new Date('2026-02-25T00:00:00');

function updateTimers() {
    const now = new Date();

    const metDiff = calculateDetailedDifference(metDate, now);
    const talkDiff = calculateDetailedDifference(talkDate, now);
    const nightDiff = calculateDetailedDifference(nightDate, now);
    const giftDiff = calculateDetailedDifference(giftDate, now);
    const commentDiff = calculateDetailedDifference(commentDate, now);
    const letterDiff = calculateDetailedDifference(letterDate, now);
    const facesDiff = calculateDetailedDifference(facesDate, now);
    const confDiff = calculateDetailedDifference(confessedDate, now);
    const handDiff = calculateDetailedDifference(handDate, now);
    const biteDiff = calculateDetailedDifference(biteDate, now);
    const cheekDiff = calculateDetailedDifference(cheekDate, now);
    const callDiff = calculateDetailedDifference(callDate, now);

    // Render elements for 'Conocí' Timer
    document.getElementById('met-y').innerText = metDiff.years;
    document.getElementById('met-m').innerText = metDiff.months;
    document.getElementById('met-d').innerText = metDiff.days;
    document.getElementById('met-h').innerText = metDiff.hours;
    document.getElementById('met-min').innerText = metDiff.minutes;
    document.getElementById('met-s').innerText = metDiff.seconds;

    // Render elements for 'Volvimos a hablar' Timer
    document.getElementById('talk-y').innerText = talkDiff.years;
    document.getElementById('talk-m').innerText = talkDiff.months;
    document.getElementById('talk-d').innerText = talkDiff.days;
    document.getElementById('talk-h').innerText = talkDiff.hours;
    document.getElementById('talk-min').innerText = talkDiff.minutes;
    document.getElementById('talk-s').innerText = talkDiff.seconds;

    // Render elements for 'Primera noche hablando' Timer
    document.getElementById('night-y').innerText = nightDiff.years;
    document.getElementById('night-m').innerText = nightDiff.months;
    document.getElementById('night-d').innerText = nightDiff.days;
    document.getElementById('night-h').innerText = nightDiff.hours;
    document.getElementById('night-min').innerText = nightDiff.minutes;
    document.getElementById('night-s').innerText = nightDiff.seconds;

    // Render elements for 'Primer detalle' Timer
    document.getElementById('gift-y').innerText = giftDiff.years;
    document.getElementById('gift-m').innerText = giftDiff.months;
    document.getElementById('gift-d').innerText = giftDiff.days;
    document.getElementById('gift-h').innerText = giftDiff.hours;
    document.getElementById('gift-min').innerText = giftDiff.minutes;
    document.getElementById('gift-s').innerText = giftDiff.seconds;

    // Render elements for 'Primer comentario' Timer
    document.getElementById('comment-y').innerText = commentDiff.years;
    document.getElementById('comment-m').innerText = commentDiff.months;
    document.getElementById('comment-d').innerText = commentDiff.days;
    document.getElementById('comment-h').innerText = commentDiff.hours;
    document.getElementById('comment-min').innerText = commentDiff.minutes;
    document.getElementById('comment-s').innerText = commentDiff.seconds;

    // Render elements for 'Primera carta' Timer
    document.getElementById('letter-y').innerText = letterDiff.years;
    document.getElementById('letter-m').innerText = letterDiff.months;
    document.getElementById('letter-d').innerText = letterDiff.days;
    document.getElementById('letter-h').innerText = letterDiff.hours;
    document.getElementById('letter-min').innerText = letterDiff.minutes;
    document.getElementById('letter-s').innerText = letterDiff.seconds;

    // Render elements for 'Juntar caritas' Timer
    document.getElementById('faces-y').innerText = facesDiff.years;
    document.getElementById('faces-m').innerText = facesDiff.months;
    document.getElementById('faces-d').innerText = facesDiff.days;
    document.getElementById('faces-h').innerText = facesDiff.hours;
    document.getElementById('faces-min').innerText = facesDiff.minutes;
    document.getElementById('faces-s').innerText = facesDiff.seconds;

    // Render elements for 'Confesé' Timer
    document.getElementById('conf-y').innerText = confDiff.years;
    document.getElementById('conf-m').innerText = confDiff.months;
    document.getElementById('conf-d').innerText = confDiff.days;
    document.getElementById('conf-h').innerText = confDiff.hours;
    document.getElementById('conf-min').innerText = confDiff.minutes;
    document.getElementById('conf-s').innerText = confDiff.seconds;

    // Render elements for 'De la mano' Timer
    document.getElementById('hand-y').innerText = handDiff.years;
    document.getElementById('hand-m').innerText = handDiff.months;
    document.getElementById('hand-d').innerText = handDiff.days;
    document.getElementById('hand-h').innerText = handDiff.hours;
    document.getElementById('hand-min').innerText = handDiff.minutes;
    document.getElementById('hand-s').innerText = handDiff.seconds;

    // Render elements for 'Primer mordisco' Timer
    document.getElementById('bite-y').innerText = biteDiff.years;
    document.getElementById('bite-m').innerText = biteDiff.months;
    document.getElementById('bite-d').innerText = biteDiff.days;
    document.getElementById('bite-h').innerText = biteDiff.hours;
    document.getElementById('bite-min').innerText = biteDiff.minutes;
    document.getElementById('bite-s').innerText = biteDiff.seconds;

    // Render elements for 'Primer beso en la mejilla de ambos' Timer
    document.getElementById('cheek-y').innerText = cheekDiff.years;
    document.getElementById('cheek-m').innerText = cheekDiff.months;
    document.getElementById('cheek-d').innerText = cheekDiff.days;
    document.getElementById('cheek-h').innerText = cheekDiff.hours;
    document.getElementById('cheek-min').innerText = cheekDiff.minutes;
    document.getElementById('cheek-s').innerText = cheekDiff.seconds;

    // Render elements for 'Primera llamada' Timer
    document.getElementById('call-y').innerText = callDiff.years;
    document.getElementById('call-m').innerText = callDiff.months;
    document.getElementById('call-d').innerText = callDiff.days;
    document.getElementById('call-h').innerText = callDiff.hours;
    document.getElementById('call-min').innerText = callDiff.minutes;
    document.getElementById('call-s').innerText = callDiff.seconds;
}

function calculateDetailedDifference(start, end) {
    let diff = end.getTime() - start.getTime();
    if (diff < 0) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        months--;
        let prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}


// Particle Generation background
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 25;
    const emojis = ['💜', '💜', '✨', '💜', '🌸'];

    for (let i = 0; i < particleCount; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');

        let leftPos = Math.random() * 100;
        let size = Math.random() * 25 + 10;
        let delay = Math.random() * 10;
        let duration = Math.random() * 5 + 8; // 8 to 13 seconds

        heart.style.left = `${leftPos}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;

        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        container.appendChild(heart);
    }
}

// Interactive image clicker
const imageContainer = document.getElementById('main-image');
imageContainer.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
        let spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.innerHTML = ['✨', '💜', '💜'][Math.floor(Math.random() * 3)];
        spark.style.fontSize = '2rem';
        spark.style.pointerEvents = 'none';

        // Base positioning at mouse click
        let x = e.clientX;
        let y = e.clientY;

        spark.style.left = (x - 20) + 'px';
        spark.style.top = (y - 20) + 'px';
        spark.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        spark.style.opacity = '1';
        spark.style.zIndex = '999';

        document.body.appendChild(spark);

        // Animate
        setTimeout(() => {
            const spreadX = (Math.random() - 0.5) * 150;
            const spreadY = (Math.random() - 0.5) * 150 - 50;
            spark.style.transform = `translate(${spreadX}px, ${spreadY}px) scale(1.5)`;
            spark.style.opacity = '0';
        }, 10);

        // Cleanup
        setTimeout(() => {
            spark.remove();
        }, 800);
    }
});

// --- Mini-game Logic ---
const traits = [
    "Su pelo rizado tan bonito",
    "Su sonrisa tan bonita",
    "Como le quedan las gafas",
    "Su piel tan blanquita",
    "Su preciosa forma de ser",
    "La forma en la que me mira",
    "Como se perocupa por mi",
    "La forma en la que entiende el amor",
    "sus mofletitos",
    "sus ojitos"
];

let currentTraitIndex = 0;

function showNextTrait() {
    const traitElement = document.getElementById('game-trait');
    const controls = document.getElementById('game-controls');
    const card = document.getElementById('game-card');

    // Add fade out effect
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';

    setTimeout(() => {
        if (currentTraitIndex < traits.length) {
            traitElement.innerText = traits[currentTraitIndex];
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        } else {
            // Game Over -> Romantic conclusion
            traitElement.innerHTML = "¡Básicamente... <br> 💜 TODO DE ELLA! 💜";
            traitElement.style.color = "var(--color-primary)";
            traitElement.style.fontSize = "2.2rem"; // Slightly smaller to prevent text overflow
            controls.style.display = 'none';
            card.style.opacity = '1';
            card.style.transform = 'scale(1.05)'; // reduced from 1.1 to avoid overlapping container bounds
            card.style.zIndex = '10'; // ensure it stays on top of container text normally, but...
            card.style.background = "linear-gradient(135deg, #f8bbd0, #fce4ec)";
            card.style.padding = "2rem 1rem"; // adjust padding for better fit

            // Spawn mega particles
            for (let i = 0; i < 30; i++) {
                setTimeout(() => createHeartExplosion(), Math.random() * 1000);
            }
        }
    }, 300);
}

function rateTrait(rating) {
    if (rating === 'No me gusta') {
        return;
    }
    // Generate some hearts on click
    createHeartExplosion();

    currentTraitIndex++;
    showNextTrait();
}

let noBtnHoverCount = 0;

// Tricky button logic
function setupTrickyButton() {
    const noBtn = document.getElementById('btn-dislike');
    if (!noBtn) return;

    // Predetermined spots (relative to screen percentages to stay responsive)
    const jumpSpots = [
        { top: '15%', left: '10%' },
        { top: '80%', left: '75%' },
        { top: '20%', left: '70%' },
        { top: '75%', left: '15%' }
    ];

    // When clicked (desktop or touch), jump away
    ['click'].forEach(evt => {
        noBtn.addEventListener(evt, function (e) {
            e.preventDefault(); // Prevent default action

            if (noBtnHoverCount < 4) {
                const spot = jumpSpots[noBtnHoverCount];
                this.style.position = 'fixed';
                this.style.left = spot.left;
                this.style.top = spot.top;
                noBtnHoverCount++;
            } else if (noBtnHoverCount === 4) {
                // The 5th time, the button "breaks"
                this.innerHTML = "💥 ROTO 💥";
                this.style.background = "#ff5252";
                this.style.color = "white";
                this.style.pointerEvents = "none";
                this.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) both";

                noBtnHoverCount++;

                // Create broken pieces falling effect
                for (let i = 0; i < 5; i++) {
                    createBrokenPiece(this.getBoundingClientRect());
                }

                // Disappear after breaking animation
                setTimeout(() => {
                    this.style.transition = 'opacity 0.6s ease';
                    this.style.opacity = '0';
                    setTimeout(() => {
                        this.style.display = 'none';
                    }, 600); // Wait for fade out to complete
                }, 500); // Wait for the shake animation to finish
            }
        });
    });
}

function createBrokenPiece(rect) {
    let piece = document.createElement('div');
    piece.style.position = 'fixed';
    piece.style.width = '20px';
    piece.style.height = '10px';
    piece.style.background = '#757575';
    piece.style.left = (rect.left + rect.width / 2) + 'px';
    piece.style.top = (rect.top + rect.height / 2) + 'px';
    piece.style.pointerEvents = 'none';
    piece.style.zIndex = '9999';
    document.body.appendChild(piece);

    setTimeout(() => {
        piece.style.transition = 'all 1s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
        piece.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${Math.random() * 200 + 100}px) rotate(${Math.random() * 360}deg)`;
        piece.style.opacity = '0';
    }, 50);

    setTimeout(() => piece.remove(), 1050);
}

function createHeartExplosion(container) {
    let spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.innerHTML = ['💜', '🌟', '✨', '💜'][Math.floor(Math.random() * 4)];
    spark.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    spark.style.pointerEvents = 'none';

    // Position at center of the container or screen
    let x, y;
    if (container) {
        const rect = container.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
    } else {
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
    }

    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    spark.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 1s ease-out';
    spark.style.opacity = '1';
    spark.style.zIndex = '9999';

    document.body.appendChild(spark);

    // Force reflow
    void spark.offsetWidth;

    // Animate
    const spreadX = (Math.random() - 0.5) * 300;
    const spreadY = - (Math.random() * 300 + 100);
    spark.style.transform = `translate(${spreadX}px, ${spreadY}px) scale(${Math.random() * 1 + 0.5})`;
    spark.style.opacity = '0';

    setTimeout(() => spark.remove(), 1000);
}

// --- Mini Mascot Logic ---
function setupMascot() {
    const mascotConfig = {
        phrases: [
            "¡Eres la mejor! 💜",
            "Pienso en ti 24/7 💜",
            "Te corazoncito es mío 💜😍",
            "¡Qué guapa OMG! 💜",
            "Te quiero muchísimo 💜",
            "Eres mi personita favorita 💜",
            "Nunca salgas de mi vida 💜",
            "Eres la mas tontita 💜",
            "¡Hola baata! 💜👋"
        ],
        moveInterval: 6000, // Move every 6 seconds
        speechInterval: 8000 // Speak every 8 seconds
    };

    const mascot = document.getElementById('mini-mascot');
    const speechBubble = document.getElementById('mascot-speech');
    const audio = document.getElementById('mascot-audio');

    if (!mascot || !speechBubble || !audio) return;

    // Movement Logic
    function moveMascotRandomly() {
        const margin = 30;
        let minY = margin;
        let maxY = window.innerHeight - mascot.offsetHeight - margin;

        if (maxY < minY) {
            minY = Math.max(0, (window.innerHeight - mascot.offsetHeight) / 2);
            maxY = minY;
        }

        // Siempre pegado al borde izquierdo o derecho para no tapar el texto
        const isLeft = Math.random() > 0.5;
        let maxX = window.innerWidth - mascot.offsetWidth - margin;
        let newX;

        // Si la pantalla es muy pequeña, lo centramos para evitar bugs
        if (maxX < margin) {
            newX = Math.max(0, (window.innerWidth - mascot.offsetWidth) / 2);
        } else {
            newX = isLeft ? margin : maxX;
        }

        const newY = minY + Math.random() * (maxY - minY);

        mascot.style.left = `${newX}px`;
        mascot.style.top = `${newY}px`;

        // Efecto espejo si la mascota está en la parte izquierda
        const mascotImg = mascot.querySelector('.mascot-img');
        if (mascotImg) {
            if (isLeft && maxX >= margin) {
                mascotImg.style.setProperty('--flip', '-1');
            } else {
                mascotImg.style.setProperty('--flip', '1');
            }
        }
    }

    // Speech Logic
    function speakRandomPhrase() {
        const phrase = mascotConfig.phrases[Math.floor(Math.random() * mascotConfig.phrases.length)];
        speechBubble.innerText = phrase;
        speechBubble.classList.add('show');

        // Hide after some time
        setTimeout(() => {
            speechBubble.classList.remove('show');
        }, 4000); // visible for 4 seconds
    }

    // Initialize placement
    // setTimeout to let DOM fully render so offsetWidth/Height are accurate
    setTimeout(() => {
        // Disable initial CSS placements to prevent container stretching
        mascot.style.transition = 'none'; // Disable transition for instant placement
        mascot.style.right = 'auto';
        mascot.style.bottom = 'auto';

        // Start at bottom right avoiding overflow
        const startX = Math.max(20, window.innerWidth - mascot.offsetWidth - 20);
        const startY = Math.max(20, window.innerHeight - mascot.offsetHeight - 20);
        mascot.style.left = `${startX}px`;
        mascot.style.top = `${startY}px`;

        // Re-enable transition after a small delay to allow initial placement to render
        setTimeout(() => {
            mascot.style.transition = 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1), top 2.5s ease-in-out, transform 0.3s ease';
            // Start loops
            setInterval(moveMascotRandomly, mascotConfig.moveInterval);
            setInterval(speakRandomPhrase, mascotConfig.speechInterval);
        }, 50);
    }, 100);

    // Interaction Logic
    mascot.addEventListener('click', (e) => {
        // Try to play audio
        audio.play().catch(e => console.log("Audio no encontrado o autoplay bloqueado (esperado hasta que añadas el .mp3): ", e));

        // Animación de giro
        const mascotImg = mascot.querySelector('.mascot-img');
        if (mascotImg) {
            mascotImg.classList.add('spin-anim');
            setTimeout(() => {
                mascotImg.classList.remove('spin-anim');
            }, 600);
        }

        // Show current phrase immediately
        speakRandomPhrase();

        // Heart explosion at mascot location
        for (let i = 0; i < 5; i++) {
            let spark = document.createElement('div');
            spark.style.position = 'fixed';
            spark.innerHTML = ['💜', '✨', '✨', '💜'][Math.floor(Math.random() * 4)];
            spark.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            spark.style.pointerEvents = 'none';

            let x = e.clientX + (Math.random() - 0.5) * 50;
            let y = e.clientY + (Math.random() - 0.5) * 50;

            spark.style.left = x + 'px';
            spark.style.top = y + 'px';
            spark.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            spark.style.opacity = '1';
            spark.style.zIndex = '9999';

            document.body.appendChild(spark);

            setTimeout(() => {
                const spreadX = (Math.random() - 0.5) * 150;
                const spreadY = - (Math.random() * 200 + 50);
                spark.style.transform = `translate(${spreadX}px, ${spreadY}px) scale(${Math.random() * 1 + 0.5})`;
                spark.style.opacity = '0';
            }, 50);

            setTimeout(() => spark.remove(), 1000);
        }
    });
}

// --- Test de Compatibilidad Logic ---
function startCompatibilityTest() {
    const btn = document.getElementById('btn-start-compat');
    const container = document.getElementById('progress-container');
    const bar = document.getElementById('compat-bar');
    const text = document.getElementById('compat-text');
    const status = document.getElementById('compat-status');
    const resultBox = document.getElementById('compat-result');

    btn.style.display = 'none';
    container.style.display = 'block';

    const statuses = [
        "Analizando amor de baatos...",
        "Comprobando miradas cómplices...",
        "Midiendo el nivel de abrazos...",
        "Calculando sonrisas compartidas...",
        "Procesando el amor infinito..."
    ];

    let progress = 0;
    let statusIndex = 0;

    const interval = setInterval(() => {
        // Avance aleatorio para que parezca que está "pensando"
        progress += Math.floor(Math.random() * 5) + 1;

        if (progress > 98) progress = 98; // Se atasca un pelín justo final

        bar.style.width = `${progress}%`;
        text.innerText = `${progress}%`;

        // Cambiar texto de estado cada 20%
        if (progress > statusIndex * 20 && statusIndex < statuses.length) {
            status.innerText = statuses[statusIndex];
            statusIndex++;
        }

        if (progress >= 98 && Math.random() > 0.8) { // Chance de pasar del 98%
            clearInterval(interval);

            // Final explosion to 100% (or beyond!)
            setTimeout(() => {
                bar.style.width = `100%`;
                bar.style.background = `linear-gradient(45deg, #ff4081, #d500f9, #ffea00)`; // Super saiyan bar
                text.innerText = `1000%`;
                text.style.color = '#e91e63';
                text.style.transform = 'scale(1.5)';
                status.innerText = "¡ERROR: CAPACIDAD SOBREPASADA!";
                status.style.color = 'red';
                status.style.fontWeight = 'bold';

                setTimeout(() => {
                    container.style.display = 'none';
                    resultBox.style.display = 'block';

                    // Party hearts
                    for (let i = 0; i < 20; i++) {
                        setTimeout(() => createHeartExplosion(), Math.random() * 1000);
                    }
                }, 1500);

            }, 800); // Pausa dramática en el 98%
        }
    }, 150);
}

// --- Scratch-off Logic ---
const scratchPrizes = [
    "🎫 Vale por una hora de mimos",
    "🍕 Vale por tu cena favorita",
    "💋 Vale por 100 besitos de gnomo",
    "🎬 Vale por elegir la próxima peli",
    "☕ Vale por un chocolate calentito",
    "✨ Todo mi amor infinito",
    "💜 Vale por tocarme mi punto débil",
    "💜 Vale por un abrazo de treinta minutos",
];

let isScratching = false;

function initScratchCard() {
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const prizeEl = document.getElementById('scratch-prize');
    const resetBtn = document.getElementById('btn-reset-scratch');

    // Reset canvas state
    canvas.style.opacity = '1';
    canvas.style.pointerEvents = 'auto';
    canvas.dataset.cleared = 'false';
    resetBtn.style.display = 'none';

    // Select random prize
    prizeEl.innerText = scratchPrizes[Math.floor(Math.random() * scratchPrizes.length)];

    // Setup canvas size to match CSS exactly
    canvas.width = 300;
    canvas.height = 150;

    // Remove previous composite operation to draw the cover
    ctx.globalCompositeOperation = 'source-over';

    // Fill canvas with silver "scratch" layer
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#e0e0e0');
    gradient.addColorStop(0.5, '#bdbdbd');
    gradient.addColorStop(1, '#9e9e9e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text on top of the scratch layer
    ctx.font = 'bold 22px Quicksand, sans-serif';
    ctx.fillStyle = '#757575';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Rasca aquí ✨', canvas.width / 2, canvas.height / 2);

    // Setup scratching mode
    ctx.globalCompositeOperation = 'destination-out';

    // Define the scratch action
    function scratchAction(e) {
        if (!isScratching) return;
        if (e.cancelable) e.preventDefault();

        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (clientX - rect.left) * scaleX;
        const y = (clientY - rect.top) * scaleY;

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        checkScratchCompletion(canvas, ctx);
    }

    // Clean up old listeners (if re-initializing)
    canvas.onmousedown = null;
    canvas.onmousemove = null;
    canvas.ontouchstart = null;
    canvas.ontouchmove = null;
    window.onmouseup = null;
    window.ontouchend = null;

    // Attach new listeners
    canvas.onmousedown = (e) => { isScratching = true; scratchAction(e); };
    canvas.onmousemove = scratchAction;
    canvas.ontouchstart = (e) => { isScratching = true; scratchAction(e); };
    canvas.ontouchmove = scratchAction;

    window.addEventListener('mouseup', () => { isScratching = false; });
    window.addEventListener('touchend', () => { isScratching = false; });
}

function checkScratchCompletion(canvas, ctx) {
    if (canvas.dataset.cleared === 'true') return;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0;

    // Check every 16th pixel to save performance
    for (let i = 3; i < pixels.length; i += 64) {
        if (pixels[i] === 0) {
            transparentPixels++;
        }
    }

    const checkedPixels = Math.floor(pixels.length / 64);
    const clearPercentage = (transparentPixels / checkedPixels) * 100;

    // If more than 40% is scratched, reveal the rest
    if (clearPercentage > 40) {
        canvas.dataset.cleared = 'true';
        canvas.style.opacity = '0';
        canvas.style.pointerEvents = 'none';

        document.getElementById('btn-reset-scratch').style.display = 'inline-block';

        // Spawn hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createHeartExplosion(), Math.random() * 800);
        }
    }
}

function resetScratchCard() {
    initScratchCard();
}

// --- Slot Machine Logic ---
const slotOptions = {
    lugar: ["🛋️<br><span style='font-size:14px;color:#757575'>Sofá</span>", "🍿<br><span style='font-size:14px;color:#757575'>Cine</span>", "🚶‍♀️<br><span style='font-size:14px;color:#757575'>Paseo</span>", "🌌<br><span style='font-size:14px;color:#757575'>Mirador</span>", "🛏️<br><span style='font-size:14px;color:#757575'>Cama</span>", "🚗<br><span style='font-size:14px;color:#757575'>Coche</span>"],
    comida: ["🍕<br><span style='font-size:14px;color:#757575'>Pizza (vegana)</span>", "🍣<br><span style='font-size:14px;color:#757575'>Sushi (vegano)</span>", "🍔<br><span style='font-size:14px;color:#757575'>Burger (vegana)</span>", "🍦<br><span style='font-size:14px;color:#757575'>Helado (vegano)</span>", "🌮<br><span style='font-size:14px;color:#757575'>Tacos (veganos)</span>", "🍿<br><span style='font-size:14px;color:#757575'>Snacks</span>"],
    actividad: ["🎥<br><span style='font-size:14px;color:#757575'>Peli</span>", "🎲<br><span style='font-size:14px;color:#757575'>Juegos</span>", "🗣️<br><span style='font-size:14px;color:#757575'>Charlar</span>", "🥰<br><span style='font-size:14px;color:#757575'>Mimos</span>", "🎮<br><span style='font-size:14px;color:#757575'>Consola</span>", "🎵<br><span style='font-size:14px;color:#757575'>Música</span>"]
};

let isSpinning = false;

function spinSlots() {
    if (isSpinning) return;
    isSpinning = true;

    const btn = document.getElementById('btn-spin');
    const resultBox = document.getElementById('slot-result');
    const finalText = document.getElementById('slot-final-text');

    const reel1 = document.getElementById('slot1');
    const reel2 = document.getElementById('slot2');
    const reel3 = document.getElementById('slot3');

    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.innerText = "🎰 Girando...";
    resultBox.style.display = 'none';

    reel1.classList.add('slot-spinning');
    reel2.classList.add('slot-spinning');
    reel3.classList.add('slot-spinning');

    // Rapidly change text to simulate spinning
    let spinInterval = setInterval(() => {
        reel1.innerHTML = slotOptions.lugar[Math.floor(Math.random() * slotOptions.lugar.length)];
        reel2.innerHTML = slotOptions.comida[Math.floor(Math.random() * slotOptions.comida.length)];
        reel3.innerHTML = slotOptions.actividad[Math.floor(Math.random() * slotOptions.actividad.length)];
    }, 60);

    // Stop reels one by one
    setTimeout(() => {
        reel1.classList.remove('slot-spinning');
        createSparkleAt(reel1);
    }, 1500);

    setTimeout(() => {
        reel2.classList.remove('slot-spinning');
        createSparkleAt(reel2);
    }, 2000);

    setTimeout(() => {
        clearInterval(spinInterval);
        reel3.classList.remove('slot-spinning');
        createSparkleAt(reel3);

        // Finalize
        // Extract text ignoring the HTML span for formatting final message
        const finalLugar = reel1.innerText.replace('\n', ' ');
        const finalComida = reel2.innerText.replace('\n', ' ');
        const finalActividad = reel3.innerText.replace('\n', ' ');

        finalText.innerHTML = `<span style="color:var(--text-main);">${finalLugar}</span> + <span style="color:var(--text-main);">${finalComida}</span> + <span style="color:var(--text-main);">${finalActividad}</span>`;
        resultBox.style.display = 'block';

        btn.innerText = "🔄 ¡Tirar de nuevo!";
        btn.disabled = false;
        btn.style.opacity = '1';
        isSpinning = false;

        // Big explosion for the whole result
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createHeartExplosion(), Math.random() * 500);
        }

    }, 2800);
}

function createSparkleAt(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 4; i++) {
        let spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.innerHTML = ['✨', '🌟', '💜'][Math.floor(Math.random() * 3)];
        spark.style.fontSize = '1.8rem';
        spark.style.pointerEvents = 'none';

        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        spark.style.left = (x - 15) + 'px';
        spark.style.top = (y - 15) + 'px';
        spark.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        spark.style.opacity = '1';
        spark.style.zIndex = '9999';

        document.body.appendChild(spark);

        setTimeout(() => {
            const spreadX = (Math.random() - 0.5) * 120;
            const spreadY = (Math.random() - 0.5) * 120;
            spark.style.transform = `translate(${spreadX}px, ${spreadY}px) scale(1.5)`;
            spark.style.opacity = '0';
        }, 10);

        setTimeout(() => spark.remove(), 600);
    }
}

// --- Heart Magnet Game Logic ---
const magnetSecretMessages = [
    "Cada latido de mi corazón es por tu culpa 💜",
    "Eres la personita mas tontita del mundo💜",
    "Contigo he descubierto lo que es querer de verdad 💜",
    "Mi lugar favorito es a tu lado 🌸",
    "Eres mi mejor decisión, estoy muy orgulloso de ti 💜",
    "No necesito nada si te tengo a ti 💜",
    "Se me va a salir el corazoncito💜"
];

let magnetGameActive = false;
let magnetHearts = [];
let magnetCaught = 0;
let magnetGoal = 15;
let magnetAnimFrame = null;
let magnetTimerInterval = null;
let magnetTimeLeft = 30;
let magnetAbort = null; // AbortController for event cleanup
let magnetMouseX = 0;
let magnetMouseY = 0;

function startMagnetGame() {
    const area = document.getElementById('magnet-game-area');
    const cursor = document.getElementById('magnet-cursor');
    const overlay = document.getElementById('magnet-start-overlay');
    const resultBox = document.getElementById('magnet-result');
    const countEl = document.getElementById('magnet-count');

    // Stop previous game cleanly
    if (magnetAnimFrame) cancelAnimationFrame(magnetAnimFrame);
    if (magnetTimerInterval) clearInterval(magnetTimerInterval);
    if (magnetAbort) magnetAbort.abort();

    // Reset state
    magnetCaught = 0;
    magnetTimeLeft = 30;
    magnetGameActive = true;
    magnetMouseX = 0;
    magnetMouseY = 0;
    countEl.innerText = '0';
    resultBox.style.display = 'none';
    overlay.style.display = 'none';
    cursor.style.display = 'block';

    // Clear old hearts & timer
    magnetHearts.forEach(h => { if (h.el && h.el.parentNode) h.el.remove(); });
    magnetHearts = [];
    const oldTimer = area.querySelector('.magnet-timer');
    if (oldTimer) oldTimer.remove();

    // Create timer display
    const timerEl = document.createElement('div');
    timerEl.className = 'magnet-timer';
    timerEl.id = 'magnet-timer-display';
    timerEl.innerText = '⏱️ 30s';
    area.appendChild(timerEl);

    // Spawn hearts spread across the area
    const heartEmojis = ['💜', '🌸', '✨'];
    const areaW = area.clientWidth;
    const areaH = area.clientHeight;
    const padding = 40;

    for (let i = 0; i < magnetGoal; i++) {
        const heart = document.createElement('div');
        heart.className = 'magnet-heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        const x = padding + Math.random() * Math.max(10, areaW - padding * 2);
        const y = padding + Math.random() * Math.max(10, areaH - padding * 2);

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        area.appendChild(heart);

        magnetHearts.push({
            el: heart,
            x: x,
            y: y,
            caught: false,
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5
        });
    }

    // Start countdown timer
    magnetTimerInterval = setInterval(() => {
        magnetTimeLeft--;
        const td = document.getElementById('magnet-timer-display');
        if (td) td.innerText = `⏱️ ${magnetTimeLeft}s`;
        if (magnetTimeLeft <= 0) endMagnetGame(false);
    }, 1000);

    // Start movement + collision loop
    magnetAnimFrame = requestAnimationFrame(magnetGameLoop);

    // Setup input events with AbortController for clean removal
    magnetAbort = new AbortController();
    const signal = magnetAbort.signal;

    area.addEventListener('mousemove', (e) => {
        const rect = area.getBoundingClientRect();
        magnetMouseX = e.clientX - rect.left;
        magnetMouseY = e.clientY - rect.top;
        cursor.style.left = (magnetMouseX - 20) + 'px';
        cursor.style.top = (magnetMouseY - 20) + 'px';
    }, { signal });

    area.addEventListener('touchmove', (e) => {
        if (e.cancelable) e.preventDefault();
        const rect = area.getBoundingClientRect();
        magnetMouseX = e.touches[0].clientX - rect.left;
        magnetMouseY = e.touches[0].clientY - rect.top;
        cursor.style.left = (magnetMouseX - 20) + 'px';
        cursor.style.top = (magnetMouseY - 20) + 'px';
    }, { passive: false, signal });

    area.addEventListener('touchstart', (e) => {
        if (e.cancelable) e.preventDefault();
        const rect = area.getBoundingClientRect();
        magnetMouseX = e.touches[0].clientX - rect.left;
        magnetMouseY = e.touches[0].clientY - rect.top;
        cursor.style.left = (magnetMouseX - 20) + 'px';
        cursor.style.top = (magnetMouseY - 20) + 'px';
    }, { passive: false, signal });
}

function magnetGameLoop() {
    if (!magnetGameActive) return;

    const area = document.getElementById('magnet-game-area');
    if (!area) return;

    const areaW = area.clientWidth;
    const areaH = area.clientHeight;
    const padding = 15;

    // Move hearts & check collisions
    magnetHearts.forEach(h => {
        if (h.caught) return;

        // Move
        h.x += h.speedX;
        h.y += h.speedY;

        // Bounce off walls
        if (h.x < padding) { h.x = padding; h.speedX *= -1; }
        if (h.x > areaW - padding) { h.x = areaW - padding; h.speedX *= -1; }
        if (h.y < padding) { h.y = padding; h.speedY *= -1; }
        if (h.y > areaH - padding) { h.y = areaH - padding; h.speedY *= -1; }

        h.el.style.left = h.x + 'px';
        h.el.style.top = h.y + 'px';

        // Collision check with magnet
        if (magnetMouseX > 0 && magnetMouseY > 0) {
            const dx = magnetMouseX - h.x;
            const dy = magnetMouseY - h.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 42) {
                h.caught = true;
                magnetCaught++;
                document.getElementById('magnet-count').innerText = magnetCaught;

                // Catch animation
                h.el.classList.add('caught');
                setTimeout(() => { if (h.el.parentNode) h.el.remove(); }, 300);

                // Sparkle
                const spark = document.createElement('div');
                spark.innerHTML = '✨';
                spark.style.cssText = `position:absolute;left:${h.x}px;top:${h.y}px;font-size:1.5rem;pointer-events:none;z-index:15;transition:all 0.5s ease;`;
                area.appendChild(spark);
                setTimeout(() => { spark.style.transform = 'scale(2) translateY(-20px)'; spark.style.opacity = '0'; }, 50);
                setTimeout(() => spark.remove(), 500);

                if (magnetCaught >= magnetGoal) {
                    endMagnetGame(true);
                    return;
                }
            }
        }
    });

    magnetAnimFrame = requestAnimationFrame(magnetGameLoop);
}

function endMagnetGame(won) {
    magnetGameActive = false;
    if (magnetTimerInterval) clearInterval(magnetTimerInterval);
    if (magnetAnimFrame) cancelAnimationFrame(magnetAnimFrame);
    if (magnetAbort) magnetAbort.abort();

    const resultBox = document.getElementById('magnet-result');
    const secretMsg = document.getElementById('magnet-secret-msg');
    const timerDisplay = document.getElementById('magnet-timer-display');
    const cursor = document.getElementById('magnet-cursor');

    if (cursor) cursor.style.display = 'none';
    if (timerDisplay) timerDisplay.remove();

    // Clean remaining hearts
    magnetHearts.forEach(h => {
        if (h.el && h.el.parentNode) h.el.remove();
    });

    if (won) {
        const msg = magnetSecretMessages[Math.floor(Math.random() * magnetSecretMessages.length)];
        document.querySelector('#magnet-container h4').innerText = '¡Has atrapado mi corazón! 💜';
        secretMsg.innerText = msg;
        resultBox.style.display = 'block';

        for (let i = 0; i < 20; i++) {
            setTimeout(() => createHeartExplosion(), Math.random() * 1000);
        }
    } else {
        document.querySelector('#magnet-container h4').innerText = '¡Se acabó el tiempo! ⏱️';
        secretMsg.innerText = `Atrapaste ${magnetCaught} de ${magnetGoal} corazones. ¡Inténtalo otra vez! 💜`;
        resultBox.style.display = 'block';
    }
}

// --- Vinyl Turntable Logic ---
let turntablePlaying = false;

function setupTurntable() {
    const disc = document.getElementById('vinyl-disc');
    const dropZone = document.getElementById('turntable-drop');
    const platter = document.getElementById('turntable-platter');

    if (!disc || !dropZone) return;

    // --- Desktop drag & drop ---
    disc.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'vinyl');
        disc.style.opacity = '0.5';
    });

    disc.addEventListener('dragend', () => {
        disc.style.opacity = '1';
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        if (e.dataTransfer.getData('text/plain') === 'vinyl') {
            placeVinylOnPlatter();
        }
    });

    // --- Touch/mobile support via pointer events ---
    let isDragging = false;
    let dragClone = null;

    disc.addEventListener('pointerdown', (e) => {
        if (disc.classList.contains('on-platter')) return;
        isDragging = true;
        disc.setPointerCapture(e.pointerId);

        // Create a visual clone that follows the finger
        dragClone = disc.cloneNode(true);
        dragClone.style.position = 'fixed';
        dragClone.style.zIndex = '9999';
        dragClone.style.pointerEvents = 'none';
        dragClone.style.opacity = '0.8';
        dragClone.style.width = '100px';
        dragClone.style.height = '100px';
        dragClone.style.left = (e.clientX - 50) + 'px';
        dragClone.style.top = (e.clientY - 50) + 'px';
        document.body.appendChild(dragClone);

        disc.style.opacity = '0.3';
    });

    disc.addEventListener('pointermove', (e) => {
        if (!isDragging || !dragClone) return;
        dragClone.style.left = (e.clientX - 50) + 'px';
        dragClone.style.top = (e.clientY - 50) + 'px';

        // Highlight drop zone if hovering over it
        const dropRect = dropZone.getBoundingClientRect();
        if (e.clientX >= dropRect.left && e.clientX <= dropRect.right &&
            e.clientY >= dropRect.top && e.clientY <= dropRect.bottom) {
            dropZone.classList.add('drag-over');
        } else {
            dropZone.classList.remove('drag-over');
        }
    });

    disc.addEventListener('pointerup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        disc.style.opacity = '1';
        dropZone.classList.remove('drag-over');

        if (dragClone) {
            dragClone.remove();
            dragClone = null;
        }

        // Check if dropped on the turntable
        const dropRect = dropZone.getBoundingClientRect();
        if (e.clientX >= dropRect.left && e.clientX <= dropRect.right &&
            e.clientY >= dropRect.top && e.clientY <= dropRect.bottom) {
            placeVinylOnPlatter();
        }
    });

    disc.addEventListener('pointercancel', () => {
        isDragging = false;
        disc.style.opacity = '1';
        if (dragClone) {
            dragClone.remove();
            dragClone = null;
        }
    });
}

function placeVinylOnPlatter() {
    const disc = document.getElementById('vinyl-disc');
    const platter = document.getElementById('turntable-platter');
    const tonearm = document.getElementById('turntable-tonearm');
    const hint = document.getElementById('vinyl-hint');
    const dropHint = document.getElementById('turntable-drop-hint');
    const message = document.getElementById('turntable-message');
    const controls = document.getElementById('turntable-controls');
    const audio = document.getElementById('turntable-audio');

    if (disc.classList.contains('on-platter')) return;

    // Move disc onto platter
    disc.setAttribute('draggable', 'false');
    disc.classList.add('on-platter');
    platter.appendChild(disc);

    // Hide hints
    if (hint) hint.style.display = 'none';
    if (dropHint) dropHint.style.display = 'none';

    // Start playing after a short delay (for tonearm animation)
    setTimeout(() => {
        disc.classList.add('spinning');
        tonearm.classList.add('playing');
        turntablePlaying = true;

        // Play audio at low volume
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio: ', e));

        // Show message and controls
        setTimeout(() => {
            message.style.display = 'block';
            controls.style.display = 'flex';

            // Hearts!
            for (let i = 0; i < 10; i++) {
                setTimeout(() => createHeartExplosion(), Math.random() * 800);
            }
        }, 600);
    }, 400);
}

function toggleTurntable() {
    const disc = document.getElementById('vinyl-disc');
    const tonearm = document.getElementById('turntable-tonearm');
    const audio = document.getElementById('turntable-audio');
    const btn = document.getElementById('btn-turntable-toggle');

    if (turntablePlaying) {
        audio.pause();
        disc.classList.remove('spinning');
        tonearm.classList.remove('playing');
        btn.innerText = '▶️ Reproducir';
        turntablePlaying = false;
    } else {
        audio.play().catch(e => console.log('Audio: ', e));
        disc.classList.add('spinning');
        tonearm.classList.add('playing');
        btn.innerText = '⏸️ Pausar';
        turntablePlaying = true;
    }
}

function resetTurntable() {
    const disc = document.getElementById('vinyl-disc');
    const shelf = document.querySelector('.vinyl-shelf');
    const tonearm = document.getElementById('turntable-tonearm');
    const hint = document.getElementById('vinyl-hint');
    const dropHint = document.getElementById('turntable-drop-hint');
    const message = document.getElementById('turntable-message');
    const controls = document.getElementById('turntable-controls');
    const audio = document.getElementById('turntable-audio');

    // Stop audio
    audio.pause();
    audio.currentTime = 0;
    turntablePlaying = false;

    // Reset disc
    disc.classList.remove('on-platter', 'spinning');
    disc.setAttribute('draggable', 'true');
    tonearm.classList.remove('playing');

    // Move disc back to shelf
    shelf.insertBefore(disc, hint);

    // Show hints, hide message/controls
    if (hint) hint.style.display = '';
    if (dropHint) dropHint.style.display = '';
    message.style.display = 'none';
    controls.style.display = 'none';

    // Reset volume slider
    const slider = document.getElementById('volume-slider');
    const label = document.getElementById('volume-label');
    const icon = document.getElementById('volume-icon');
    if (slider) slider.value = 30;
    if (label) label.innerText = '30%';
    if (icon) icon.innerText = '🔉';
}

function changeVolume(val) {
    const audio = document.getElementById('turntable-audio');
    const label = document.getElementById('volume-label');
    const icon = document.getElementById('volume-icon');
    const v = parseInt(val);

    audio.volume = v / 100;
    label.innerText = v + '%';

    if (v === 0) icon.innerText = '🔇';
    else if (v < 30) icon.innerText = '🔈';
    else if (v < 70) icon.innerText = '🔉';
    else icon.innerText = '🔊';
}

// --- Drawing Canvas Logic ---
let drawColor = '#9c27b0';
let drawSize = 3;
let isDrawing = false;
let isErasing = false;
let drawCtx = null;
let isCanvasFullscreen = false;

function initDrawingCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;
    drawCtx = canvas.getContext('2d');

    resizeDrawingCanvas();

    // Fill white background
    drawCtx.fillStyle = '#ffffff';
    drawCtx.fillRect(0, 0, canvas.width, canvas.height);

    // Mouse events
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        const pos = getCanvasPos(e, canvas);
        drawCtx.beginPath();
        drawCtx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        const pos = getCanvasPos(e, canvas);
        drawLine(pos.x, pos.y);
    });

    canvas.addEventListener('mouseup', () => { isDrawing = false; });
    canvas.addEventListener('mouseleave', () => { isDrawing = false; });

    // Touch events
    canvas.addEventListener('touchstart', (e) => {
        if (e.cancelable) e.preventDefault();
        isDrawing = true;
        const pos = getCanvasPos(e.touches[0], canvas);
        drawCtx.beginPath();
        drawCtx.moveTo(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (e.cancelable) e.preventDefault();
        if (!isDrawing) return;
        const pos = getCanvasPos(e.touches[0], canvas);
        drawLine(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener('touchend', () => { isDrawing = false; });
}

function getCanvasPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function drawLine(x, y) {
    drawCtx.lineTo(x, y);
    drawCtx.strokeStyle = isErasing ? '#ffffff' : drawColor;
    drawCtx.lineWidth = isErasing ? drawSize * 3 : drawSize;
    drawCtx.lineCap = 'round';
    drawCtx.lineJoin = 'round';
    drawCtx.stroke();
}

function resizeDrawingCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;

    // Save current drawing
    const tempImg = new Image();
    const hadContent = canvas.width > 0 && canvas.height > 0;
    if (hadContent) {
        tempImg.src = canvas.toDataURL();
    }

    const wrapper = canvas.parentElement;
    const rect = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawCtx = canvas.getContext('2d');

    // White background
    drawCtx.fillStyle = '#ffffff';
    drawCtx.fillRect(0, 0, canvas.width, canvas.height);

    // Restore previous drawing
    if (hadContent) {
        tempImg.onload = () => {
            drawCtx.drawImage(tempImg, 0, 0, canvas.width, canvas.height);
        };
    }
}

function setDrawColor(btn, color) {
    drawColor = color;
    isErasing = false;

    // Update active state
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const eraserBtn = document.getElementById('btn-eraser');
    if (eraserBtn) eraserBtn.classList.remove('eraser-active');
}

function setDrawSize(size, btn) {
    drawSize = size;

    // Update active state
    document.querySelectorAll('#brush-small, #brush-med, #brush-big').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
}

function toggleEraser() {
    isErasing = !isErasing;
    const btn = document.getElementById('btn-eraser');
    if (isErasing) {
        btn.classList.add('eraser-active');
    } else {
        btn.classList.remove('eraser-active');
    }
}

function clearCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;
    drawCtx.fillStyle = '#ffffff';
    drawCtx.fillRect(0, 0, canvas.width, canvas.height);
}

let drawingOriginalParent = null;
let drawingPlaceholder = null;

function toggleFullscreenCanvas() {
    const container = document.getElementById('drawing-container');
    const btn = document.getElementById('btn-fullscreen-canvas');

    isCanvasFullscreen = !isCanvasFullscreen;

    if (isCanvasFullscreen) {
        // Save original position in DOM
        drawingOriginalParent = container.parentNode;
        drawingPlaceholder = document.createComment('drawing-placeholder');
        drawingOriginalParent.insertBefore(drawingPlaceholder, container);

        // Move to body so position:fixed works (bypass backdrop-filter parent)
        document.body.appendChild(container);
        container.classList.add('drawing-fullscreen');
        btn.innerText = '✕';
        document.body.style.overflow = 'hidden';
    } else {
        container.classList.remove('drawing-fullscreen');
        btn.innerText = '⛶';
        document.body.style.overflow = '';

        // Move back to original position
        if (drawingOriginalParent && drawingPlaceholder) {
            drawingOriginalParent.insertBefore(container, drawingPlaceholder);
            drawingPlaceholder.remove();
            drawingPlaceholder = null;
            drawingOriginalParent = null;
        }
    }

    // Wait for layout to fully settle, then resize canvas
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            resizeDrawingCanvas();
        });
    });
}

function saveCanvasPNG() {
    const canvas = document.getElementById('drawing-canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'dibujo_paula_y_jonathan.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// --- Poción de Amor Logic ---
const potionMessages = [
    "Mimos, abrazos, besos y amor... la poción ha hablado: estaremos juntos para siempre 💜✨",
    "¡La poción perfecta para no separarnos nunca! Tú y yo, siempre juntos 💜🧪",
    "El caldero nunca miente: nuestro destino es estar juntos toda la vida. Te quiero, Paula 💜✨",
    "Resultado del laboratorio: la fórmula para estar siempre juntos ya existe... ¡y es lo nuestro! 💜🧪",
    "Con estos ingredientes, la magia dice que nada ni nadie podrá separarnos jamás 💜🌟",
    "¡Poción completada! Efecto: estar pegaditos el uno al otro para siempre. Sin antídoto posible 💜✨",
    "La poción más poderosa del universo: tú + yo = juntos para siempre 💜🧪✨"
];

let potionAddedIngredients = [];
let potionDragData = null;

function initPotion() {
    const cauldron = document.getElementById('potion-cauldron');
    const dropHint = document.getElementById('cauldron-drop-hint');
    const ingredients = document.querySelectorAll('.potion-ingredient');
    if (!cauldron || !ingredients.length) return;

    potionAddedIngredients = [];
    updatePotionUI();

    // --- Desktop HTML5 drag & drop ---
    ingredients.forEach(ing => {
        ing.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', ing.dataset.ingredient);
            ing.classList.add('dragging');
            if (dropHint) dropHint.classList.add('drag-active');
        });

        ing.addEventListener('dragend', () => {
            ing.classList.remove('dragging');
            if (dropHint) dropHint.classList.remove('drag-active');
        });
    });

    cauldron.addEventListener('dragover', (e) => {
        e.preventDefault();
        cauldron.classList.add('drag-over');
    });

    cauldron.addEventListener('dragleave', () => {
        cauldron.classList.remove('drag-over');
    });

    cauldron.addEventListener('drop', (e) => {
        e.preventDefault();
        cauldron.classList.remove('drag-over');
        const ingredientName = e.dataTransfer.getData('text/plain');
        addIngredientToPotion(ingredientName);
    });

    // --- Touch/Pointer support ---
    ingredients.forEach(ing => {
        let isDragging = false;
        let dragClone = null;

        ing.addEventListener('pointerdown', (e) => {
            if (ing.classList.contains('added')) return;
            isDragging = true;
            potionDragData = ing.dataset.ingredient;
            ing.setPointerCapture(e.pointerId);

            dragClone = ing.cloneNode(true);
            dragClone.style.position = 'fixed';
            dragClone.style.zIndex = '9999';
            dragClone.style.pointerEvents = 'none';
            dragClone.style.opacity = '0.85';
            dragClone.style.transform = 'scale(1.1)';
            dragClone.style.left = (e.clientX - 35) + 'px';
            dragClone.style.top = (e.clientY - 35) + 'px';
            document.body.appendChild(dragClone);

            ing.classList.add('dragging');
            if (dropHint) dropHint.classList.add('drag-active');
        });

        ing.addEventListener('pointermove', (e) => {
            if (!isDragging || !dragClone) return;
            dragClone.style.left = (e.clientX - 35) + 'px';
            dragClone.style.top = (e.clientY - 35) + 'px';

            const cauldronRect = cauldron.getBoundingClientRect();
            if (e.clientX >= cauldronRect.left && e.clientX <= cauldronRect.right &&
                e.clientY >= cauldronRect.top && e.clientY <= cauldronRect.bottom) {
                cauldron.classList.add('drag-over');
            } else {
                cauldron.classList.remove('drag-over');
            }
        });

        ing.addEventListener('pointerup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            ing.classList.remove('dragging');
            cauldron.classList.remove('drag-over');
            if (dropHint) dropHint.classList.remove('drag-active');

            if (dragClone) {
                dragClone.remove();
                dragClone = null;
            }

            const cauldronRect = cauldron.getBoundingClientRect();
            if (e.clientX >= cauldronRect.left && e.clientX <= cauldronRect.right &&
                e.clientY >= cauldronRect.top && e.clientY <= cauldronRect.bottom) {
                addIngredientToPotion(potionDragData);
            }
            potionDragData = null;
        });

        ing.addEventListener('pointercancel', () => {
            isDragging = false;
            ing.classList.remove('dragging');
            if (dragClone) { dragClone.remove(); dragClone = null; }
            if (dropHint) dropHint.classList.remove('drag-active');
        });
    });
}

function addIngredientToPotion(name) {
    if (!name || potionAddedIngredients.includes(name)) return;

    const ingEl = document.getElementById('ing-' + name);
    if (!ingEl) return;

    potionAddedIngredients.push(name);
    ingEl.classList.add('added');

    const cauldron = document.getElementById('potion-cauldron');
    const liquid = document.getElementById('cauldron-liquid');
    const addedList = document.getElementById('cauldron-added-list');

    // Shake effect
    cauldron.classList.remove('shake');
    void cauldron.offsetWidth;
    cauldron.classList.add('shake');

    // Add emoji to cauldron
    const emojiMap = { mimos: '🥰', abrazos: '🤗', besos: '😘', amor: '💜' };
    const span = document.createElement('span');
    span.textContent = emojiMap[name] || '✨';
    span.style.animation = 'splashUp 0.4s ease-out reverse';
    addedList.appendChild(span);

    // Create a splash effect
    createPotionSplash(cauldron, emojiMap[name]);

    // Update liquid level
    const count = potionAddedIngredients.length;
    liquid.className = 'cauldron-liquid';
    liquid.classList.add('level-' + count);
    liquid.classList.add('bubbling');

    updatePotionUI();

    if (count >= 4) {
        setTimeout(() => finishPotion(), 800);
    }
}

function createPotionSplash(cauldron, emoji) {
    const body = cauldron.querySelector('.cauldron-body');
    if (!body) return;

    for (let i = 0; i < 3; i++) {
        const splash = document.createElement('div');
        splash.className = 'ingredient-splash';
        splash.textContent = emoji;
        splash.style.left = (30 + Math.random() * 60) + '%';
        splash.style.top = '20%';
        splash.style.animationDelay = (i * 0.1) + 's';
        body.appendChild(splash);
        setTimeout(() => splash.remove(), 700);
    }
}

function finishPotion() {
    const resultDiv = document.getElementById('potion-result');
    const msgEl = document.getElementById('potion-message');
    const lab = document.querySelector('.potion-lab');
    const cauldron = document.getElementById('potion-cauldron');

    // Big sparkle burst
    if (cauldron) {
        const rect = cauldron.getBoundingClientRect();
        const sparkles = ['✨', '💜', '🌟', '🌸', '🧪', '⭐'];
        for (let i = 0; i < 12; i++) {
            const sp = document.createElement('div');
            sp.className = 'potion-sparkle';
            sp.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sp.style.position = 'fixed';
            sp.style.left = (rect.left + rect.width / 2) + 'px';
            sp.style.top = (rect.top + rect.height / 3) + 'px';
            const angle = (i / 12) * Math.PI * 2;
            const dist = 60 + Math.random() * 80;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;
            document.body.appendChild(sp);
            requestAnimationFrame(() => {
                sp.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                sp.style.transform = `translate(${tx}px, ${ty}px) scale(1.5)`;
                sp.style.opacity = '0';
            });
            setTimeout(() => sp.remove(), 900);
        }
    }

    // Heart explosions
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createHeartExplosion(), Math.random() * 800);
    }

    // Show message
    const msg = potionMessages[Math.floor(Math.random() * potionMessages.length)];
    msgEl.textContent = msg;
    if (lab) lab.style.display = 'none';
    resultDiv.style.display = 'block';
}

function updatePotionUI() {
    const countEl = document.getElementById('potion-count');
    if (countEl) countEl.textContent = potionAddedIngredients.length;
}

function resetPotion() {
    const lab = document.querySelector('.potion-lab');
    const resultDiv = document.getElementById('potion-result');
    const liquid = document.getElementById('cauldron-liquid');
    const addedList = document.getElementById('cauldron-added-list');

    potionAddedIngredients = [];
    document.querySelectorAll('.potion-ingredient').forEach(ing => {
        ing.classList.remove('added', 'dragging');
    });

    liquid.className = 'cauldron-liquid';
    addedList.innerHTML = '';

    if (lab) lab.style.display = '';
    resultDiv.style.display = 'none';

    updatePotionUI();
}

// Start loop
window.onload = () => {
    updateTimers();
    setInterval(updateTimers, 1000);
    createParticles();
    showNextTrait(); // Initialize mini-game
    setupTrickyButton(); // Initialize moving button
    setupMascot(); // Initialize wandering mini mascot
    initScratchCard(); // Init Scratch card
    setupTurntable(); // Init Turntable
    initDrawingCanvas(); // Init Drawing Canvas
    initPotion(); // Init Poción de Amor
};
