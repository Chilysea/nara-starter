function saveMood(mood) {
    const today = new Date().toISOString().split("T")[0];
    const moodData = JSON.parse(localStorage.getItem("moodLog") || "{}");
    moodData[today] = mood;
    localStorage.setItem("moodLog", JSON.stringify(moodData));
  
    displayMood(mood);
  }
  
  function displayMood(mood) {
    const moodMap = {
      happy: "😊",
      excited: "🤩",
      neutral: "😐",
      sad: "😔",
      stressed: "😣",
      surprised: "😮",
      angry: "😠",
      tired: "🥱",
      confused: "😕",
      grateful: "😇"
    };
  
    const emoji = moodMap[mood] || "❓";
    const moodText = mood.charAt(0).toUpperCase() + mood.slice(1);
    const status = document.getElementById("mood-status");
  
    status.innerHTML = `<span class="mood-emoji">${emoji}</span> ${moodText}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("mood-trigger");
    const picker = document.getElementById("mood-picker");
  
    trigger.addEventListener("click", () => {
      picker.classList.toggle("hidden");
    });
  
    const buttons = document.querySelectorAll(".mood-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mood = btn.getAttribute("data-mood");
        saveMood(mood);
        picker.classList.add("hidden");
      });
    });
  
    const today = new Date().toISOString().split("T")[0];
    const moodData = JSON.parse(localStorage.getItem("moodLog") || "{}");
    if (moodData[today]) {
      displayMood(moodData[today]);
    }
  });

  document.getElementById("view-history-btn").addEventListener("click", () => {
    const historyContainer = document.getElementById("mood-history");
    historyContainer.classList.toggle("hidden");
  
    const moodData = JSON.parse(localStorage.getItem("moodLog") || "{}");
    const moodMap = {
      happy: "😊",
      excited: "🤩",
      neutral: "😐",
      sad: "😔",
      stressed: "😣",
      surprised: "😮",
      angry: "😠",
      tired: "🥱",
      confused: "😕",
      grateful: "😇"
    };
  
    const sortedDates = Object.keys(moodData).sort((a, b) => new Date(b) - new Date(a));
    const historyHTML = sortedDates.map(date => {
      const mood = moodData[date];
      const emoji = moodMap[mood] || "❓";
      return `<div><strong>${date}:</strong> ${emoji} ${mood.charAt(0).toUpperCase() + mood.slice(1)}</div>`;
    }).join("");
  
    historyContainer.innerHTML = historyHTML || "<p>No mood history yet.</p>";
  });
  
