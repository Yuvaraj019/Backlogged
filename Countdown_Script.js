document.addEventListener('DOMContentLoaded', () => {
function splitDigits(num) {
  return String(num).padStart(2, "0").split("").map(d =>
    `<span class="digit">${d}</span>`).join("");
}

function createCountdown(prefix, targetDate) {
  const elDays = document.getElementById(`${prefix}-days`);
  const elHours = document.getElementById(`${prefix}-hours`);
  const elMinutes = document.getElementById(`${prefix}-minutes`);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      elDays.innerHTML = elHours.innerHTML = elMinutes.innerHTML =
        `<span class="digit">0</span><span class="digit">0</span>`;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    elDays.innerHTML = splitDigits(days);
    elHours.innerHTML = splitDigits(hours);
    elMinutes.innerHTML = splitDigits(minutes);
  }

  update();
  setInterval(update, 60000); // Updates every minute, which is fine for days/hours/minutes
}

createCountdown("007", new Date("May 27, 2026 00:00:00").getTime());
createCountdown("yotai", new Date("October 2, 2025 00:00:00").getTime());
createCountdown("re", new Date("February 27, 2026 00:00:00").getTime());
createCountdown("gta", new Date("May 26, 2026 00:00:00").getTime());
});
