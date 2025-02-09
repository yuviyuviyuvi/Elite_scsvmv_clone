const downloadBtn = document.getElementById("downloadBtn");
const enquireBtn = document.getElementById("enquireBtn");

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "../Images/invitation.webp";
  link.download = "invitation.webp";
  link.click();
});

enquireBtn.addEventListener("click", () => {
  window.location.href =
    "mailto:info@kanchiuniv.ac.in?subject=Enquiry%20about%20Elite%202k24";
});

const mapButton = document.querySelector(".map-button");
mapButton.addEventListener("click", () => {
  window.location.href = "https://maps.app.goo.gl/2ZxpueMDRJZgc4xT6";
});

const calendarButton = document.querySelector(".calendar-button");
calendarButton.addEventListener("click", () => {
  window.location.href = "https://calendar.google.com/calendar/r/eventsadd";
});
