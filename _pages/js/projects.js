// Initialize the current card index
let currentCard = 0;

// Show the initial card
showCard(currentCard);

// Function to switch cards
function switchCard(n) {
  showCard(currentCard + n);
}

// Function to display the active card
function showCard(n) {
  const cards = document.getElementsByClassName("card");
  const dots = document.getElementsByClassName("dot");

  // Handle circular navigation
  currentCard = (n + cards.length) % cards.length;

  // Hide all cards
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Show the current card
  cards[currentCard].style.display = "block";
  dots[currentCard].classList.add("active");
}

// Set the first dot as active by default
showCard(0);

// Add event listeners to the dots
const dotElements = document.getElementsByClassName("dot");
for (let i = 0; i < dotElements.length; i++) {
  dotElements[i].addEventListener("click", () => {
    switchCard(i - currentCard);
  });
}

// Automatically switch cards every 2 seconds
setInterval(() => {
  switchCard(1); // Switch to the next card
}, 3000);
