// quote.js

const quotes = [
    "Believe you can and you're halfway there.",
    "Keep going. You're doing great.",
    "Small steps every day.",
    "Your effort matters.",
    "Breathe. Smile. Go again.",
    "You are enough.",
    "The most important thing is to enjoy your life–to be happy–it's all that matters." ,
    "Love the life you live. Live the life you love.",
    "You only live once, but if you do it right, once is enough.",
    "Live for each second without hesitation.",
    "Your time is limited, so don't waste it living someone else's life." ,
    "I think I've discovered the secret of life – you just hang around until you get used to it." ,
    "Life doesn't have to be perfect to be wonderful.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "One day at a time."
  ];
  
  function showRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const overlay = document.getElementById('quote-overlay');
    overlay.innerText = quote;
  }
  
  document.addEventListener('DOMContentLoaded', showRandomQuote);
  