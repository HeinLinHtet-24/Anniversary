function calculateDays() {
    const startDate = new Date(2021, 4, 5); // May is month 4 (0-based)
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("daysCounter").textContent = diffDays;
  }
  
  calculateDays();