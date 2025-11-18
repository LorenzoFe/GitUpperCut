document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".blog-card");
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, 200 * (index + 1)); // Delay entre os cards
    });
});
