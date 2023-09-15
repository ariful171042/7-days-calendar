let currentDate = new Date();

function displayDates() {
  const currentDateElement = document.getElementById("current-date");
  currentDateElement.textContent = "";

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    currentDateElement.innerHTML += `<p>${date.toLocaleDateString(
      "en-US",
      options
    )}</p>`;
  }
}

function showPrevious() {
  currentDate.setDate(currentDate.getDate() - 7);
  displayDates();
}

function showNext() {
  currentDate.setDate(currentDate.getDate() + 7);
  displayDates();
}

displayDates();
